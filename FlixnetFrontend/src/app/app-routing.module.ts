import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginBgComponent } from './login-bg/login-bg.component';
import { MovieComponent } from './movie/movie.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LoginBgComponent},
  {path: 'reg', component: RegistrationComponent},
  { path: 'liked-movies', component: LikedMoviesComponent },
  { path: 'movie', component: MovieComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'create-user', component: CreateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profiel', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
