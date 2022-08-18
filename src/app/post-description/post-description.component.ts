import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from '../Service/switch-modal.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  constructor(public PostModal: SwitchModalService) { }

  ngOnInit(): void {
  }
  
  closePostModal(){
    this.PostModal.$postModal.emit(false);
  }

}
