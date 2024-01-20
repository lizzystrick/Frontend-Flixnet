import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { Movie } from '../model/movie';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../service/notification.service'; 


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
      },
      error => {
        console.error('Error fetching username:', error);
      }
    );
    }

    private handleNotification = (notification: any): void => {
      const { userId, movieId, userName } = notification;
      const movieTitle = this.movieService.getMovieTitleById(movieId);

      if (movieTitle && userName) {

            this.toastr.success(`Movie ${movieTitle} was liked by user ${userName}`);
          
      } else {
        console.error('Error: Movie title or username not found.');

      }
    }



private getUserId(): string | null {
  return this.authService.getCurrentUserId();
}


}
