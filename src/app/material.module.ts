import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatGridListModule, MatCardModule]
})

export class MaterialModule {};