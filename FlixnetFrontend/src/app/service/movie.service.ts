import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from "../model/movie";
import {Guid} from "guid-typescript";
const headers = new HttpHeaders().set('Content-Type', 'application/X-www-form-urlencoded');


// export type ApiResponse = {
//   Response: string;
//   Search: Movie[];
//   totalResults: string;
// };

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private apiKey = 'a9b7cc482d7f4310e604d6fb0cf70b35';
private TmdbUrl = 'https://api.themoviedb.org/3';
private apiUrl = 'https://localhost:7294/Movie'
httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}
  constructor (private http: HttpClient) { }

  getMovies() {
    const url = `${this.TmdbUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  postMovie(movies: Movie[]): Observable<Movie[]>{
    console.log(movies)
    return this.http.post<Movie[]>(`${this.apiUrl}`, movies, this.httpOptions)
  }
  //saveMovies(movieModel: Movie) : Observable<Movie>{
    //return this.http.post<Movie>(`${this.TmdbUrl} /movie/popular?api_key=${this.apiKey}`, JSON.stringify(movieModel), this.httpOptions)
  //}



  }

  
  

