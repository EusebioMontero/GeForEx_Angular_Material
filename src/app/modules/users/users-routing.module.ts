import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from 'app/layout/base/base.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { UserGuardService as guard } from '../../shared/services/guards/user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [{
      path: 'crud-users',
      component: CrudUsersComponent,
      canActivate: [guard]
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
