import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {
  
  faPenSquare = faPenSquare;
  faComment = faComment;
  faHeart = faHeart;

  public modalSwitch = false;

  constructor(public modal: SwitchModalService) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor)=>{
      this.modalSwitch = valor;
    });
  }

  openModal(){
    this.modalSwitch = true;
  }

}
