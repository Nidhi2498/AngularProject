import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseExistingRoutingModule } from './use-existing-routing.module';
import { UseExistingComponent } from './use-existing.component';


@NgModule({
  declarations: [
    UseExistingComponent
  ],
  imports: [
    CommonModule,
    UseExistingRoutingModule
  ]
})
export class UseExistingModule { }
