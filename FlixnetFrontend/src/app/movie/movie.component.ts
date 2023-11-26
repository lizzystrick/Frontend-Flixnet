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
      this.movieService.getMovies().subscribe((data: any) => {
        this.movies = data.results;
      });
    }
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

  