import {Component, OnInit} from '@angular/core';
import {ServiceUsersService} from "../Services/service-users.service";
import {User} from "../Entity/User";
import {LoginRequest} from "../Entity/LoginRequest";
import {LoginResponse} from "../Entity/LoginResponse";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  listUsers!:User[];
  user!: User;
  loginrequest!:LoginRequest;

  constructor(private service:ServiceUsersService) {
  }
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
        // After successful login, check if user has admin role before accessing the resource
        this.checkUserRoleAndAccessResource();
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  checkUserRoleAndAccessResource() {
    // Call a service method to check user role using the token
    this.service.checkUserRole().subscribe(
      (response: any) => {
        const userRole = response.role; // Assuming the response contains the user role
        if (userRole === 'admin') {
          console.log('User has admin role. Access granted.');
          this.getUsers(); // Fetch users after successful login and admin role check
        } else {
          console.error('User does not have admin role. Access denied.');
          // Handle access denied scenario (e.g., show an error message)
        }
      },
      (error) => {
        console.error('Failed to check user role:', error);
        // Handle error scenario (e.g., show an error message)
      }
    );
  }

  getUsers() {
    this.service.getUsers().subscribe(
      (users: User[]) => {
        this.listUsers = users;
        console.log('Users retrieved successfully');
      },
      (error) => {
        console.error('Failed to retrieve users:', error);
      }
    );

  }










}
