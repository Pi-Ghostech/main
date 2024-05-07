import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ClubService } from '../club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubs!: Club[];
  filteredClubs!: Club[];
  searchTerm: string = '';

  constructor(private clubservice:ClubService,private router: Router) {}

  ngOnInit(): void {
  this.getClubs();
    
  }
  private getClubs(){
    this.clubservice.getClubsList().subscribe(data => {
      this.clubs = data ;
    })
  }
  
  deleteClub(id: number){
    this.clubservice.deleteClub(id).subscribe( data => {
      console.log(data);
      this.getClubs();
    })
  }
  updateClub(id: number){
    this.router.navigate(['/update-club',id]);
  }
  sortClubsByNom() {
    this.clubservice.getAllClubsSortedByNom().subscribe(data => {
      this.clubs = data;
    });
  }
  searchClubs() {
    if (this.searchTerm.trim() !== '') {
      this.clubservice.getClubsByName(this.searchTerm).subscribe(data => {
        this.clubs = data;
      });
    } else {
      this.getClubs(); // Recharge tous les clubs si le champ de recherche est vide
    }
  }

}
