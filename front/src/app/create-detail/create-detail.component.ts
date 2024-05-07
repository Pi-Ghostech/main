import { Component, OnInit } from '@angular/core';
import { ProjetServiceService } from '../projet-service.service';
import { Projet } from '../projet';
import{DetailProjet }from '../detail-projet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.css']
})
export class CreateDetailComponent  implements OnInit {

  projetss: Projet[] = [];

  id!:number;
  projets: Projet =new Projet ;
  detail:DetailProjet=new DetailProjet;

  constructor(private  ProjetServiceService:ProjetServiceService, private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
  }




 
  onSubmit(){
    
  }
}
