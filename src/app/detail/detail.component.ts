import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Projet} from "../Entity/projet";
import {DetailProjet} from "../Entity/detail-projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {User} from "../Entity/User";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent   implements OnInit{




  constructor(private  ProjetServiceService:ProjetServiceService, private route:ActivatedRoute,private router:Router,private serviceuser:GetconnecteduseridService){}
  projetss: Projet[] = [];

  id!:number;
  projets: Projet =new Projet ;
  detail!:DetailProjet;
  user!:User
  ngOnInit(): void {
this.detail=new DetailProjet()

    this.id =this.route.snapshot.params['id'];
    this.ProjetServiceService.getdetailList(this.id).subscribe(
     ( data:any) =>{this.detail =data;
      }
    );
    this.user=new User();
      this.serviceuser.getConnectedUserObject().subscribe((u)=>
      {
        this.user=u;
      })

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
