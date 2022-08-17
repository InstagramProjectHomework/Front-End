import { Component, OnInit, Inject } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { SwitchModalService } from '../Service/switch-modal.service';
import { AuthService } from '../Service/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public user: User | any;
  private readonly localURL = `${environment.localUrl}`;
  faRightFromBracket = faRightFromBracket;
  faComment = faComment;
  faHeart = faHeart;

  constructor(@Inject(DOCUMENT) 
                public document: Document, 
                public sesionVariableReset: SwitchModalService,
                private auth: AuthService, 
                private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get(this.localURL + '/api/login', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        this.user = res.user;
        sessionStorage.setItem('user_id', this.user._id);
      });
  }

  getUserId () {
    
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
