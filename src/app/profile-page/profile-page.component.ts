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
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../Service/api.service';

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
  posts = <any>[];

  constructor(@Inject(DOCUMENT) 
                public document: Document, 
                public sesionVariableReset: SwitchModalService,
                private auth: AuthService, 
                private http: HttpClient,
                private cookie: CookieService,
                private router: Router,
                private toastr: ToastrService,
                private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getUserData();
    this.getUserPosts();
  }

  getUserPosts(){
    this.apiService.getUserPosts().subscribe((response) => {
      let _response;
      _response = response;
      this.posts = _response.posts;
      console.log(_response);
     });
  }

  getUserData(){
    this.http
    .get(
      this.localURL + '/api/login', {withCredentials: true}).subscribe((res: any)=> {
        this.user = res.user;
        this.EmailisVerificate(this.user.EmailisVerified)
      });
  }

  async EmailisVerificate(EmailisVerified){
    if(EmailisVerified === false){
      this.cookie.deleteAll();
    this.http.get(this.localURL + '/api/logout').subscribe((resp: any) => {
      this.toastr.warning('Please verify your email address', 'Verify Email');
      this.router.navigate(['']);

    });
    }else{
      this.router.navigate(['ProfilePage']);
    }
  }
}
