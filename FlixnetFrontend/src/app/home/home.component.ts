import { Component } from '@angular/core';

interface Cards {
  keepWatching?: Array<number>;
  popular?: Array<number>;
}

interface Series {
  cardImage?: String;
  titleImage?: "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcArHdlNutkhzi4m0braVxrSDRkx8m1aSWrEp8q5v8xiA6RsJRYEnVF2oueJyhIv9WHVE9aRYfUfSQFdez26SmgAJc_aBhFEuHIl.webp?r=62b"
  backgroundImage?: String;
  relevance?: number;
  year?: number;
  minAge?: number;
  time?: number;
  season?: null;
  description?: String;
  cast?: Array<String>;
  genre?: Array<String>;
  scenes?: Array<String>;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {}
  show = false;
  serie: Series = {};
  userId = '1';
  loading = false;
  cards: Cards = {};
  popular?: Array<number> = [];
  popular2 = ['5', '6', '7'];
  keepWatching?: Array<number> = [];
  url: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/';


  close() {
    this.serie = {};
    this.show = false;
  }
}
