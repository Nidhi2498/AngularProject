import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Child1Component} from './child1/child1.component'
import {Child2Component} from './child2/child2.component'
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    path: 'products', pathMatch: 'full',
    component:ProductListComponent
  },
  {
    path : 'products/:id',
    component:ProductDetailsComponent
  },
  {
    path : 'create',
    component:ProductCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

