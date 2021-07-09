import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleInjectTokenComponent } from './example-inject-token.component';

const routes: Routes = [{ path: '', component: ExampleInjectTokenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleInjectTokenRoutingModule { }
