import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from '../club.service';// Remplacez "path/to/club.service" par le chemin d'accès réel à votre service de gestion des clubs

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent implements OnInit {
  //Club: any = {};
  club:Club= new Club (); // Définissez le type approprié pour votre objet club (interface, classe, etc.)

  constructor(private route: ActivatedRoute, private router: Router, private clubService: ClubService) { }

  ngOnInit(): void {
    this.club.id = this.route.snapshot.params["id"];
    
    this.clubService.getClubById(this.club.id).subscribe(data => {
      this.club = data;
  
     } , error => console.log(error));
    
  } 

  onSubmit() {
    console.log('Submitting update for course:', this.club);
    this.clubService.updateClub(this.club.id, this.club).subscribe(
      data => {
        console.log('Update successful:', data);
        this.goToCourseList();
      }, 
      error => console.error('Update failed:', error)
    );
  }

goToCourseList() {
  this.router.navigate(['/clubs']);
}

   

}