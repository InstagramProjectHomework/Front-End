import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../Service/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  private readonly localURL = `${environment.localUrl}`;
  public user: User | any;
  user_id: any;
  username: any;
  fullname: any;
  email: any;
  bio: any;
  password: any;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  async updateUser() {
    try{
    await this.http.post(
        this.localURL+ '/api/user/userupdate/',
        {
          username:  this.username,
          fullname: this.fullname,
          email: this.email,
          bio: this.bio,
          password: this.password
        },
        { withCredentials: true }
      ).subscribe()
      this.router.navigate(['ProfilePage']);

    } catch (error) {
      console.error(error);
      return error;
    }
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
