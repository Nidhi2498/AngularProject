import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Child1Component} from './child1/child1.component'
import {Child2Component} from './child2/child2.component'
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {
    path : 'child1',
    component:Child1Component 
  },  
  {
    path : 'child2',
    component:Child2Component
  },
  {
    path : 'student',
    component : ReactiveformComponent
  },
  {
   path :'customer',
   loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

