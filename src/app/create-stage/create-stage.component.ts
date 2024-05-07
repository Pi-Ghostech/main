import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Stage} from "../Entity/Stage";


 import { Entreprise } from '../Entity/Entreprise';
import {StageService} from "../Services/StageServices/stage.service";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent implements OnInit {

  stage: Stage = new Stage();
  categories: any[] = [];
   entreprises: any[] = [];

  constructor(private stageService: StageService,
   private entrepriiseService: EntrepriiseService,
    private router: Router) {}

  ngOnInit(): void{
     this.loadEntreprises();
  }


  loadEntreprises() {
    this.entrepriiseService.getAllEntreprises().subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }





  saveStage(){
    this.stageService.createStage(this.stage).subscribe( data =>{
      console.log(data);
      this.goToStageList();
    },
    error => console.log(error));
  }

  goToStageList(){
    this.router.navigate(['/backtemplate/stage']);
  }

  onSubmit(){
    console.log(this.stage);
    this.saveStage();
  }
}
