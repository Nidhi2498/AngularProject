import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleForkjoinRoutingModule } from './example-forkjoin-routing.module';
import { ExampleForkjoinComponent } from './example-forkjoin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleforjoinService } from './exampleforjoin.service';


@NgModule({
  declarations: [
    ExampleForkjoinComponent
  ],
  imports: [
    CommonModule,
    ExampleForkjoinRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExampleforjoinService]
})
export class ExampleForkjoinModule { }
