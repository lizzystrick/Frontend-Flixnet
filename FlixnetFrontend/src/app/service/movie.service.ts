import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
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
private lastFetchedMoviesKey = 'lastFetchedMovies';
private movieTitles = new Map<string, string>(); 

httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}
  constructor (private http: HttpClient) { }

  likeMovie(userId: string, movieId: string): Observable<any> {
    
    //const userId = localStorage.getItem('userId'); // Get user ID from local storage
    const data = { userId: userId, movieId: movieId };
    console.log(data);
    return this.http.post(`${this.apiUrl}/like`, data, this.httpOptions);
}

getMovies(): Observable<any> {
  const url = `${this.TmdbUrl}/movie/popular?api_key=${this.apiKey}`;
  return this.http.get<{ results: any[] }>(url).pipe(
    map(response => {

      response.results.forEach((movie: any) => {
        this.movieTitles.set(movie.id.toString(), movie.title); // Cache the movie title
      });
      return response.results;
    })
  );
}

getLikedMoviesByUser(userId: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`, this.httpOptions);
}
getMovieById(movieId: number): Observable<any> {
  const url = `${this.TmdbUrl}/movie/${movieId}?api_key=${this.apiKey}`;
  return this.http.get(url);// Replace 'any' with your movie detail model if you have one
}
// Method to get a movie title by ID from the cache
getMovieTitleById(movieId: string): string | undefined {
  return this.movieTitles.get(movieId);
}
  //getMovies() {
    //const url = `${this.TmdbUrl}/movie/popular?api_key=${this.apiKey}`;
    //return this.http.get(url);
  //}

  postMovie(movies: Movie[]): Observable<Movie[]>{
    console.log(movies)
    return this.http.post<Movie[]>(`${this.apiUrl}`, movies, this.httpOptions)
  }

  private storeFetchedMovies(movies: Movie[]) {
    const movieIds = movies.map(movie => movie.id);
    localStorage.setItem(this.lastFetchedMoviesKey, JSON.stringify(movieIds));
  }

  private getPreviouslyFetchedMovies(): string[] {
    const data = localStorage.getItem(this.lastFetchedMoviesKey);
    return data ? JSON.parse(data) : [];
  }
  //saveMovies(movieModel: Movie) : Observable<Movie>{
    //return this.http.post<Movie>(`${this.TmdbUrl} /movie/popular?api_key=${this.apiKey}`, JSON.stringify(movieModel), this.httpOptions)
  //}



  }

  
  

