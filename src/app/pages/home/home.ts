import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../components/hero/hero';
import { MovieSection } from '../../components/movie-section/movie-section';

import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    MovieSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  private router = inject(Router);

  private movieService = inject(MovieService);


  trendingMovies: Movie[] = [];

  popularMovies: Movie[] = [];

  latestMovies: Movie[] = [];


  ngOnInit(): void {

    this.movieService
      .getMovies()
      .subscribe(movies => {

        this.trendingMovies =
          movies.slice(0, 6);

        this.popularMovies =
          movies.slice(1, 7);

        this.latestMovies =
          movies.slice(0, 5);

      });

  }


  onMovieSelected(movie: Movie): void {

    this.router.navigate([
      '/movies',
      movie.id
    ]);

  }

}