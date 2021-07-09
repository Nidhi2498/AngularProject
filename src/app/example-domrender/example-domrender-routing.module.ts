import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDOMRenderComponent } from './example-domrender.component';

const routes: Routes = [{ path: '', component: ExampleDOMRenderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleDOMRenderRoutingModule { }
