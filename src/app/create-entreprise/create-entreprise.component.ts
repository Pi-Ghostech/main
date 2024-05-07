import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Entreprise} from "../Entity/Entreprise";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";


@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.css']
})
export class CreateEntrepriseComponent implements OnInit {
  entreprise: Entreprise = new Entreprise();
  markers: Set<google.maps.Marker> = new Set();
  constructor(private entrepriiseService: EntrepriiseService,
    private router: Router) {}

  ngOnInit(): void{
  }

  saveEntreprise(){
    this.entrepriiseService.createEntreprise(this.entreprise).subscribe( data =>{
      console.log(data);
      this.goToEntrepriseList();
    },
    error => console.log(error));
  }

  goToEntrepriseList(){
    this.router.navigate(['/backtemplate/entreprise']);
  }



 /*--------------------------------------------------------------------------------------------------------------*/

 display2: any; display: any;
 center: google.maps.LatLngLiteral = { lat: 34.3, lng: 9.9 };
 zoom = 6;
 markerOptions: google.maps.MarkerOptions = { draggable: false };
 markerPosition: google.maps.LatLngLiteral | null = null;


 move(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.display2 = event.latLng.toJSON();
}

 addMarker(event: google.maps.MapMouseEvent) {
   if (event.latLng) {
     this.markerPosition = event.latLng.toJSON();
     this.display = { lat: this.markerPosition.lat, lng: this.markerPosition.lng };

        // Update entreprise latitude & longitude
        this.entreprise.latitude = this.display.lat;
        this.entreprise.longitude = this.display.lng;
   }
 }
 updateMap() {
  if (this.entreprise.latitude && this.entreprise.longitude) {
    this.center = { lat: parseFloat(this.entreprise.latitude), lng: parseFloat(this.entreprise.longitude) };
  }
}

/*--------------------------------------------------------------------------------------------------------------*/

  onSubmit(){
    console.log(this.entreprise);
    this.saveEntreprise();
  }
}
