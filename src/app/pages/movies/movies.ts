import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { MovieCard } from '../../components/movie-card/movie-card';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    FormsModule,
    SelectModule,
    InputTextModule,
    ButtonModule,
    MovieCard
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {

  private router = inject(Router);

  private movieService = inject(MovieService);

  movies: Movie[] = [];

  loading = true;

  searchTerm = '';

  selectedGenre = 'All';

  selectedSort = 'rating';

  ngOnInit(): void {

  this.movieService
    .getMovies()
    .subscribe({
      next: movies => {

        this.movies = movies;

        this.loading = false;

      },

      error: error => {

        console.error(
          'Failed to load movies',
          error
        );

        this.loading = false;

      }
    });

}

  genres = [
    'All',
    'Action',
    'Adventure',
    'Drama',
    'Sci-Fi',
    'Thriller',
    'Mystery'
  ];


  sortOptions = [
    {
      label: 'Highest Rated',
      value: 'rating'
    },
    {
      label: 'Newest',
      value: 'newest'
    },
    {
      label: 'Oldest',
      value: 'oldest'
    },
    {
      label: 'A-Z',
      value: 'az'
    }
  ];


  get filteredMovies(): Movie[] {

    let result = [...this.movies];


    // SEARCH

    if (this.searchTerm.trim()) {

      const search = this.searchTerm
        .toLowerCase()
        .trim();

      result = result.filter(movie =>
        movie.title
          .toLowerCase()
          .includes(search)
      );

    }


    // GENRE

    if (this.selectedGenre !== 'All') {

      result = result.filter(movie =>
        movie.genre === this.selectedGenre
      );

    }


    // SORT

    switch (this.selectedSort) {

      case 'rating':

        result.sort(
          (a, b) => b.rating - a.rating
        );

        break;


      case 'newest':

        result.sort(
          (a, b) => b.year - a.year
        );

        break;


      case 'oldest':

        result.sort(
          (a, b) => a.year - b.year
        );

        break;


      case 'az':

        result.sort(
          (a, b) =>
            a.title.localeCompare(b.title)
        );

        break;

    }


    return result;

  }


  onMovieSelected(movie: Movie): void {

    this.router.navigate([
      '/movies',
      movie.id
    ]);

  }


  clearFilters(): void {

    this.searchTerm = '';

    this.selectedGenre = 'All';

    this.selectedSort = 'rating';

  }

}