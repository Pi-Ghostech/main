import {Component, OnInit} from '@angular/core';
import {Error} from "../Entity/Error";

import { Router } from '@angular/router';
import {ErrorsService} from "../Services/ErrorService/errors.service";

@Component({
  selector: 'app-errors-back',
  templateUrl: './errors-back.component.html',
  styleUrls: ['./errors-back.component.css']
})
export class ErrorsBackComponent implements OnInit {


  listErrors!:Error[];
  error!: Error;

  constructor(private service:ErrorsService,private router: Router) {}
  ngOnInit(): void {
    this.error=new Error();
    this.getErrors();

  }


  getErrors() {
    this.service.getErrors().subscribe(
      (errors: Error[]) => {
        this.listErrors = errors;
        console.log('Errors retrieved successfully');
      },
      (error) => {
        console.error('Failed to retrieve errors:', error);
      }
    );

  }


  getErrorById(ErreurId: number){
    this.router.navigate(['/backtemplate/error-details-back',ErreurId]);
  }

  deleteError(errorId: number){
    this.service.deleteError(errorId).subscribe( data => {
      console.log(data);
      this.getErrors();
    })
  }


  truncateDescription(description: string): string {
    const words = description.split(' ');
    if (words.length > 10) {
      return words.slice(0, 10).join(' ') + '...';
    } else {
      return description;
    }
  }

}
