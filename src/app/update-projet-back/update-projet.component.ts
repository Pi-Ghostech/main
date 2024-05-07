import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Projet} from "../Entity/projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";
@Component({
  selector: 'app-update-projet-back',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']

})
export class UpdateProjetBackComponent implements OnInit {



  id!: number;

  projets: Projet =new Projet();
  constructor(private projetsService: ProjetServiceService, private route:ActivatedRoute,private router:Router){}

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
    this.router.navigate(['/backtemplate/projetback'])
      }



}
