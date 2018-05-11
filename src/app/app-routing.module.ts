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
import { ViewMoviesComponent } from './components/add-movies/view-movies/view-movies.component';
import { AuthGuard } from './guards/auth.guard';
import { AddUsersComponent } from './components/add-users/add-users.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch:'full'},
  { path: 'add-entries', component: AddEntriesComponent },
  { path: 'add-movies', component: AddMoviesComponent, canActivate: [AuthGuard], children: [
    { path: 'view-movies', component: ViewMoviesComponent }
  ] },
  { path: 'add-products', canActivate: [AuthGuard], component: AddProductsComponent },
  { path: 'splash', component: SplashComponent, canActivate: [AuthGuard], children: [
    { path: 'navbar2', component: Navbar2Component },
    { path: 'browse', component: BrowseEntriesComponent },
  ] },
  { path: 'landing-page', component: LandingPageComponent, children: [
    { path: 'navbar', component: NavbarComponent },
    { path: 'login', component: LoginComponent },
  ]},
  { path: 'add-users', component: AddUsersComponent, children: [
    { path: 'register', component: RegisterComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, LoginComponent, BrowseEntriesComponent, AddEntriesComponent, AddMoviesComponent, AddProductsComponent, SplashComponent, Navbar2Component, LandingPageComponent, ViewMoviesComponent, AddUsersComponent,]