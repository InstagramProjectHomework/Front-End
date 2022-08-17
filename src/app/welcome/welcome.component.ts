import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private readonly localURL = `${environment.localUrl}`;
  public user: User | any;
  user_id: any;

  constructor( private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      console.log(params['token'])
    })
    
    this.user_id = sessionStorage.getItem('user_id');
    this.http
      .get(this.localURL + '/api/login', { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        this.user = res.user;
        console.log(res.user.EmailisVerified)
      });
  }

  async updateUser(update: any) {
    await this.http
      .patch(
        this.localURL + `/api/user/userupdate/${this.user_id}`,
        {
          username: update.username || this.user.username
        },
        { withCredentials: true }
      )
      .subscribe();
  }

}
