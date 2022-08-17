import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.css']
})
export class CommentsModalComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  faArrowLeft = faArrowLeft;

  constructor(public modalMessages: SwitchModalService) { }

  ngOnInit(): void {
  }

  closeModalMessages(){
    this.modalMessages.$modalMessages.emit(false);
  }

}
