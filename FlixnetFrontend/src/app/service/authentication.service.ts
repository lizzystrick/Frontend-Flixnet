import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Loginmodel } from '../model/user/loginmodel';
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthenticationService {
    private apiUrl = 'https://localhost:7294/user/'
    constructor(private http: HttpClient) { }

    login(loginData: Loginmodel): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}login`, loginData)

    }

    getCurrentUserId(): string | null {
        return localStorage.getItem('userID');
      }

    logout() {
        localStorage.removeItem('userID');
    localStorage.removeItem('token');
    }
}