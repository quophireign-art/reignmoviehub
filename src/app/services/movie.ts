import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from '../models/movie';
import { MOVIES } from '../data/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }


  getMovieById(id: number): Observable<Movie | undefined> {

    const movie = MOVIES.find(
      movie => movie.id === id
    );

    return of(movie);

  }


  getMoviesByGenre(
    genre: string
  ): Observable<Movie[]> {

    if (genre === 'All') {
      return of(MOVIES);
    }

    return of(
      MOVIES.filter(
        movie => movie.genre === genre
      )
    );

  }

}