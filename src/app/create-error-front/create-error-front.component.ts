import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";
import {User} from "../Entity/User";
import {Error} from "../Entity/Error";
import {ErrorsService} from "../Services/ErrorService/errors.service";
@Component({
  selector: 'app-create-error-front',
  templateUrl: './create-error-front.component.html',
  styleUrls: ['./create-error-front.component.css']
})
export class CreateErrorFrontComponent implements OnInit{
  errorr: Error = new Error();
  user!:User
  constructor(
    private errorService: ErrorsService,
     private router: Router,
     private serviceuser:GetconnecteduseridService
    ) { }

  ngOnInit(): void{

    this.user=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.user=u;

    });

  }

  saveError(){
    this.errorService.createError(this.errorr).subscribe( (err:Error)=>{

      console.log("error id : ",err.idErreur);
      console.log("user id : ",this.user.id);

      this.errorService.affectErrorToUser(err.idErreur,this.user.id).subscribe();


      this.goToErrorList();
    },
    error => console.log(error));
  }


  onSubmit() {
    console.log(this.errorr);
    this.saveError();
  }




  goToErrorList() {
    this.router.navigate(['/frontClient/categories']);
  }

}
