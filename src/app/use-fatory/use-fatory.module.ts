import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseFatoryRoutingModule } from './use-fatory-routing.module';
import { UseFatoryComponent } from './use-fatory.component';


@NgModule({
  declarations: [
    UseFatoryComponent
  ],
  imports: [
    CommonModule,
    UseFatoryRoutingModule
  ],
  providers: []
})
export class UseFatoryModule { }
