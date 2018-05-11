import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule, MatDialogModule],
  exports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule, MatDialogModule]
})

export class MaterialModule {};