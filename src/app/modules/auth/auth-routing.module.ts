import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BaseComponent } from 'app/layout/base/base.component';

const routes: Routes = [
  {
  path: '',
  component: BaseComponent,
  children:[{
    path: 'login',
    component: LoginComponent
  }]

},
{
  path: '',
  component: BaseComponent,
  children:[{
    path: 'logout',
    component: LogoutComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
