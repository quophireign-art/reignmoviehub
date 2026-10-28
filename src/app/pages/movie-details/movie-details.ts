import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss'
})
export class MovieDetails implements OnInit {

  private route = inject(ActivatedRoute);

  private movieService = inject(MovieService);


  movie?: Movie;


  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );


    this.movieService
      .getMovieById(id)
      .subscribe(movie => {

        this.movie = movie;

      });

  }

}