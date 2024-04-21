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
        this.getUsers(); // After successful login, fetch users
      },
      (error) => {
        console.error('Login failed:', error);
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
