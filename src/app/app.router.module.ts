import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoUiComponent } from './demo-ui/demo-ui.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'demo'},
  { path: 'demo', component: DemoUiComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
