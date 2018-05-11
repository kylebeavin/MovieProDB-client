import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MovieService } from '../../../../services/movies.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {
  @Input() movie: object;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DeleteMovieCompDialog, {
      width: '250px',
      data: this.movie
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }
}


@Component({
  selector: 'delete-movie-comp-dialog',
  templateUrl: 'delete-movie-comp-dialog.html',
})
export class DeleteMovieCompDialog {
  constructor(private _movieService: MovieService, public dialogRef: MatDialogRef<DeleteMovieCompDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
  onSubmitUpdate() {
    this._movieService.deleteMovie(this.data)
    location.reload();
  }

  onNoClick(): void {
    location.reload();
    this.dialogRef.close();
  }
}