import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Stage} from "../Entity/Stage";
import {StageService} from "../Services/StageServices/stage.service";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";
import {Entreprise} from "../Entity/Entreprise";


@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit{

  stageId!: number;
  stage: Stage = new Stage();
  entreprises: any[] = [];

  constructor(private stageService: StageService,
    private route: ActivatedRoute,
    private router: Router,     private entrepriiseService: EntrepriiseService,){}

    ngOnInit(): void {
      this.stageId = this.route.snapshot.params["stageId"];
      this.loadEntreprises();
      this.stageService.getStageById(this.stageId).subscribe(data => {
        this.stage = data;



      }, error => console.log(error));
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

    onSubmit() {
      console.log('Submitting update for stage:', this.stage);
      this.stageService.updateStage(this.stageId, this.stage).subscribe(
        data => {
          console.log('Update successful:', data);
          this.goToStageList();
        },
        error => console.error('Update failed:', error)
      );
    }

  goToStageList() {
    this.router.navigate(['/backtemplate/stage']);
  }

}
