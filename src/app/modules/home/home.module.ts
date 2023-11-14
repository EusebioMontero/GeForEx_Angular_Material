import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/material/material.module';
//routing
import { HomeRoutingModule} from './home-routing.module';
//componentes
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
