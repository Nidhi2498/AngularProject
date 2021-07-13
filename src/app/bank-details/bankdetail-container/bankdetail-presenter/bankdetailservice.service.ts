import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';


@Injectable()
export class BankdetailserviceService {

  //send data to another component presentation
  public bankDetailId : Subject<any> = new Subject();
  public bankDetailsId$!: Observable<any>;

  constructor() {
    this.bankDetailsId$ = this.bankDetailId.asObservable();
   }

   public bindForm(){
     return new FormGroup({
      id: new FormControl(), 
      account_no : new FormControl(Validators.required, Validators.pattern('[a-zA-Z ]*')), 
      account_name : new FormControl(Validators.required, Validators.pattern('[a-zA-Z ]*')),
      email_id: new FormControl(Validators.required, Validators.email),
      phone_no : new FormControl(Validators.required, Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)),
      bank_name : new FormControl(Validators.required),
      gender: new FormControl('male'),
      address: new FormControl(Validators.required),
      basic_amt : new FormControl(Validators.required),
      currency: new FormControl(Validators.required)
     })    
}

    // public bankDetails(accountFormGroup: FormGroup) {
    //   if (accountFormGroup.valid) {
    //     console.log('done');
    //     this.bankDetailId.next(accountFormGroup.value);
    //   } else {
    //   }
    

    public deletebankDetails(value : number) {
      console.log('delete','value');
      this.bankDetailId.next(value);
    }
    
  }