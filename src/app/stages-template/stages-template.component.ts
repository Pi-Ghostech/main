import {AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Entreprise} from "../Entity/Entreprise";
import {Stage} from "../Entity/Stage";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";
import {StageService} from "../Services/StageServices/stage.service";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";
import {Error,Category} from "../Entity/Error";
import {ErrorsService} from "../Services/ErrorService/errors.service";




@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit{
  entreprises!: Entreprise[];  stages!: Stage[];   stagesbyactif!: Stage[];  stagesbyinactif!: Stage[];stagesbyentreprise!: Stage[];entreprise: Entreprise = new Entreprise();


  isloggedin=true;
  profileOff:boolean=true;
  profileOn:boolean=false;







  listErrors: Error[] = [];
  error!: Error;

  // Chart data properties
  chartData: ChartDataset[] = [];
  chartLabels: string[] = Object.values(Category);

  chartType: ChartType = 'bar'; // Change to 'bar' for a bar chart
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Category Distribution',
        font: {
          size: 16,
        },

      },
      tooltip: {
        enabled: true
      }
    }
  };


  constructor(    
    private service: ErrorsService,
    private router: Router,
    private _detector: ChangeDetectorRef,private route:Router ,private routes : ActivatedRoute, private entrepriiseService: EntrepriiseService, private stageService: StageService ) 
  {


  }



  navigatetostage(){
    this.route.navigateByUrl("/stages");
    this.isloggedin=false;
  }

  navigate(){
  this.route.navigateByUrl("/login");
  this.isloggedin=false;
}
  navigateto(){
    this.route.navigateByUrl("/login");
    this.isloggedin=false;
  }

  userState:boolean=false;



  ngOnInit(): void {

    this.error = new Error();
    this.getErrors();

    this.routes.queryParams.subscribe(params => {
      this.userState = params['userstate'] === 'true';
      // You can then use this.id in your component to perform further actions
    });
    if (this.userState){
      this.profileOff=false;
      this.profileOn=true;

    }
    this.getEntreprises();
    this.getStages();this.findByActif();this.findByInactif();
  }


  private getEntreprises(){
    this.entrepriiseService.getAllEntreprises().subscribe(data => {
      this.entreprises = data;
      if (this.entreprises.length > 0) {
      const firstEnterprise = this.entreprises[0];
      this.center = { lat: Number(firstEnterprise.latitude), lng: Number(firstEnterprise.longitude) };
    } else {
      // Set default center if no enterprises are available
      this.center = { lat: 0, lng: 0 };

    }

    })
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

  unavailableStage(stageId: number){
    this.stageService.unavailableStage(stageId).subscribe( data => {
      console.log(data);
      this.getStages();
    })
  }

  availableStage(stageId: number){
    this.stageService.availableStage(stageId).subscribe( data => {
      console.log(data);
      this.getStages();
    })
  }



/*--------------------------------------------------------------------------------------------------------------*/

display: any;


center: google.maps.LatLngLiteral = {
      lat: Number(this.entreprise.latitude),
      lng: Number(this.entreprise.longitude)
  };
  zoom = 7;
  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };


  markerPositions: google.maps.LatLngLiteral[] = [];




  public ngAfterViewInit(): void
  {
  }



  





  
  getErrors() {
    this.service.getErrors().subscribe(
      (errors: Error[]) => {
        this.listErrors = errors;
        console.log('Errors retrieved successfully');
        this.updateChartData();
      },
      (error) => {
        console.error('Failed to retrieve errors:', error);
      }
    );
  }

  updateChartData() {
    const categoryCounts: { [key in Category]: number } = {
      [Category.Front_end]: 0,
      [Category.Back_end]: 0,
      [Category.DevOps]: 0,
      [Category.Cloud_Computing]: 0,
      [Category.Data_Science]: 0,
      [Category.Mobile_Development]: 0,
      [Category.Cybersecurity]: 0,
      [Category.AI_and_Machine_Learning]: 0,
      [Category.Other]: 0
    };

    // Iterate over listErrors and update category counts
    for (const error of this.listErrors) {
      categoryCounts[error.category]++;
    }

    // Convert categoryCounts into an array of numbers
    const data: number[] = Object.values(categoryCounts);

    // Update chartData with the new data
    this.chartData = [{ data }];
  }

}
