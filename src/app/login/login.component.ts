import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public EmailisVerified;
  public sesion = false;

  constructor(public auth: AuthService, public sesionVariable: SwitchModalService) {
    this.GetUserInfo();
  }

  GetUserInfo() {
    this.auth.user$.subscribe((response) => {
      let _response;
      _response = response;
      localStorage.setItem("EmailisVerified", _response.email_verified)
      if (_response.email_verified == true) {
        window.location.assign("http://localhost:4200/MainPage");
      } else {
        alert("Your email is not verified");
      }
    });
  }

  InitSesionVariable(){
    this.sesion = true;
  }

  ngOnInit(): void {
    this.EmailisVerified = localStorage.getItem("EmailisVerified")
    this.sesionVariable.$sesionVariable.subscribe((valor)=>{
      this.sesion = valor;
    });
  }

}
