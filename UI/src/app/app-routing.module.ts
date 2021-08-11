import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoadingWheelComponent } from './components/shared/loading-wheel/loading-wheel.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashMainComponent } from './components/dashboard/dash-main/dash-main.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  //{path:"", component: LoadingWheelComponent},
  //{path: "", loadChildren: ()=> import('./modules/chat/chat.module').then(m => m.ChatModule)},
  {path: "", component: DashMainComponent, canActivate: [UserGuard] },
  {path: "login", loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: "user", loadChildren:() => import('./modules/user/user.module').then(m => m.UserModule)},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
