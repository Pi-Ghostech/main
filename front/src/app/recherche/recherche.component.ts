import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../projet';
import { ProjetServiceService } from '../projet-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent  implements OnInit{



  projets: Projet[] = [];
  searchText: string = '';
  currentRating: number = 0;
    constructor(
    private router:Router,private  ProjetServiceService:ProjetServiceService,private http: HttpClient
  ) {}
  ngOnInit(): void {    this.getprojet();

  }  private getprojet() {
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
getDetail(projetID: number) {
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
  




  

    rechercher(): void {
     
      if (this.searchText) {
        this.ProjetServiceService.rechercherProjets(this.searchText).subscribe(
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




 
    
      
     
    
  



}
