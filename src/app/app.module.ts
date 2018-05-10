import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowseEntriesComponent } from './components/browse-entries/browse-entries.component';
import { AddEntriesComponent } from './components/add-entries/add-entries.component';

import { AuthService } from './services/auth.service';
import { MovieService } from './services/movies.service';
import { ProductService } from './services/products.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SplashComponent } from './components/splash/splash.component';
import { ViewMoviesComponent } from './components/add-movies/view-movies/view-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    AddProductsComponent,
    Navbar2Component,
    SplashComponent,
    AddMoviesComponent,
    ViewMoviesComponent
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