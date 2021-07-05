import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleForkjoinComponent } from './example-forkjoin.component';

const routes: Routes = [{ path: '', component: ExampleForkjoinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleForkjoinRoutingModule { }
