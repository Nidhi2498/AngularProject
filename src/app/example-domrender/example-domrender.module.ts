import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleDOMRenderRoutingModule } from './example-domrender-routing.module';
import { ExampleDOMRenderComponent } from './example-domrender.component';
import { ChildrenderComponent } from './childrender/childrender.component';


@NgModule({
  declarations: [
    ExampleDOMRenderComponent,
    ChildrenderComponent
  ],
  imports: [
    CommonModule,
    ExampleDOMRenderRoutingModule
  ]
})
export class ExampleDOMRenderModule { }
