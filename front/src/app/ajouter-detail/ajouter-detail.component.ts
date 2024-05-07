import { Component ,OnInit } from '@angular/core';
import { DetailProjet } from '../detail-projet';
import { ProjetServiceService } from '../projet-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-detail',
  templateUrl: './ajouter-detail.component.html',
  styleUrls: ['./ajouter-detail.component.css']
})
export class AjouterDetailComponent implements OnInit {

  constructor(private  ProjetServiceService:ProjetServiceService, private route:ActivatedRoute,private router:Router){}

  id!:number;
  detail:DetailProjet=new DetailProjet;
  ngOnInit(): void {






  }


 

}
