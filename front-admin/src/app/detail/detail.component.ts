import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import{DetailProjet }from '../detail-projet';
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit{

  constructor(private projetsService: ProjetService, private route:ActivatedRoute,private router:Router){}

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
