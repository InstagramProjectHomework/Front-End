import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { FeedModalComponent } from './feed-modal/feed-modal.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';

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
    CommentsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
