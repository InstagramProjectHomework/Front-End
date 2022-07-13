import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

  public CommentsModal = false;

  constructor(public modalMessages: SwitchModalService) { }

  ngOnInit(): void {
    this.modalMessages.$modalMessages.subscribe((value) => {
      this.CommentsModal = value;
    });
  }

  openCommentsModal() {
    this.CommentsModal = true;
  }

}
