import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-liked-movies',
  templateUrl: './liked-movies.component.html',
  styleUrls: ['./liked-movies.component.css']
})
export class LikedMoviesComponent implements OnInit {
    @Input() movie: any;
  likedMovies: any[] = [];
  constructor(private movieservice: MovieService, private authService: AuthenticationService) {}
  getMoviePosterUrl(): string {
    return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  }

  ngOnInit() {
    const userId = this.authService.getCurrentUserId(); 
    if (userId) {
        this.movieservice.getLikedMoviesByUser(userId).subscribe(
            (likedMovies) => {
                likedMovies.forEach((likedMovie) => {
                  const movieId = likedMovie.movieId; 
                  this.movieservice.getMovieById(movieId).subscribe(
                    movieDetails => {
                        this.likedMovies.push(movieDetails);
                    },
                    error => {
                        console.error(`Error fetching details for movie ID ${movieId}:`, error);
                      }
                    );
                  });
                },
                error => {
                  console.error('Error fetching liked movies:', error);
                }
              );
            } else {
              console.error('User ID not found in local storage');
            }
          }

          deleteMovie(movieId: number, index: number): void {
            const userId = this.authService.getCurrentUserId(); 
            if (userId) {
              this.movieservice.deleteLikedMovie(userId, movieId).subscribe(
                () => {
                  this.likedMovies.splice(index, 1); 
                },
                (error) => {
                  console.error('Error deleting the movie', error);
                }
              );
            } else {
              console.error('User ID is not available.');

            }
          }
  }