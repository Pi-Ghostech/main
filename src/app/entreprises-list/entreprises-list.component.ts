import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
 import { Entreprise } from "../Entity/Entreprise";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprises-list.component.html',
  styleUrls: ['./entreprises-list.component.css']
})
export class EntreprisesListComponent implements OnInit {
  entreprises: Entreprise[] = [];

  constructor(private entrepriiseService: EntrepriiseService, private router: Router) {}

  ngOnInit(): void {
    this.getEntreprises();
  }

  private getEntreprises() {
    this.entrepriiseService.getAllEntreprises().subscribe(data => {
      this.entreprises = data;
    });
  }




  deleteEntreprise(entrepriseId: number){
    this.entrepriiseService.deleteEntreprise(entrepriseId).subscribe( data => {
      console.log(data);
      this.getEntreprises();
    })
  }

  updateEntreprise(entrepriseId: number){
    this.router.navigate(['/backtemplate/update-entreprise',entrepriseId]);
  }

}
