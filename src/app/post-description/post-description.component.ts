import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from '../Service/switch-modal.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  constructor(private PostModal: MatDialog) { }

  ngOnInit(): void {
  }
  
  closePostModal(){
    this.PostModal.closeAll()
  }

}
