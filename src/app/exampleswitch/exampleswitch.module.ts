import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleswitchRoutingModule } from './exampleswitch-routing.module';
import { ExampleswitchComponent } from './exampleswitch.component';


@NgModule({
  declarations: [
    ExampleswitchComponent
  ],
  imports: [
    CommonModule,
    ExampleswitchRoutingModule
  ]
})
export class ExampleswitchModule { }
