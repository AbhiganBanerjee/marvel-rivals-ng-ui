//import the required services,interfaces,...etc.
import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  //Perform Constructor Injection for the BreakpointObserver service to track the Device Responsive ness
  constructor(private breakPointObserver:BreakpointObserver){}

  //Define a boolean flag to track the Small Screen status
  public isSmallScreen:boolean = false;

  ngOnInit(): void {
    //Call the observe method on the observer ref, to track the device [Handset] responsive
    this.breakPointObserver.observe([Breakpoints.Handset]).subscribe((result)=>{
      //If the Result matches with the SmallScreen Breakpoint of the device, then it sets true value
      this.isSmallScreen = result.matches;
    });
  }
}
