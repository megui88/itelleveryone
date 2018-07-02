import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdagesComponent} from './adages/list/adages.component';
import {AdageFormComponent} from './adages/form/adage-form.component';
import {AdageComponent} from './adages/details/adage.component';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AdagesComponent
      },
      {
        path: 'edit/:id',
        component: AdageFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new',
        component: AdageFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: AdageComponent,
        canActivate: [AuthGuard]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
