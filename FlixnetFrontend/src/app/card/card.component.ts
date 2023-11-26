import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() movie: any;
  showInfo = false;

  getMoviePosterUrl(): string {
    // Assuming the poster_path is available in the movie data
    return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

}
