import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, 
         MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, 
         MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule,
           MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule,
           MatCardModule,MatGridListModule],
  exports: [MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule,
           MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatSelectModule,
           MatCardModule,MatGridListModule]
})

export class MaterialModule {};