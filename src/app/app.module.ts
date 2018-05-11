import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { MovieService } from './services/movies.service';
import { ProductService } from './services/products.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditMovieComponent, EditMovieCompDialog } from './components/add-movies/view-movies/edit-movie/edit-movie.component';
import { DeleteMovieComponent, DeleteMovieCompDialog } from './components/add-movies/view-movies/delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    EditMovieComponent,
    EditMovieCompDialog,
    DeleteMovieComponent,
    DeleteMovieCompDialog
  ],
  entryComponents: [
    EditMovieComponent,
    EditMovieCompDialog,
    DeleteMovieComponent,
    DeleteMovieCompDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule
  ],
  providers: [AuthService, MovieService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }