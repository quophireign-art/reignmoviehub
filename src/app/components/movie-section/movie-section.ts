import { Component, input, output } from '@angular/core';

import { Movie } from '../../models/movie';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-section',
  standalone: true,
  imports: [MovieCard],
  templateUrl: './movie-section.html',
  styleUrl: './movie-section.scss'
})
export class MovieSection {

  title = input.required<string>();

  subtitle = input<string>('');

  movies = input.required<Movie[]>();

  showSeeAll = input<boolean>(true);

  movieSelected = output<Movie>();

  onMovieSelected(movie: Movie): void {
    this.movieSelected.emit(movie);
  }

}