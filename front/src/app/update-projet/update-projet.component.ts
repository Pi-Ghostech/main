import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetServiceService } from '../projet-service.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit{
  
  id!: number;

  projets: Projet =new Projet();
  constructor(private  ProjetServiceService:ProjetServiceService, private route:ActivatedRoute,private router:Router){}
  
  
  ngOnInit(): void {    this.id =this.route.snapshot.params['id'];

  this.ProjetServiceService.getProjetById(this.id).subscribe(data =>{
    this.projets =data;
  
  },error =>console.error(error));
  
  }
  onSubmit() {
    this.ProjetServiceService.updateProjet(this.id,this.projets).subscribe(data =>{
  this.goToprojetList();
    },error=>console.error(error));
  }  
    goToprojetList(){
      this.router.navigate(['/projet'])
        }

      }