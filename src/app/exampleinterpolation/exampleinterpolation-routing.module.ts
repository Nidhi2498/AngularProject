import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleinterpolationComponent } from './exampleinterpolation.component';

const routes: Routes = [
  { path: '', component: ExampleinterpolationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleinterpolationRoutingModule { }
