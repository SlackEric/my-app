import { Demo1Component } from './demo1/demo1.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  },
  {
    path: 'app',
    component: AppComponent,
    canActivate: [AnyAuthGuard],
    children: [
       {path: 'demo1',
        component: Demo1Component
       }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
