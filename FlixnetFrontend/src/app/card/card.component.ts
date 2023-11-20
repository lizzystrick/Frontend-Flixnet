import { Component, Input, OnInit } from '@angular/core';


interface Series {
  backgroundImage?: String;
  cardImage?: String;
  cast?: Array<String>;
  description?: String;
  genre?: Array<String>;
  minAge?: number;
  relevance?: number;
  scenes?: Array<String>;
  season?: number;
  time?: null;
  titleImage?: String;
  year?: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent  {
  @Input() text: number = 0;
  url: string =
    'https://private-3923c4-santandercoders809.apiary-mock.com/series/';
  serie: Series = {};
  image?: String = '';
  property: number = 0;

  constructor() {}

}
