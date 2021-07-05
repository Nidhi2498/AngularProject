import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleinterpolationComponent } from './exampleinterpolation.component';
import { ExampleinterpolationRoutingModule } from './exampleinterpolation-routing.module'

@NgModule({
  declarations: [
    ExampleinterpolationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExampleinterpolationRoutingModule
  ]
})
export class ExampleinterpolationModule { }
