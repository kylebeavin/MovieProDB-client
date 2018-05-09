import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule],
  exports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule]
})

export class MaterialModule {};