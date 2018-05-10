import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowseEntriesComponent } from './components/browse-entries/browse-entries.component';
import { AddEntriesComponent } from './components/add-entries/add-entries.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SplashComponent } from './components/splash/splash.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch:'full'},
  { path: 'add-entries', component: AddEntriesComponent },
  { path: 'add-movies', component: AddMoviesComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'splash', component: SplashComponent, children: [
    { path: 'navbar2', component: Navbar2Component },
    { path: 'browse', component: BrowseEntriesComponent },
  ] },
  { path: 'landing-page', component: LandingPageComponent, children: [
    { path: 'navbar', component: NavbarComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, LoginComponent, BrowseEntriesComponent, AddEntriesComponent, AddMoviesComponent, AddProductsComponent, SplashComponent, Navbar2Component, LandingPageComponent]