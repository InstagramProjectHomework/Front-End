import { Component, OnInit, Inject } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  faRightFromBracket = faRightFromBracket;
  faComment = faComment;
  faHeart = faHeart;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, public sesionVariableReset: SwitchModalService) { }

  ngOnInit(): void {
  }

  ResetSesionVariable(){
    this.sesionVariableReset.$sesionVariable.emit(false);
    let sesion;
    sesion =  this.sesionVariableReset.$sesionVariable;
    console.log(sesion)
    if (sesion == false) {
      window.location.assign("http://localhost:4200");
      alert("Your are not logged");
      console.log(sesion)
    } else {
    }
  }


}
