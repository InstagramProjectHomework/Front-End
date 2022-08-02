import { Component, OnInit } from '@angular/core';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
