import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContainerRefComponent } from './view-container-ref.component';

const routes: Routes = [{ path: '', component: ViewContainerRefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewContainerRefRoutingModule { }
