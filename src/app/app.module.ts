import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { BrowseEntriesComponent } from './browse-entries/browse-entries.component';
import { AddEntriesComponent } from './add-entries/add-entries.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    BrowseEntriesComponent,
    AddEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
