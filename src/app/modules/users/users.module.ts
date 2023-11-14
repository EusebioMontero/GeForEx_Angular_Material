import { NgModule } from '@angular/core';
//modulo compartido
import { SharedModule } from 'app/shared/shared.module';
//todo lo relacionado con Material y formularios
import { MaterialModule } from 'app/material/material.module';
//routing
import { UsersRoutingModule } from './users-routing.module';
//componentes
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';

@NgModule({
  declarations: [
    CrudUsersComponent,
    ListUsersComponent,
    DetailUsersComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
