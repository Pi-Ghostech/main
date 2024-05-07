import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Stage} from "../Entity/Stage";
import {StageService} from "../Services/StageServices/stage.service";

@Component({
  selector: 'app-stage-list',
  templateUrl: './stages-list.component.html',
  styleUrls: ['./stages-list.component.css']
})
export class StagesListComponent implements OnInit{
  stages!: Stage[];   stagesbyactif!: Stage[];  stagesbyinactif!: Stage[];

  constructor(private stageService: StageService,
    private router: Router){}

  ngOnInit(): void {
    this.getStages();this.findByActif();this.findByInactif()
  }

  private getStages(){
    this.stageService.getAllStages().subscribe(data => {
      this.stages = data;
    })
  }

  private findByActif(){
    this.stageService.findByActif().subscribe(data => {
      this.stagesbyactif = data;
    })
  }

  private findByInactif(){
    this.stageService.findByInactif().subscribe(data => {
      this.stagesbyinactif = data;
    })
  }

  deleteStage(stageId: number){
    this.stageService.deleteStage(stageId).subscribe( data => {
      console.log(data);
      this.getStages();
      this.goToStageList();
    })
  }

  updateStage(stageId: number){
    this.router.navigate(['/backtemplate/update-stage',stageId]);

  }


  unavailableStage(stageId: number){
    this.stageService.unavailableStage(stageId).subscribe( data => {
      console.log(data);
      this.getStages();
      this.goToStageList();
    })
  }

  availableStage(stageId: number){
    this.stageService.availableStage(stageId).subscribe( data => {
      console.log(data);
      this.getStages();
      this.goToStageList();
    })
  }


  goToStageList() {
    this.router.navigate(['/stage']);
    window.location.reload();
  }

}
