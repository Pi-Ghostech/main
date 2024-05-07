import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ClubService } from '../club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css']
})
export class CreateClubComponent implements OnInit{
  club:Club= new Club ();
  constructor(private clubService: ClubService,
    private router : Router){}
  ngOnInit(): void {
    
  }
  saveClub(){
    this.clubService.createClub(this.club).subscribe(data =>{
      console.log(data);
      this.goToClubList();
    }, 
  error => console.log (error));
  }

  goToClubList(){
    this.router.navigate(['/clubs']);

  }

  onSubmit(){
    console.log(this.club);
    this.saveClub();

  }
  

}
