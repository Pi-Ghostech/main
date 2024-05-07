import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Error } from '../Entity/Error';
import {User} from "../Entity/User";
import {ErrorsService} from "../Services/ErrorService/errors.service";
import {GetconnecteduseridService} from "../Services/getconnecteduserid.service";

@Component({
  selector: 'app-update-error',
  templateUrl: './update-error.component.html',
  styleUrls: ['./update-error.component.css']
})
export class UpdateErrorComponent {



  errorId!: number;
  error: Error = new Error();
  user!:User
  constructor(private errorService: ErrorsService,
    private route: ActivatedRoute,
    private serviceuser:GetconnecteduseridService,
    private router: Router) {}

  ngOnInit(): void {
    this.errorId = this.route.snapshot.params["erreurId"];

console.log("id is : ",this.errorId);
    this.errorService.getErrorById(this.errorId).subscribe(data => {
      this.error = data;
    }, error => console.log(error));

    this.user=new User();
    this.serviceuser.getConnectedUserObject().subscribe((u:User)=>{
      this.user=u;

    });

  }

  onSubmit() {
    console.log('Submitting update for error:', this.error);
    this.errorService.updateError(this.errorId, this.error).subscribe(
      (err:Error) => {
        this.errorService.affectErrorToUser(err.idErreur,this.user.id).subscribe();
        console.log('Update successful:', err);
        this.goBackToErro();
      }

    );
  }


  goBackToErro(){
    this.router.navigate(['/frontClient/error-details',this.errorId]);
  }

}
