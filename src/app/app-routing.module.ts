import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';
const routes: Routes = [{
  path: '', component: BaseComponent,
  children: [{
    path: '', loadChildren: () => import('app/modules/home/home.module').then(m => m.HomeModule)
  }]
},
{
  path: '',
  children: [{
    path: 'auth',
    loadChildren: () => import('app/modules/auth/auth.module').then(m => m.AuthModule)
  }],
},
{
  path: '',
  children: [{
    path: 'users',
    loadChildren: () => import('app/modules/users/users.module').then(m => m.UsersModule)
  }],
},
{
  path: '',
  children: [{
    path: 'tablas-cat',
    loadChildren: () => import('app/modules/tablas-cat/tablas-cat.module').then(m => m.TablasCatModule)
  }],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
