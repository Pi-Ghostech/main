import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {DetailProjet} from "../Entity/detail-projet";
import {Projet} from "../Entity/projet";
import {ProjetServiceService} from "../Services/ProjetServices/projet-service.service";
import {User} from "../Entity/User";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";


@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit{
  detail:DetailProjet=new DetailProjet;
  myform:any;

  user!:User
  projets: Projet =new Projet();
  constructor(private  ProjetServiceService:ProjetServiceService, private router:Router,    private formbuilder: FormBuilder,private serviceuser:GetconnecteduseridService
  ){

this.myform=this.formbuilder.group({
  title:['',Validators.required],
  lienSiteWeb :['',Validators.required],
  description :['',Validators.required],


})


  }





  ngOnInit(): void {
    this.user=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.user=u;

    });



  }

  goToprojetList(){
    this.router.navigate(['/projet'])



  }


  saveProjet(){
    this.ProjetServiceService.createProjet(this.projets).subscribe((projet:Projet)=>{
     console.log("projet id : ",projet.projetID)
      console.log("user id : ",this.user.id)

      this.ProjetServiceService.affecterProjetauser(projet.projetID,this.user.id).subscribe();

      this.goToprojetList();
    },error=>console.error(error) );
  }
  onSubmit(){
    console.log(this.projets);
    this.saveProjet();
  }


}
