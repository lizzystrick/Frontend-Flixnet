import { Guid } from 'guid-typescript';

export class Createmodel {
  public UserName: string;
  public Email: string;
  public Password: string;


  constructor(UserName: string, Email: string, Password: string) {
    this.UserName = UserName;
    this.Email = Email;
    this.Password = Password;
  }
}
