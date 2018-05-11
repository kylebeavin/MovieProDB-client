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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    routingComponents
=======
    routingComponents,
    EditMovieComponent,
    EditMovieCompDialog
  ],
  entryComponents: [
    EditMovieComponent,
    EditMovieCompDialog
>>>>>>> 02546186f5026580c668d26b294c90b16f4f16dd
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