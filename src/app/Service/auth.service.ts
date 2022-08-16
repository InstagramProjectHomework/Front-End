import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = <any>[];
  private readonly localURL = `${environment.localUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService
  ) {}
  logUser(email: string, password: string) {
    this.http
      .post(
        this.localURL + '/api/login',
        { email: email, password: password },
        {
          withCredentials: true,
        }
      )
      .subscribe((res: any) => {

        console.log({'This is the response from the server: ' :res})
          this.user = res.user;
          this.toastr.success(res.message);
          this.router.navigate(['ProfilePage']);
          this.cookie.set('login', res.user, { expires: 3 / 24 });
          sessionStorage.setItem('email', res.user.email);
        },(err: Error) => {
          if (err) return this.toastr.error('Wrong Email or Password. Try Again');
          return 0;
        }
        );
  }
  logOut() {
    this.cookie.deleteAll();
    this.http.get(this.localURL + '/api/logout').subscribe((resp: any) => {
      this.toastr.success(resp);
      this.router.navigate(['']);
    });
  }
  register(username: string, email: string, password: string, fullname: string) {
    this.http
      .post(
        this.localURL + '/api/signup',
        {username: username, email: email, password: password,fullname: fullname}).subscribe((res: any) => {
          console.log({'This is the response from the server: ' :res})
          this.user = res.user;
          this.toastr.success(res.message);
          this.router.navigate(['ProfilePage']);
          this.cookie.set('login', res.user, { expires: 3 / 24 });
        },(err: Error) => {
          if (err) return this.toastr.error(err.message);
          return 0;
        });

        }




  public get logIn(): boolean {
    if (this.cookie.get('login')) return true;

    return false;
  }
}
