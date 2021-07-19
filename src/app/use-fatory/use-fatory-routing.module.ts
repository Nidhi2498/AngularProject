import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseFatoryComponent } from './use-fatory.component';

const routes: Routes = [{ path: '', component: UseFatoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseFatoryRoutingModule { }
