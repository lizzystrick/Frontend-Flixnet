import { Component  } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {Guid} from "guid-typescript";
import {Createmodel} from "../model/user/createmodel";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent {
    Username: string = '';
    Email: string = '';
    Password: string = '';

    constructor(private userService: UserService, private router: Router) {

    }

    onSubmit() {

    
        if (!this.isValid()) {
          console.log('Validatie is mislukt. Het formulier wordt niet ingediend.');
        }
        let user: Createmodel = new Createmodel(this.Username, this.Email, this.Password)
        console.log(user)

        this.userService.postUser(user).subscribe(result =>{
          if(result == null){
            console.log("user is empty")
          } else {
            this.router.navigate(['home'], { queryParams: { data: JSON.stringify(result.id) }});
          }
        
        })
      }
    
      isValid(): boolean {
    
        return true;
      }
    
      cancel() {
    
        console.log('Formulier geannuleerd');
      }
}