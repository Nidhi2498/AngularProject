import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseValueComponent } from './use-value.component';

const routes: Routes = [{ path: '', component: UseValueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseValueRoutingModule { }
