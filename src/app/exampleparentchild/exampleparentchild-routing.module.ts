import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleparentchildComponent } from './exampleparentchild.component';

const routes: Routes = [{ path: '', component: ExampleparentchildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleparentchildRoutingModule { }
