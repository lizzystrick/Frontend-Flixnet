import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from '../app/movie/movie.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginBgComponent } from './login-bg/login-bg.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    MovieComponent,
    LikedMoviesComponent,
    NavbarComponent,
    CardComponent,
    CreateUserComponent,
    LoginComponent,
    LoginBgComponent,
    ProfileComponent

  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
