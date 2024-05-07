import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Category} from "../Entity/Error";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
   front:Category = Category.Front_end ;
   back:Category = Category.Back_end ;
   devops:Category = Category.DevOps ;
   ds:Category = Category.Data_Science ;
   mobile:Category = Category.Mobile_Development ;
   other:Category = Category.Other ;
   ai:Category = Category.AI_and_Machine_Learning ;
   cloud:Category = Category.Cloud_Computing ;
   cyber:Category = Category.Cybersecurity ;

  constructor(private router: Router) {}


  goToErrorsByCategory(cat: Category){
    this.router.navigate(['/frontClient/errors',cat]);
  }

}
