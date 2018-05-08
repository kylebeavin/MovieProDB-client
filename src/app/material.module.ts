import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatInput } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule]
})

export class MaterialModule {};