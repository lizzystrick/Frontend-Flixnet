import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { MovieService } from "../../app/service/movie.service";
import { Movie } from '../model/movie';
import { ToastrService } from 'ngx-toastr';
import { query } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
  })
  export class MovieComponent implements OnInit{
    movies: any[] = [];

  
    constructor(private movieService: MovieService, private toastr: ToastrService) {}
    ngOnInit(): void {
      this.loadMovies();
      
    }

    loadMovies(){
      this.movieService.getMovies().subscribe((data: any) => {
        this.movies = data.results;
    });
  }
      
    saveMoviesToBackend(){
      const moviesToSave: Movie[] = this.movies.map((movie: any) => {
        return {
          genre_ids: movie.genre_ids,

        } as Movie;
      });
    
    
    this.movieService.postMovie(moviesToSave).subscribe(
      (result) => {
        console.log('Movies saved successfully', result);
      },
      (error) => {
        console.error('Error saving movies', error);
      }
    );


    
  }

  }