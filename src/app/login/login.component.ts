import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(private authService: AuthService) {
  }

  login(){
    this.authService.logUser(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
