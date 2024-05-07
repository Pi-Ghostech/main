import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-front-template',
  templateUrl: './front-template.component.html',
  styleUrls: ['./front-template.component.css']
})
export class FrontTemplateComponent implements OnInit{
  isloggedin=true;
  profileOff:boolean=true;
  profileOn:boolean=false;
  constructor(private route:Router ,private routes : ActivatedRoute ) {


  }

  navigate(){
  this.route.navigateByUrl("/login");
  this.isloggedin=false;
}
  navigateto(){
    this.route.navigateByUrl("/login");
    this.isloggedin=false;
  }

  userState:boolean=false;

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      this.userState = params['userstate'] === 'true';
      // You can then use this.id in your component to perform further actions
    });
    if (this.userState){
      this.profileOff=false;
      this.profileOn=true;

    }

  }
}
