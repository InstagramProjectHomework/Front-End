import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/Service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
  }

  login(){
    this.authService.logUser(this.email, this.password)
  }

  ngOnInit(): void {
    if(this.authService.logIn){
      this.toastr.success('You are already logged in.','What?');
      this.router.navigate(['FeedPage'])
    }
  }

}
