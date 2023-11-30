import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';


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
  movies: any[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }




}
