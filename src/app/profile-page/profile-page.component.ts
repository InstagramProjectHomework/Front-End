import { Component, OnInit, Inject } from '@angular/core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { SwitchModalService } from '../Service/switch-modal.service';
import {UserService} from 'src/app/Service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  faRightFromBracket = faRightFromBracket;
  faComment = faComment;
  faHeart = faHeart;
  user = <any>[];
  private readonly localURL = `${environment.localUrl}`;


  constructor(
    @Inject(DOCUMENT) public document: Document,
    public sesionVariableReset: SwitchModalService,
    private userService: UserService,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
   this.getUserData();
   console.log(this.user);
  }

  getUserData(){
    this.http
    .get(
      this.localURL + '/api/login', {withCredentials: true}).subscribe((res: any)=> {
        this.user = res.user;
      });
  }

  }





