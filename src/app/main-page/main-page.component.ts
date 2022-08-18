import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserInfo } from '../interfaces/userInfo.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private readonly localURL = `${environment.localUrl}`;
  users: User | any;
  usersInfo: UserInfo | any;

  userData = this.formBuilder.group({
    userphoto: '',
    username: '',
    followernumber: '',
    followingnumber: ''
  })

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUser();
    
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
