import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/Service/auth.service';



@Component({
  selector: 'app-putemail',
  templateUrl: './putemail.component.html',
  styleUrls: ['./putemail.component.css']
})
export class PutemailComponent implements OnInit {
  email: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  sendPassword(){
    this.authService.resetPassword(this.email);
  }

}
