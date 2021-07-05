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
  },
  { 
    path: 'examplepipe', 
    loadChildren: () => import('./examplepipe/examplepipe.module').then(m => m.ExamplepipeModule)
   },
  { path: 'interpolationEx', loadChildren: () => import('./exampleinterpolation/exampleinterpolation.module').then(m => m.ExampleinterpolationModule) },
  { path: 'parentchild', loadChildren: () => import('./exampleparentchild/exampleparentchild.module').then(m => m.ExampleparentchildModule) },
  { path: 'switch', loadChildren: () => import('./exampleswitch/exampleswitch.module').then(m => m.ExampleswitchModule) },
  { path: 'routing', loadChildren: () => import('./examplerouting/examplerouting.module').then(m => m.ExampleroutingModule) },
  { path: 'observe', loadChildren: () => import('./exampleobserve/exampleobserve.module').then(m => m.ExampleobserveModule) },
  { path: 'examplerxjs', loadChildren: () => import('./examplerxjs/examplerxjs.module').then(m => m.ExamplerxjsModule) },
  { path: 'employee-detail', loadChildren: () => import('./employee-detail/employee-detail.module').then(m => m.EmployeeDetailModule) },
  { path: 'exampleForkjoin', loadChildren: () => import('./example-forkjoin/example-forkjoin.module').then(m => m.ExampleForkjoinModule) },
  { path: 'Bank-Details', loadChildren: () => import('./bank-details/bank-details.module').then(m => m.BankDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

