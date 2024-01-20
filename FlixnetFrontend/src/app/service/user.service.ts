import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, map, throwError} from "rxjs";
import {User} from "../model/user/user";
import {Guid} from "guid-typescript";
import {Createmodel} from "../model/user/createmodel";
import { catchError } from 'rxjs';
import { UpdateModel } from '../model/user/updatemodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiURL = 'https://localhost:7294/User/';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }
  constructor(private http: HttpClient) {}

  getUsernameById(userId: string): Observable<string> {
    return this.http.get<{ username: string }>(`${this.apiURL}/${userId}`, this.httpOptions)
    .pipe(
      map(response  => response.username),
      catchError(error => {
        console.error('Error fetching username:', error);
        return throwError(error); // Handle error and rethrow
      }));
  }

  getUserByID(userID: Guid) : Observable<User>{
    return this.http.get<User>('https://localhost:7294/user/'+userID.toString(), this.httpOptions)
  }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>('https://localhost:7294/user/', this.httpOptions)
  }

  postUser(createUser: Createmodel) : Observable<User>{
    console.log(createUser)
    return this.http.post<User>(this.apiURL, JSON.stringify(createUser), this.httpOptions)
  }

  updateUser(user: UpdateModel): Observable<any> {
    return this.http.put(`${this.apiURL}${user.ID}`, user, this.httpOptions);
  }
}
