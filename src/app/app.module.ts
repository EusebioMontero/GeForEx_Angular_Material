import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BaseComponent } from './layout/base/base.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [//nuestros componentes (layout)
    AppComponent, BaseComponent, FooterComponent, NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],//servicios necesarios en todo el sistema
  bootstrap: [AppComponent]
})
export class AppModule { }
