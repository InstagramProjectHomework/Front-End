import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
