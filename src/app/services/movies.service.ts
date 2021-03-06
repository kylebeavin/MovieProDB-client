import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';

const Api_Url = 'http://localhost:3000/api/movies';

@Injectable()
export class MovieService {

  constructor(private _http:HttpClient) { }

  addMovie(newMovie: Movie) {
    this._http.post(Api_Url, {'movie': newMovie})
      .subscribe(res => {
        console.log(res)
      })
  }

  getAllMovies() {
    return this._http.get(Api_Url)
  }

  updateMovie(movieUpdate: Movie) {
    this._http.put(`${Api_Url}/${movieUpdate.id}`, {'movie': movieUpdate})
      .subscribe(res => {
        console.log(res)
      })
  }

  deleteMovie(deletedMovie: Movie) {
    return this._http.delete(`${Api_Url}/delete/${deletedMovie.id}`)
      .subscribe(res => console.log('Deleted'))
  }
}