import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import {Projet} from "../Entity/projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";
import {User} from "../Entity/User";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {Course} from "../Entity/course";

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

user!:User;
  projets: Projet[] = [];
  searchText!: string;
  currentRating: number = 0;
  deleteOff:boolean=false;

    constructor(
    private router:Router,private  ProjetServiceService:ProjetServiceService,private http: HttpClient,private  serviceuser:GetconnecteduseridService
  ) {}
  ngOnInit(): void {

    this.getprojet();
    this.user = new User();
    const token = localStorage.getItem('token'); // Retrieve token from storage


    this.serviceuser.getConnectedUserObject().subscribe((u) => {
      this.user = u;
      // Check if both user projects and projects are loaded
      if (this.user.projets && this.projets) {
        this.deleteOff = this.shouldShowDeleteButton();}
    })


  }



  shouldShowDeleteButton(): boolean {
    // Iterate over each project in both lists and compare them
    for (const userProject of this.user.projets) {
      for (const project of this.projets) {
        // Compare properties of each project
        if (userProject.projetID === project.projetID) {
          return true;
        }
      }
    }
    return false;
  }
  private getprojet() {
    this.ProjetServiceService.getProjetList().subscribe(
      data =>{this.projets =data;
      }
    );


  }

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


  copyLink(lienSiteWeb: string): void {
    // Créer un élément textarea pour copier le lien
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.value = lienSiteWeb;
    document.body.appendChild(textarea);
    textarea.select();
    // Copier le lien dans le presse-papiers
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Afficher un message de succès
    alert('Le lien a été copié dans le presse-papiers : ' + lienSiteWeb);
}
getDetail(projetID: any) {
  this.router.navigate(['/detail', projetID]);
}

updateProjet(id: any){
  console.log("id: "+id);

  this.router.navigate(['update-projet',id]);
    }
    deleteProjet(id: any) {
      this.ProjetServiceService.deleteProjet(id).subscribe(
        (data) => {
          console.log("Delete response:", data);
          // Assuming you want to refresh the projet list after successful deletion
          this.getprojet();
        },
        (error) => {
          console.error("Error deleting projet:", error);
        }
      );
    }

    rating: number = 0;



  titre!:string;

    rechercher(searchText:string): void {

      if (this.searchText) {
        this.ProjetServiceService.rechercherProjets(searchText).subscribe(
          data =>{this.projets =data;

          },
          error => {
            console.error('Une erreur s\'est produite lors de la recherche : ', error);
            // Gérez les erreurs ici
          }
        );
      } else {
        // Gérer le cas où le champ de recherche est vide
      }
    }


    triParRating(){}


    }





