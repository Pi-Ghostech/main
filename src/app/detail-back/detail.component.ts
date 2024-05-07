import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";
import {Projet} from "../Entity/projet";
import {DetailProjet} from "../Entity/detail-projet";

@Component({
  selector: 'app-detail-back',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailBackComponent  implements OnInit{

  constructor(private projetsService: ProjetServiceService, private route:ActivatedRoute,private router:Router){}

   id!:number;
  projets: Projet =new Projet ;
  detail:DetailProjet=new DetailProjet;


  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];

    this.projetsService.getdetailList(this.id).subscribe(
      data =>{this.detail =data;
      }
    );

  }


}
