import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class BankdetailserviceService {

  //send data to another component presentation
  public bankDetailsData : Subject<any> = new Subject();
  public bankDetailsData$!: Observable<any>;

  constructor() {
    this.bankDetailsData$ = this.bankDetailsData.asObservable();
   }

    // public bankDetails(accountFormGroup: FormGroup) {
    //   if (accountFormGroup.valid) {
    //     console.log('done');
    //     this.bankDetailsData.next(accountFormGroup.value);
    //   }
    // }
    
  }