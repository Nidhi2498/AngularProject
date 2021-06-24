import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplepipeRoutingModule } from './examplepipe-routing.module';
import { ExamplepipeComponent } from './examplepipe.component';


@NgModule({
  declarations: [
    ExamplepipeComponent
  ],
  imports: [
    CommonModule,
    ExamplepipeRoutingModule
  ]
})
export class ExamplepipeModule { }
