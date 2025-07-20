import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SeasonstoryComponent } from './components/seasonstory/seasonstory.component';

//import the HttpClient module for HTTP API communication
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SeasonstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //Registered
  ],
  providers: [],
  bootstrap: [AppComponent] //Using the AppComponent at bootstrap to render the main component
})
export class AppModule { }
