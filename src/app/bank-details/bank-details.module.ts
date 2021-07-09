import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailsRoutingModule } from './bank-details-routing.module';
import { BankDetailsComponent } from './bank-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankserviceService } from './bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BankdetailContainerComponent } from './bankdetail-container/bankdetail-container.component';
import { BankdetailPresentationComponent } from './bankdetail-container/bankdetail-presentation/bankdetail-presentation.component';
import { CurrencyPipe } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { AccountNameFilterPipe } from './pipes/account-name-filter.pipe';


@NgModule({
  declarations: [
    BankDetailsComponent,
    BankdetailContainerComponent,
    BankdetailPresentationComponent,
    CustomDirective,
    AccountNameFilterPipe
  ],
  imports: [
    CommonModule,
    BankDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [BankserviceService, CurrencyPipe]
})
export class BankDetailsModule { }
