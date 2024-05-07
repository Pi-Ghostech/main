import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../projet';

import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
  
})
export class UpdateProjetComponent implements OnInit {


  
  id!: number;

  projets: Projet =new Projet();
  constructor(private projetsService: ProjetService, private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];

this.projetsService.getProjetById(this.id).subscribe(data =>{
  this.projets =data;

},error =>console.error(error));

  }
 
  
  onSubmit() {
    this.projetsService.updateProjet(this.id,this.projets).subscribe(data =>{
  this.goToprojetList();
    },error=>console.error(error));
    
    
  }
  goToprojetList(){
    this.router.navigate(['/projet'])
      }
  
  
 
}