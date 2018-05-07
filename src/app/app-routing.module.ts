import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowseEntriesComponent } from './browse-entries/browse-entries.component';
import { AddEntriesComponent } from './add-entries/add-entries.component';

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
    path: 'create',
    component: AddEntriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
