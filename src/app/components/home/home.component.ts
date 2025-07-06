import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*Initialize a list of objects containing social media icons as aside element items
    the List of aside item objects will come from Spring Boot API
  */
  public asideItems:any = []

  ngOnInit(): void {
    /*On the Component load fetch the AsideItems from the Spring Boot API
    Currently we are using fetch later we will shift to Services???*/
    fetch('http://localhost:8080/getAllAsideItems')
    .then(res => res.json())
    .then(data=>{
      console.log(data);

      //Assign the Retrieved data to the AsideItems array
      this.asideItems = data;
    }).catch(err => {
      console.error("Error:",err);
    })
  }
}
