import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(
        m => m.Home
      )
  },

  {
    path: 'movies',
    loadComponent: () =>
      import('./pages/movies/movies').then(
        m => m.Movies
      )
  },

  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details').then(
        m => m.MovieDetails
      )
  },

  {
    path: '**',
    redirectTo: ''
  }

];