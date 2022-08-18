import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { UserInfo } from '../interfaces/userInfo.interface';
import { SwitchModalService } from '../Service/switch-modal.service';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {

  private readonly localURL = `${environment.localUrl}`;
  users: User | any;
  usersInfo: UserInfo | any;

  userData = this.formBuilder.group({
    userphoto: '',
    username: '',
    followernumber: '',
    followingnumber: ''
  })

  public CommentsModal = false;

  constructor(public modalMessages: SwitchModalService, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUser();
    this.modalMessages.$modalMessages.subscribe((value) => {
      this.CommentsModal = value;
    });
  }

  openCommentsModal() {
    this.CommentsModal = true;
  }

  async getUser() {
    await this.http
      .get(this.localURL + '/api/login', { withCredentials: true })
      .subscribe((res: any) => {
        this.users = res.user;
        this.list(this.users._id);
      });
  }

  async list(user_id: any) {
     await this.http.get(this.localURL + `/api/user/getallusers/${user_id}`, { withCredentials: true })
      .subscribe((res: any) => {
        this.usersInfo = res;
        console.log(this.usersInfo);
      });
  }

}
