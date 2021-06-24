import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { ExampleobserveComponent } from '../exampleobserve/exampleobserve.component';
import { ExampleroutingComponent } from './examplerouting.component';

const routes: Routes = [
  { 
    path: '', 
    component: ExampleroutingComponent 
  },
  {
    path : 'observe',
    component: ExampleobserveComponent
  },
  {
    path:'child2', 
    component : Child2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleroutingRoutingModule { }
