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
private apiUrl = 'https://localhost:7294/'
httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}
  constructor (private http: HttpClient) { }

  getMovies() {
    const url = `${this.TmdbUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  saveMovies(movieModel: Movie) : Observable<Movie>{
    return this.http.post<Movie>(this.apiUrl, JSON.stringify(movieModel), this.httpOptions)
  }
  // search(item: string): Observable<any> {
  //   let searchterm = `query=${item}`;
  //   try {
  //     this.result = this.http.post('/search', searchterm, {headers});
  //     return this.result;
  //   } catch (e) {
  //     console.log(e, 'error')
  //   }
  }
      // getMovies(query: string) {
      //   return this.http.get(`https://.omdbapi.com/?i=tt3896198&apikey=2bb61143=${query}` );
      // this.post('/search', async (req, res) => {
      //   let searchquery = req.body.query;
      //   let encsearchquery = encodeURIComponent(searchquery);
      //   const data = await ApiId.data.search(encsearchquery, apiKey);
      //   res.status(200).json(data);
      // })
  
  

