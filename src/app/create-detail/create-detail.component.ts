import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Projet} from "../Entity/projet";
import {DetailProjet} from "../Entity/detail-projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";

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
