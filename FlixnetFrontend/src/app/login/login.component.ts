import { Component } from '@angular/core';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import { Guid } from "guid-typescript";
import { Loginmodel } from "../model/user/loginmodel";
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../service/authentication.service';
import { Inject } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    isLoggedIn = false;
    Email: string = '';
    Password: string = '';

    constructor(@Inject(AuthenticationService) private authService: AuthenticationService, private router: Router) {

    }

    isValid(): boolean {
        console.log('Email:', this.Email);
        console.log('Password:', this.Password);
        return this.Email.trim() !== '' && this.Password.trim() !== '';
    }

    onSubmit() {
        if (!this.isValid()) {
            console.log('Validatie is mislukt. Het formulier wordt niet ingediend.');
            return;
        }

        let loginData: Loginmodel = new Loginmodel(this.Email, this.Password);
        console.log(loginData)

        this.authService.login(loginData)
            .subscribe(
                (result: any) => {
                    if (result && result.token) {
                        // Succesvol ingelogd, sla het token op en navigeer naar de homepagina
                        this.authService.setToken(result.token);
                        const ID = result.ID; // replace with the actual property name in the response

                    // Use the ID as needed
                    console.log('User ID:', ID);
                        this.router.navigate(['home']);
                    } else {
                        console.log('Inloggen mislukt. Geen token ontvangen.');
                    }
                },
                (error) => {
                    console.error('Inloggen mislukt', error);
                }
            );
    }

    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.Email = '';
    }

}
