import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details.component';
import { BankdetailContainerComponent } from './bankdetail-container/bankdetail-container.component';

const routes: Routes = [
  {
     path: '', 
     component: BankDetailsComponent,
     children:[
      {
        path:'', 
        component:BankdetailContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankDetailsRoutingModule { }
