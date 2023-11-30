import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user/user";
import {Guid} from "guid-typescript";
import {Createmodel} from "../model/user/createmodel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiURL = 'https://localhost:7294/User/';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }
  constructor(private http: HttpClient) {}

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
}
