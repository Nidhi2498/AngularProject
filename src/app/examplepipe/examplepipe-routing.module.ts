import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplepipeComponent } from './examplepipe.component';

const routes: Routes = [{ path: '', component: ExamplepipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplepipeRoutingModule { }
