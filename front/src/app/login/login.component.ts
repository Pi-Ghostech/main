import {Component, OnInit} from '@angular/core';
import {LoginResponse} from "../Entity/LoginResponse";
import {User} from "../Entity/User";
import {ServiceUsersService} from "../Services/service-users.service";
import {LoginRequest} from "../Entity/LoginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginrequest!:LoginRequest;
  isLoggedIn!: boolean;
  constructor(private service:ServiceUsersService,private router:Router) {}

  ngOnInit(): void {
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
            const userRole = response.role; // Accessing the role property
            console.log('User role:', userRole);
            if (userRole === 'ROLE_admin') { // Comparing with 'ROLE_admin'
              console.log('User has admin role');
              // Proceed with accessing admin resources
              this.isLoggedIn=true;
              this.router.navigate(['/backtemplate']);

              // Example route for admin
            } else {
              console.log('User does not have admin role');
              // Handle the case where the user does not have admin role
              /* this.router.navigate(['/backtemplate']); */// Example route for regular user
            }
          },
          (error) => {
            console.error('Failed to check user role:', error);
          }
        );
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }



}
