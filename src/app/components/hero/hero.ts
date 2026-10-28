import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  movie = {
    title: 'Shadow Protocol',
    rating: 8.7,
    year: 2026,
    duration: '2h 18m',
    genre: 'Action',
    secondGenre: 'Thriller',

    description:
      'A former intelligence agent is forced back into the shadows when a secret operation threatens everything he once protected.',

    backdrop:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba'
  };

}