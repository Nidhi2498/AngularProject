import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailRoutingModule } from './employee-detail-routing.module';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeDetailListContainerComponent } from './employee-detail-list-container/employee-detail-list-container.component';
import { EmployeeDetailPresentationComponent } from './employee-detail-list-container/employee-detail-presentation/employee-detail-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';


@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeDetailListContainerComponent,
    EmployeeDetailPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeServiceService],

})
export class EmployeeDetailModule { }
