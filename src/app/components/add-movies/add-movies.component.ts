import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {
  genres = ['Comedy','Action','Suspense','Horror','Romance','Misc']

  private _movieForm: FormGroup;

  constructor(private _form: FormBuilder, private _movieService: MovieService) { }

  ngOnInit() {
    this.createForm();
    document.getElementById("movieNameField").focus();
  }

  createForm() {
    this._movieForm = this._form.group({
      title: new FormControl,
      productionCompany: new FormControl,
      genre: new FormControl
    })
  }

  onSubmit() {
    this._movieService.addMovie(this._movieForm.value)
    this._movieForm.reset();
    document.getElementById("movieNameField").focus();
  }
}