import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

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
    private http: HttpClient,
    private toastr: ToastrService,
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

    public createPost(photolink : string, description : string){

      this.http.post(this.localURL+ '/api/post',
      {photolink:photolink, description:description},
      {withCredentials: true,}).subscribe((response) => {
        this.toastr.success('Post created successfully!');

      },(err: Error) => {
        if(err) return this.toastr.error('Post not created.', 'Error while creating post.');
      });

    }
}
