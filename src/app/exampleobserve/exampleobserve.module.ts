import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleobserveRoutingModule } from './exampleobserve-routing.module';
import { ExampleobserveComponent } from './exampleobserve.component';


@NgModule({
  declarations: [
    ExampleobserveComponent
  ],
  imports: [
    CommonModule,
    ExampleobserveRoutingModule
  ]
})
export class ExampleobserveModule { }
