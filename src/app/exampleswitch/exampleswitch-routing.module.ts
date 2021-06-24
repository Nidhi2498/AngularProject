import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleswitchComponent } from './exampleswitch.component';

const routes: Routes = [{ path: '', component: ExampleswitchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleswitchRoutingModule { }
