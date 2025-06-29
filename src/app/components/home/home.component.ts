import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /*Initialize a list of objects containing social media icons as aside element items
    the List of aside item objects will come from Spring Boot API
  */
  public asideItems:any = [
    
  ]
}
