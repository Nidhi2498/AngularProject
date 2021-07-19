import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContainerRefRoutingModule } from './view-container-ref-routing.module';
import { ViewContainerRefComponent } from './view-container-ref.component';


@NgModule({
  declarations: [
    ViewContainerRefComponent
  ],
  imports: [
    CommonModule,
    ViewContainerRefRoutingModule
  ]
})
export class ViewContainerRefModule { }
