import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  title: string;
  productionCompany: string;
  genre: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(EditMovieCompDialog, {
      width: '250px',
      data: {
        title: this.title,
        productionCompany: this.productionCompany,
        genre: this.genre
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('howdy')
    })
  }

}

@Component({
  selector: 'edit-movie-comp-dialog',
  templateUrl: 'edit-movie-comp-dialog.html',
})
export class EditMovieCompDialog {

  constructor(
    public dialogRef: MatDialogRef<EditMovieCompDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}