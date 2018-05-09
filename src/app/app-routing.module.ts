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

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'browse',
    component: BrowseEntriesComponent
  },
  {
    path: 'add-entries',
    component: AddEntriesComponent
  },
  {
    path: 'add-movies',
    component: AddMoviesComponent
  },
  {
    path: 'add-products',
    component: AddProductsComponent
  },
  {
    path: 'navbar2',
    component: Navbar2Component
  },
  {
    path: 'splash',
    component: SplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, LoginComponent, BrowseEntriesComponent, AddEntriesComponent, AddMoviesComponent, AddProductsComponent, SplashComponent, Navbar2Component]