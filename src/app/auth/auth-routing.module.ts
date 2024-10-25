import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';
import { MsgPageComponent } from './pages/msg-page/msg-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      { path: 'login', component: LoginPagesComponent },
      { path: 'registro', component: RegistroPageComponent },
      { path: 'msg', component: MsgPageComponent },
      { path: '**', redirectTo: 'login' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
