import { Component, OnInit } from '@angular/core';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PostDescriptionComponent } from '../post-description/post-description.component';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faCompass = faCompass;
  faHeart = faHeart;
  faUserCircle = faUserCircle;
  faSignOut = faSignOut;
  faHouse = faHouse;
  faSquarePlus = faSquarePlus;
  faMessage = faMessage;
  public Post = false;

  constructor(public Modal: MatDialog,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    if(!this.authService.logIn){
      this.router.navigate(['']);
      this.toastr.warning('You must be logged in to continue.','Not logged in yet.');
    }
  }


  openPostModal() {
    this.Modal.open(PostDescriptionComponent);
  }

    logout() {
    this.authService.logOut();
    }
  }

