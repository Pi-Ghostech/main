import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { Router } from '@angular/router';
import { ProjetServiceService } from '../projet-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DetailProjet } from '../detail-projet';


@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit{
  detail:DetailProjet=new DetailProjet;
  myform:any;

  projets: Projet =new Projet();
  constructor(private  ProjetServiceService:ProjetServiceService, private router:Router,    private formbuilder: FormBuilder,
  ){

this.myform=this.formbuilder.group({
  title:['',Validators.required],
  lienSiteWeb :['',Validators.required],
  description :['',Validators.required],


})


  }

  
  
  
  
  ngOnInit(): void {


    
  } 
  goToprojetList(){
    this.router.navigate(['projet'])
      
  
  
  }
  
  
  saveProjet(){
    this.ProjetServiceService.createProjet(this.projets).subscribe(data=>{
      console.log(data);
      this.goToprojetList();
    },error=>console.error(error) );
  }
  onSubmit(){
    console.log(this.projets);
    this.saveProjet();
  }


}
