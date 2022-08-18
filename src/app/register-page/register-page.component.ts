import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/Service/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username: any;
  email: any;
  password: any;
  fullname: any;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  register(){
    this.authService.register(this.username, this.email, this.password, this.fullname)
  }

  ngOnInit(): void {
    if(this.authService.logIn){
      this.toastr.success('You are already logged in.','What?');
      this.router.navigate(['FeedPage'])
    }
  }

}
