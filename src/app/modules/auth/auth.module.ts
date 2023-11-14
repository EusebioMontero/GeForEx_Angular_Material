import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/material/material.module';
//routing
import { AuthRoutingModule } from './auth-routing.module';
//componentes
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
