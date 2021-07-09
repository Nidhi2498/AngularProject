import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleInjectTokenRoutingModule } from './example-inject-token-routing.module';
import { ExampleInjectTokenComponent } from './example-inject-token.component';


@NgModule({
  declarations: [
    ExampleInjectTokenComponent
  ],
  imports: [
    CommonModule,
    ExampleInjectTokenRoutingModule
  ]
})
export class ExampleInjectTokenModule { }
