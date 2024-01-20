import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user/user';
import { AuthenticationService } from '../service/authentication.service';
import { Guid } from 'guid-typescript';
import { UpdateModel } from '../model/user/updatemodel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    Username: string = '';
    Email: string = '';

  constructor(private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {

    }

    
    updateUser(): void {
        const userId = this.authService.getCurrentUserId();
        if (userId) {
          let userToUpdate = new UpdateModel(userId, this.Username, this.Email);
          this.userService.updateUser(userToUpdate).subscribe(
            () => alert('User updated successfully'),
            (error) => console.error('Error updating user', error)
          );
        } else {
          console.error('User ID is not available.');
        }
      }
    


    onSubmit(): void {
        this.updateUser();
      }
    }

    