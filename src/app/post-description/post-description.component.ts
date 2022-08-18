import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from '../Service/switch-modal.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../Service/api.service';


@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent implements OnInit {
  photofile: any;
  photolink: any;
  description: any;
  comments: any;
  uploadPreset: "cesarfoto";
  faArrowLeft = faArrowLeft;

  constructor(
    private PostModal: MatDialog,
    private apiService: ApiService,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  closePostModal(){
    this.PostModal.closeAll();
  }

  createPost(){
    this.apiService.createPost(this.photolink, this.description, this.comments);
  }

}
