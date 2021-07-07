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

   public bindForm(){
     return new FormGroup({
      id: new FormControl(), 
      
     })

    
    
}

// id:[''],
// account_no : ['',  [Validators.required,  Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5), Validators.maxLength(15) ]],
// account_name: ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
// email_id : ['', [Validators.required, Validators.email]],
// phone_no:['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]],
// bank_name : ['---Select Bank---', [Validators.required]],
// gender : ['male'],
// address : ['', [Validators.required]],
// basic_amt : ['', [Validators.required]],
// currency : ['---Select Currency---', [Validators.required]]

    // public bankDetails(accountFormGroup: FormGroup) {
    //   if (accountFormGroup.valid) {
    //     console.log('done');
    //     this.bankDetailsData.next(accountFormGroup.value);
    //   }
    // }
    
  }