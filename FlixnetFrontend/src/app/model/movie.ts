import { Guid } from 'guid-typescript';

export class Movie {
  public id: Guid;
  public title: string;
  public overview: string;
  public imageUrl: string[] = [];
  public genre_ids: number;


  constructor(ID: Guid, Title: string, Overview: string, ImageUrl: string[], GenreId: number) {
    this.id = ID;
    this.title = Title;
    this.overview = Overview;
    this.imageUrl = ImageUrl;
    this.genre_ids = GenreId;
  }
}