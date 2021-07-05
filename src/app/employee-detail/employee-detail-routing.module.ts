import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailListContainerComponent } from './employee-detail-list-container/employee-detail-list-container.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeDetailComponent,
    children:[
      {
        path:'', 
        component:EmployeeDetailListContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailRoutingModule { }
