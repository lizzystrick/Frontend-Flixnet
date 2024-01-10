import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-liked-movies',
  templateUrl: './liked-movies.component.html',
  styleUrls: ['./liked-movies.component.css']
})
export class LikedMoviesComponent implements OnInit {
  likedMovies: any[] = [];

  constructor(private movieservice: MovieService, private authService: AuthenticationService) {}

  ngOnInit() {
    const userId = this.authService.getCurrentUserId(); // Replace with actual user ID from authentication
    if (userId) {
        this.movieservice.getLikedMoviesByUser(userId).subscribe(
            (likedMovies) => {
                likedMovies.forEach((likedMovie) => {
                  // Ensure likedMovie is either the ID itself or has an 'id' property
                  const movieId = likedMovie.movieId; // Adjust based on your actual data structure
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
  }