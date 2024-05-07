import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginResponse} from "../Entity/LoginResponse";
import {User} from "../Entity/User";
import {ServiceUsersService} from "../Services/UserService/service-users.service";
import {LoginRequest} from "../Entity/LoginRequest";
import {Router} from "@angular/router";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {query} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginrequest!:LoginRequest;
  isLoggedIn!: boolean;
  passwordIncorrect:boolean=false;
  passwordChange:boolean=false;
  passwordAttempts: number = 0;
  EmailSent: boolean = false;
  userState: boolean = false;
  emailreq!:string;
  user!:User;
  id!:number;
  constructor(private service:ServiceUsersService,private router:Router) {}

  ngOnInit(): void {
    this.user=new User();
    this.loginrequest=new LoginRequest();


    }

  login() {
    this.service.Login(this.loginrequest).subscribe(
      (response: any) => {
        const loginResponse = response as LoginResponse;
        localStorage.setItem('token', loginResponse.jwtToken);
        console.log('Login successful');

        // After successful login, check user role
        this.service.checkUserRole().subscribe(
          (response: any) => {
              const userRoles: string[] = response.roles;
              console.log('User roles:', userRoles);
            if (userRoles.includes('ROLE_admin')) { // Comparing with 'ROLE_admin'
              console.log('User has admin role');
              // Proceed with accessing admin resources
              this.isLoggedIn=true;
              this.router.navigate(['/backtemplate']);

              // Example route for admin
            } else {
              if (userRoles.includes('ROLE_user')) {
                            this.isLoggedIn=true;
                            this.userState=true;
                this.router.navigate(['/frontClient'], { queryParams: { userstate:this.userState  } });
                            // Handle the case where the user does not have admin role
                            /* this.router.navigate(['/backtemplate']); */// Example route for regular user
                          }
            }
          },
          (error) => {
            console.error('Failed to check user role:', error);
          }
        );
      },
      (error) => {
        console.error('Login failed:', error);
        if (error.status === 401) { // Check if the error status is 401 (Unauthorized)
          this.passwordIncorrect = true; // Set passwordIncorrect to true if the password is incorrect
          this.passwordAttempts++; // Increment password attempt counter
          if (this.passwordAttempts === 3) { // Check if the number of attempts is 3
            // Show suggestion to change password after three failed attempts
            console.log('Suggest to change password');
            this.passwordChange = true;
            // You can display a suggestion message or show a modal here
          }
        }
      }
    );
  }
  changePasswordRequest(email:string){

    console.log('Email address:', email);
    // @ts-ignore
    this.service.sendEmail(email).subscribe();
    this.EmailSent=true;
  }

  navigate(){
    this.router.navigateByUrl("/login/signup");
    this.isLoggedIn=true;
}


}

