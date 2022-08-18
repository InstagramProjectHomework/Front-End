import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly localURL = `${environment.localUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService) { }

}