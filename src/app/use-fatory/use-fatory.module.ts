import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseFatoryRoutingModule } from './use-fatory-routing.module';
import { UseFatoryComponent } from './use-fatory.component';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    UseFatoryComponent
  ],
  imports: [
    CommonModule,
    UseFatoryRoutingModule
  ]
})
export class UseFatoryModule { }
