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

  //Define an Array of single routes or Single List items without Dropdown links, to define nav-paths in Navbar
  public singleListItems:any[] = [
    {
      'name':'home',
      'path':'home'
    },
    { 
      'name':'season story',
      'path':'seasonStory'
    }
  ];

  //Define an Array of List items as Dropdown menus in the navbar with sub-routes as options
  public dropDownListItems:any[] = [
    {
      'name':'hero',

      //define an inner array of paths for the dropdown-options
      'paths':[
        {
          'title':'heroes',
          'path':'heroes'
        },
        {
          'title':'team up',
          'path':'teamUp'
        },
        {
          'title':'Hero Hot list',
          'path':'heroHotList'
        }
      ]
    },
    {
      'name':'game info',

      //define an inner array of paths for the dropdown-options
      'paths':[
        {
          'title':'game features',
          'path':'gameFeatures'
        },
        {
          'title':'Maps',
          'path':'maps'
        }
      ]
    }
  ]

  ngOnInit(): void {
    //Call the observe method on the observer ref, to track the device [Handset] responsive
    this.breakPointObserver.observe([Breakpoints.Handset]).subscribe((result)=>{
      //If the Result matches with the SmallScreen Breakpoint of the device, then it sets true value
      this.isSmallScreen = result.matches;
    });
  }
}
