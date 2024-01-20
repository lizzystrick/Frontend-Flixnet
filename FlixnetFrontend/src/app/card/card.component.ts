import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { AuthenticationService } from '../service/authentication.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() movie: any;
  showInfo = false;
  movies: Movie[] = [];
  constructor(private movieService: MovieService, private authService: AuthenticationService) {}
  
  getMoviePosterUrl(): string {

    return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  }

  likeMovie(movieId: string) {
    const userId = this.authService.getCurrentUserId(); // Implement this method to retrieve the current user's ID
    if (userId) {
      this.movieService.likeMovie(userId, movieId).subscribe(
        () => {
        console.log(`Movie ${movieId} liked by user ${userId}`);

    },
    error => {
      console.log('error liking movie', error);
    })
} else {
  console.log('You must be logged in to like a movie.');

}
  }


private getUserId(): string | null {
  return this.authService.getCurrentUserId();
}


}
