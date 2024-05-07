import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetServiceService } from '../projet-service.service';
import { Projet } from '../projet';
import{DetailProjet }from '../detail-projet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent   implements OnInit{



 
  constructor(private  ProjetServiceService:ProjetServiceService, private route:ActivatedRoute,private router:Router){}
  projetss: Projet[] = [];

  id!:number;
  projets: Projet =new Projet ;
  detail!:DetailProjet;
  ngOnInit(): void {
this.detail=new DetailProjet()

    this.id =this.route.snapshot.params['id'];
    this.ProjetServiceService.getdetailList(this.id).subscribe(
     ( data:any) =>{this.detail =data;
      }
    );

  }
  
  projetId!: number;
  goToprojetList(){
    this.router.navigate(['projet'])
      
  
  
  }

  // addRatingToProjet(projetId: number, rating: number) {
  //   this.ProjetServiceService.addRatingToProjet(projetId, rating).subscribe(
  //     data => {
  //       console.log(data);
  //       this.goToprojetList();
  //     },
  //     error => console.error(error)
  //   );
  // }
  


//   click(rating)
// {
//     this.ProjetServiceService.  addRatingToProjet(this.projetId, this.rating);
  
// }
rating!:number;





}
