import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleroutingRoutingModule } from './examplerouting-routing.module';
import { ExampleroutingComponent } from './examplerouting.component';


@NgModule({
  declarations: [
    ExampleroutingComponent
  ],
  imports: [
    CommonModule,
    ExampleroutingRoutingModule
  ]
})
export class ExampleroutingModule { }
