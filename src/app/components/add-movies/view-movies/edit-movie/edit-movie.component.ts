import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MovieService } from '../../../../services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  @Input() movie: object;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(EditMovieCompDialog, {
      width: '250px',
      data: this.movie
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }

}

@Component({
  selector: 'edit-movie-comp-dialog',
  templateUrl: 'edit-movie-comp-dialog.html',
})

export class EditMovieCompDialog {
  genres = ['Comedy','Action','Suspense','Horror','Romance','Misc']

  constructor(private _movieService: MovieService, public dialogRef: MatDialogRef<EditMovieCompDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  onSubmitUpdate() {
    this._movieService.updateMovie(this.data)
  }

  onNoClick(): void {
    location.reload();
    this.dialogRef.close();
  }

}