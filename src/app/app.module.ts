import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { FeedModalComponent } from './feed-modal/feed-modal.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostDescriptionComponent } from './post-description/post-description.component';
import { Error404Component } from './error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PutemailComponent } from './putemail/putemail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfilePageComponent,
    LoginComponent,
    MainPageComponent,
    MessagesPageComponent,
    RegisterPageComponent,
    FeedPageComponent,
    FeedModalComponent,
    CommentsModalComponent,
    EditProfileComponent,
    PostDescriptionComponent,
    Error404Component,
    WelcomeComponent,
    PutemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
