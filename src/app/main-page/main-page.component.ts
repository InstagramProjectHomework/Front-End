import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private readonly localURL = `${environment.localUrl}`;
  user: User | any;

  userData = this.formBuilder.group({
    userphoto: '',
    username: '',
    followernumber: '',
    followingnumber: ''
  })

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
