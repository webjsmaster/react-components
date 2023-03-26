import p1 from './../image/1.jpg';
import p2 from './../image/2.jpg';
import p3 from './../image/3.jpg';
import p4 from './../image/4.jpg';
import p5 from './../image/5.jpg';
import p6 from './../image/6.jpg';
import p7 from './../image/7.jpg';
import p8 from './../image/8.jpg';
import p9 from './../image/9.jpg';

export interface ICard {
  id: number;
  name: string;
  description: string;
  poster: string;
  like: number;
  view: number;
}

export const cards: ICard[] = [
  {
    id: 1,
    name: 'Thirst',
    description: 'This is thirst card-form',
    poster: p1,
    like: 2,
    view: 346,
  },
  {
    id: 2,
    name: 'Second',
    description: 'This is second card-form',
    poster: p2,
    like: 15,
    view: 125,
  },
  {
    id: 3,
    name: 'Third',
    description: 'This is third card-form',
    poster: p3,
    like: 25,
    view: 45,
  },
  {
    id: 4,
    name: 'Fourth',
    description: 'This is fourth card-form',
    poster: p4,
    like: 14,
    view: 34,
  },
  {
    id: 5,
    name: 'Fifth',
    description: 'This is fifth card-form',
    poster: p5,
    like: 6,
    view: 45,
  },
  {
    id: 6,
    name: 'Sixth',
    description: 'This is sixth card-form',
    poster: p6,
    like: 22,
    view: 567,
  },
  {
    id: 7,
    name: 'Seventh',
    description: 'This is seventh card-form',
    poster: p7,
    like: 8,
    view: 67,
  },
  {
    id: 8,
    name: 'Eighth',
    description: 'This is eighth card-form',
    poster: p8,
    like: 26,
    view: 124,
  },
  {
    id: 9,
    name: 'Ninth',
    description: 'This is ninth card-form',
    poster: p9,
    like: 26,
    view: 33,
  },
];
