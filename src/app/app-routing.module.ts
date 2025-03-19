import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeasonstoryComponent } from './components/seasonstory/seasonstory.component';

//Define the Routes accordingly with Path and Components
const routes: Routes = [
  //Define the Routes one by one
  {path:'home', component:HomeComponent},
  //Make the HomeComponent as the default component on page startup
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"seasonStory", component:SeasonstoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
