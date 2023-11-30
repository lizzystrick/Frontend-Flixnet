import { Guid } from 'guid-typescript';

export class User {
  public id: Guid;
  public username: string;
  public email: string;
  public password: string;


  constructor(ID: Guid, UserName: string, Email: string, Password: string) {
    this.id = ID;
    this.username = UserName;
    this.email = Email;
    this.password = Password;
  }
}
