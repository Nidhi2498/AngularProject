import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseClassRoutingModule } from './use-class-routing.module';
import { UseClassComponent } from './use-class.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CowComponent } from './cow/cow.component';
import { TigerComponent } from './tiger/tiger.component';
import { AnyAnimalComponent } from './any-animal/any-animal.component';


@NgModule({
  declarations: [
    UseClassComponent,
    AnimalDetailComponent,
    CowComponent,
    TigerComponent,
    AnyAnimalComponent
  ],
  imports: [
    CommonModule,
    UseClassRoutingModule
  ]
})
export class UseClassModule { }
