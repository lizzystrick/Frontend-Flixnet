import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { Movie } from '../model/movie';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../service/notification.service'; 


interface Cards {
  keepWatching?: Array<number>;
  popular?: Array<number>;
}

interface Series {
  cardImage?: String;
  titleImage?: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcArHdlNutkhzi4m0braVxrSDRkx8m1aSWrEp8q5v8xiA6RsJRYEnVF2oueJyhIv9WHVE9aRYfUfSQFdez26SmgAJc_aBhFEuHIl.webp?r=62b"
  backgroundImage?: String;
  relevance?: number;
  year?: number;
  minAge?: number;
  time?: number;
  season?: null;
  description?: String;
  cast?: Array<String>;
  genre?: Array<String>;
  scenes?: Array<String>;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private authService: AuthenticationService, 
    private notificationService: NotificationService, 
    private toastr: ToastrService, private userService: UserService) {}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    },
    error => {
      console.error('Error fetching movies:', error);
    }
    );
    this.notificationService.startConnection();
    this.notificationService.addNotificationListener(this.handleNotification);
  }


  fetchUsername(userId: string) {
    console.log('Fetching username for userId:', userId);
    this.userService.getUsernameById(userId).subscribe(
      username => {
        console.log('Username:', username);
        // Now you can use the username in your component
      },
      error => {
        console.error('Error fetching username:', error);
      }
    );
    }

    private handleNotification = (notification: any): void => {
      // Extract userId and movieId from the notification object
      const { userId, movieId, userName } = notification;
      const movieTitle = this.movieService.getMovieTitleById(movieId);
      // Assuming this.movies is an array of movies that includes the movie names
      if (movieTitle && userName) {
        // Now, fetch the username by userId
            // Now you can show the toast with both the movie name and username
            this.toastr.success(`Movie ${movieTitle} was liked by user ${userName}`);
          
      } else {
        console.error('Error: Movie title or username not found.');
        // Handle the case where the movie is not found in the local list
      }
    }
  //private handleNotification = (notification: any) => {
    // Assuming notification has the structure { userId, movieId }
    //this.toastr.success(`Movie ${notification.movieName} was liked by user ${notification.userName}`, 'New Like!');
  //}


private getUserId(): string | null {
  return this.authService.getCurrentUserId();
}


}
