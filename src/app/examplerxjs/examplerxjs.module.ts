import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplerxjsRoutingModule } from './examplerxjs-routing.module';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ExamplerxjsComponent } from './examplerxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExamplerxjsComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    CombineLatestComponent
  ],
  imports: [
    CommonModule,
    ExamplerxjsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ExamplerxjsModule { }
