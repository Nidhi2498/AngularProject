import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleparentchildRoutingModule } from './exampleparentchild-routing.module';
import { ExampleparentchildComponent } from './exampleparentchild.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';


@NgModule({
  declarations: [
    ExampleparentchildComponent,
    ChildcomponentComponent
  ],
  imports: [
    CommonModule,
    ExampleparentchildRoutingModule
  ]
})
export class ExampleparentchildModule { }
