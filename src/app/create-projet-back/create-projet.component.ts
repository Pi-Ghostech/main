import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {Projet} from "../Entity/projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";


@Component({
  selector: 'app-create-projet-back',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetBackComponent implements OnInit {

projets: Projet =new Projet();
  constructor(private projetsService: ProjetServiceService, private router:Router){}

  ngOnInit(): void {

  }
  saveProjet(){
    this.projetsService.createProjet(this.projets).subscribe(data=>{
      console.log(data);
      this.goToprojetList();
    },error=>console.error(error) );
  }

  goToprojetList(){
this.router.navigate(['projet'])
  }

  onSubmit(){
    console.log(this.projets);
    this.saveProjet();
  }


userForms:FormGroup = new FormGroup({



Title:new FormControl(""),
lienSiteWeb :new FormControl(""),
description:new FormControl("")


});



generateStars(rating: number): string[] {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(rating)) {
      stars.push('star-yellow'); // Ajoute une étoile jaune si la position est inférieure au rating
    } else {
      stars.push('star-gray'); // Ajoute une étoile grise sinon
    }
  }
  return stars;
}



}
