import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProjetServiceService } from '../projet-service.service';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {



  constructor(
   private  ProjetServiceService:ProjetServiceService
  ) {}
  ngOnInit(): void {
  }

  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  // onClick(rating: number): void {
  //   this.rating = rating;
  //   this.ratingChange.emit(this.rating);
  // }
  projetId!: number
  onClick(rating: number): void {
    this.rating = rating;
    this.ProjetServiceService. addRatingToProjet(this.projetId, this.rating); // Appel de la méthode onRatingChange pour émettre le changement de note
  
   
  
  }
  
 
}
