import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ProjetService } from '../projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  projets: Projet[] = [];

  constructor(private projetService: ProjetService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getprojet();

 
  }

  private getprojet() {
    this.projetService.getProjetList().subscribe(
      data =>{this.projets =data;
      }
    );
  }


  updateProjet(id: any){
console.log("id: "+id);

this.router.navigate(['update-projet',id]);
  }

  getDetail(projetID: number) {
    this.router.navigate(['/detail', projetID]);
}
 


  deleteProjet(id: any) {
    this.projetService.deleteProjet(id).subscribe(
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

  chat(){
    this.router.navigate(['/chat']);
  }

}
