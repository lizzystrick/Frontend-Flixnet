import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { map, switchMap, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { MovieService } from "../../app/service/movie.service";
import { Movie } from '../model/movie';
import { query } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
  })
  export class MovieComponent implements OnInit{
    movies: any[] = [];
    // public loading: boolean = false;
    // public results: Observable<any>;
    // public searchField: FormControl;
    // searchControl: FormControl = new FormControl();
    // movies$!: Observable<any[]>;
  
    constructor(private movieService: MovieService) {}
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
        // Map your movie data to your Movie model
        // Adjust this based on the actual structure of your Movie model
        return {
          genre_ids: movie.genre_ids,
          // Add other properties you want to save
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
    // ngOnInit() {
    //   this.searchField = new FormControl();

    //   this.results = this.searchField.valueChanges
    //   .pipe(
    //     debounceTime(400),
    //     distinctUntilChanged(),
    //     tap(_ => {
    //       this.loading = true;
    //     }),
    //       switchMap(term => this.movieService.search(term)),
    //        tap(_ => (this.loading = false))
    //   );
    //   console.log('movie:', this.movieService.getMovies);
    // }

    
  }

  }