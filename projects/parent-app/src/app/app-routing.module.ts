import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {App1SharedModule} from '../../../first-app/src/app/app.module';
import {App2SharedModule} from '../../../second-app/src/app/app.module';

const routes: Routes = [
  {path: 'app1', loadChildren: '../../projects/first-app/src/app/app.module#App1SharedModule'},
  {path: 'app2', loadChildren: '../../projects/second-app/src/app/app.module#App2SharedModule'},
  {path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
