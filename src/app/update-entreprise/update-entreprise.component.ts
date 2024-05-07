import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Entreprise} from "../Entity/Entreprise";
import {EntrepriiseService} from "../Services/StageServices/entrepriise.service";

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {
  entrepriseId!: number;
  entreprise: Entreprise = new Entreprise();

  constructor(private entrepriiseService: EntrepriiseService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.entrepriseId = +params['entrepriseId'];
      console.log('entrepriseId:', this.entrepriseId);
      if (!isNaN(this.entrepriseId)) {
        this.entrepriiseService.getEntrepriseById(this.entrepriseId).subscribe(
          (data: Entreprise) => {
            this.entreprise = data;
            this.center = { lat: Number(this.entreprise.latitude), lng: Number(this.entreprise.longitude) };


          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.error('Invalid entrepriseId:', this.entrepriseId);
      }
    });
  }



/*--------------------------------------------------------------------------------------------------------------*/

display2: any; display: any;
center: google.maps.LatLngLiteral = {
  lat: Number(this.entreprise.latitude),
  lng: Number(this.entreprise.longitude)
};
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


  onSubmit() {
    console.log('Submitting update for entreprise:', this.entreprise);
    this.entrepriiseService.updateEntreprise(this.entrepriseId, this.entreprise).subscribe(
      data => {
        console.log('Update successful:', data);
        this.goToEntrepriseList();
      },
      error => console.error('Update failed:', error)
    );
  }

  goToEntrepriseList(){
    this.router.navigate(['/backtemplate/entreprise']);
  }
}
