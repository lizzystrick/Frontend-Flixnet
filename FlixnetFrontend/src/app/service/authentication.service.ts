import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Loginmodel } from '../model/user/loginmodel';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthenticationService {
    private apiUrl = 'https://localhost:7294/user/'
    private readonly jwtTokenKey = 'jwtToken';
    constructor(private http: HttpClient) { }

    login(loginData: Loginmodel) {
        return this.http.post<any>(`${this.apiUrl}login`, loginData)
            .pipe(map((user) => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.setToken(user.token);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(this.jwtTokenKey);
    }

    getToken(): string | null {
        // Retrieve the token from local storage
        return localStorage.getItem(this.jwtTokenKey);
    }

    setToken(token: string): void {
        // Manually set the token in local storage
        localStorage.setItem(this.jwtTokenKey, JSON.stringify(token));
      }
}