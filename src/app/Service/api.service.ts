import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly localURL = `${environment.localUrl}`;
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
    })
    }

  constructor(
    private http: HttpClient
    ) { }

    public getUserPosts(){

      try {
        return this.http.get(this.localURL+ '/api/post/user',{withCredentials: true} );
      } catch (error) {
        console.log(error);
        return error;
      }

    }

    public getAllPosts(){

      try {
        return this.http.get(this.localURL+ '/api/post/all',{withCredentials: true});

      } catch (error) {
        console.log(error);
        return error;
      }

    }

    public getUserPost(postId){

      try {
        return this.http.get(this.localURL+ '/api/post/'+postId, {withCredentials: true,});
      } catch (error) {
        console.log(error);
        return error;
      }

    }
}
