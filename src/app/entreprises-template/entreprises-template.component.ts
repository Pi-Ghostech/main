import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Entreprise} from "../Entity/Entreprise";
import {Stage} from "../Entity/Stage";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";
import {StageService} from "../Services/StageServices/stage.service";
















@Component({
  selector: 'app-entreprises-template',
  templateUrl: './entreprises-template.component.html',
  styleUrls: ['./entreprises-template.component.css']
})
export class EntreprisesTemplateComponent implements OnInit {


  entrepriseId!: number;  h!: number;
  entreprise: Entreprise = new Entreprise(); stagesbyentreprise!: Stage[];

  markers: Set<google.maps.Marker> = new Set();
  constructor(private entrepriiseService: EntrepriiseService,private stageService: StageService,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.entrepriseId = +params['id'];
      console.log('id:', this.entrepriseId);
      if (!isNaN(this.entrepriseId)) {
        this.entrepriiseService.getEntrepriseById(this.entrepriseId).subscribe(
          (data: Entreprise) => {
            this.entreprise = data;
            this.findByEntreprise(this.entrepriseId);
            this.center = { lat: Number(this.entreprise.latitude), lng: Number(this.entreprise.longitude) };
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.error('Invalid id:', this.entrepriseId);
      }
    });
  }
  private findByEntreprise(entrepriseId: number): void {
    this.stageService.findByEntreprise(entrepriseId).subscribe(data => {
      this.stagesbyentreprise = data;
    });
  }
  /*--------------------------------------------------------------------------------------------------------------*/




  /*--------------------------------------------------------------------------------------------------------------*/

  display: any;


  center: google.maps.LatLngLiteral = {
        lat: Number(this.entreprise.latitude),
        lng: Number(this.entreprise.longitude)
    };
    zoom = 17;
    markerOptions: google.maps.MarkerOptions = {
        draggable: false
    };


    markerPositions: google.maps.LatLngLiteral[] = [];

  /*
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
*/



}
