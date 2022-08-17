import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Error404Component } from './error404/error404.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "MainPage",
    component: MainPageComponent
  },
  {
    path: "ProfilePage",
    component: ProfilePageComponent
  },
  {
    path: "MessagesPage",
    component: MessagesPageComponent
  },
  {
    path: "RegisterPage",
    component: RegisterPageComponent
  },
  {
    path: "FeedPage",
    component: FeedPageComponent
  },
  {
    path: "EditProfile",
    component: EditProfileComponent
  },
  {
    path: "hello/:token",
    component: WelcomeComponent
  },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
