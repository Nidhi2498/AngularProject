import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleobserveComponent } from './exampleobserve.component';

const routes: Routes = [{ path: '', component: ExampleobserveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleobserveRoutingModule { }
