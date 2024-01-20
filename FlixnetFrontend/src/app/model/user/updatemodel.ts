import { Guid } from 'guid-typescript';

export class UpdateModel {
    public ID: string
  public UserName: string;
  public Email: string;


  constructor(ID: string, UserName: string, Email: string) {
    this.ID = ID;
    this.UserName = UserName;
    this.Email = Email;
  }

  
}