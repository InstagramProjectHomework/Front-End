import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { SwitchModalService } from '../Service/switch-modal.service';
import { ApiService } from '../Service/api.service';


@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  faPenSquare = faPenSquare;
  faComment = faComment;
  faHeart = faHeart;
  posts = <any>[];

  public modalSwitch = false;

  constructor(
    public modal: SwitchModalService,
    private apiService: ApiService,
) { }

  ngOnInit(): void {
    this.modal.$modal.subscribe((valor)=>{
      this.modalSwitch = valor;
    });

    this.apiService.getAllPosts().subscribe((response) => {
      let _response;
      _response = response;
      this.posts = _response.posts;
      console.log(this.posts);
     });
  }

  openModal(){
    this.modalSwitch = true;
  }

}
