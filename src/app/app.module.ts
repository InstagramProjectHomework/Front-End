import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

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
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostDescriptionComponent } from './post-description/post-description.component';
import { Error404Component } from './error404/error404.component';

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
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      domain: 'dev-l42-bmyd.us.auth0.com',
      clientId: 'UPxMdlA8ahfcDLn7JmLn0VXRFbCd6sF6'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
