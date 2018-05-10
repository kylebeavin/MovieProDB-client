import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movies.service';

import { Movie } from '../../../models/Movie';
import { MOVIES } from './sample-movies';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class ViewMoviesComponent implements OnInit {
  movies: any = MOVIES;
  displayedColumns = ["title", "productionCompany", "genre"]

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getAllMovies()
      .subscribe(
        movieData => {
          console.log(movieData)
          this.movies = movieData;
        }
      )
  }

}
