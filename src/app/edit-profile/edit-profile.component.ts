import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../Service/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  private readonly localURL = `${environment.localUrl}`;
  public user: User | any;
  user_id: any;

  userData = this.formBuilder.group({
    username: undefined,
    fullname: undefined,
    bio: undefined,
    email: undefined,
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder,) { }

  

  async updateUser(update: any) {
    await this.http
      .patch(
        this.localURL + `/api/user/userupdate/${this.user_id}`,
        {
          username: update.username || this.user.username,
          fullname: update.fullname || this.user.fullname,
          email: update.email || this.user.email,
          bio: update.bio || this.user.bio,
        },
        { withCredentials: true }
      )
      .subscribe();
      window.location.assign("http://localhost:4200/ProfilePage");
      alert("The profile was edited");
  }

  ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_id');
    this.http
      .get(this.localURL + '/api/login', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        this.user = res.user;
      });
  }


}
