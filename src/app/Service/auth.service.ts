import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
    private cookie: CookieService
  ) {}
  logUser(email: string, password: string) {
    this.http
      .post(
        this.localURL + 'api/login',
        { email: email, password: password },
        {
          withCredentials: true,
        }
      )
      .subscribe((res: any) => {
        console.log(res.message);
        this.user = res.user;
        this.router.navigate(['expedient']);
        this.cookie.set('login', res.user, { expires: 3 / 24 });
      });
  }

  logOut() {
    this.cookie.delete('login');
    this.http.get(this.localURL + 'api/logout').subscribe((resp: any) => {
    });
  }

  public get logIn(): boolean {
    if (this.cookie.get('login')) return true;

    return false;
  }
}
