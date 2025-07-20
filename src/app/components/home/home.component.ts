//import the ApiService for API Calls
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Inject the ApiService inside this component for handlign API Calls
  constructor(private apiService: ApiserviceService){}

  /*Initialize a list of objects containing social media icons as aside element items
    the List of aside item objects will come from Spring Boot API
  */
  public asideItems:any = []

  ngOnInit(): void {
    /*On the Component load fetch the AsideItems from the Spring Boot API
    Via the ApiService async methods that we have configured*/
    this.apiService.GetAllListItems('http://localhost:8080/getAllAsideItems').subscribe((data)=>{
      console.log(data)
      this.asideItems = data;
    });
  }
}
