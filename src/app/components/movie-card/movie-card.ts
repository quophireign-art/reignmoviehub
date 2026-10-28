import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss'
})
export class MovieCard {

  movie = input.required<Movie>();

  watch = output<Movie>();

  movieSelected = output<Movie>();

  onWatch(): void {
    this.watch.emit(this.movie());
  }

  onMovieClick(): void {
    this.movieSelected.emit(this.movie());
  }

}