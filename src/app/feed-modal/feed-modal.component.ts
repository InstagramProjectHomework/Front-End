import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from '../Service/switch-modal.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed-modal',
  templateUrl: './feed-modal.component.html',
  styleUrls: ['./feed-modal.component.css']
})
export class FeedModalComponent implements OnInit {
  
  faPaperPlane = faPaperPlane;
  faHeart = faHeart;

  constructor(public modal: SwitchModalService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modal.$modal.emit(false);
  }

}
