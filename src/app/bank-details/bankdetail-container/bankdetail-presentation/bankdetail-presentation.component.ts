import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bankdetails } from '../../bankdetails.model';
import { BankserviceService } from '../../bankservice.service';
import { BankdetailserviceService } from '../bankdetail-presenter/bankdetailservice.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-bankdetail-presentation',
  templateUrl: './bankdetail-presentation.component.html',
  styleUrls: ['./bankdetail-presentation.component.css'],
  viewProviders: [BankdetailserviceService]
})
export class BankdetailPresentationComponent implements OnInit {
  //declare formgroup 
  public accountFormGroup!: FormGroup;

  public bankdetails : Bankdetails[] = [];
 
  private _accountbankDetail : Bankdetails[] = [];
 


  public isSubmitted = false;
  @Output() add = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
  @Output() getbankdetail = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();


  //Search by Account Holder name
  public account_nameSearch:String = '';


  //Set method to set the value
  @Input() public set accountbankDetail(value:Bankdetails[]){
    if(value){
      this.bankdetails;
      this._accountbankDetail = value
      console.log(value)
      console.log(value[0].gender == 'female', value[0].basic_amt  * 20 / 100 + value[0].basic_amt)
    }
  }

 

  //Get all data
  public getBankDetail() {
    debugger
    this.bankservice.getBankDetail().subscribe((data: Bankdetails[]) => {
      this.bankdetails = data
    })
  }

  

  //get method for getting bank details
  public get accountbankDetail(): Bankdetails[]{
    return this._accountbankDetail;
  }



  constructor(private formBuilder: FormBuilder, 
    private bankservice:BankserviceService,
    private bankservicePresenter : BankdetailserviceService,
    private currencyPipe : CurrencyPipe
    ) 
    {
      this.accountFormGroup = this.formBuilder.group({
        id:[''],
        account_no : ['',  [Validators.required,  Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5), Validators.maxLength(15) ]],
        account_name: ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        email_id : ['', [Validators.required, Validators.email]],
        phone_no:[null,[Validators.pattern('/^\(\d{3}\)\s\d{3}-\d{4}$/'),Validators.required]],
        bank_name : ['---Select Bank---', [Validators.required]],
        gender : ['male'],
        address : ['', [Validators.required]],
        basic_amt : ['', [Validators.required]],
        currency : ['---Select Currency---', [Validators.required]]
    });

  }

    ngOnInit() {

    };
    

   //get all bank details
   public btnListBankDetail(){
      return this.bankservice.getBankDetail();
   }

  
   //Form data save and edit from table
   public btnSave(data: any){
     if(this.accountFormGroup.value != null){
      this.isSubmitted = true;
     }

    
     if(this.accountFormGroup.value.id!= '' && this.accountFormGroup.value.id)
     { 
        this.update.emit(this.accountFormGroup.value);
     }
     else{
        this.add.emit(this.accountFormGroup.value);
     }
   }

   //Get data by ID
   public getBankDetailById(id:number){
    this.bankservice.geteditBankDetailbyId(id).subscribe((data:Bankdetails)=>{
      //let result = this. femaleCondition();
      this.accountFormGroup.patchValue(data);
      alert("Bank detail added to form");
    })
   }

    //Get all bank detail
    public getAllBankDetails(){
      this.getbankdetail.emit(this.accountFormGroup.value);
    }



   //Delete the bank detail 
   public deleteBankDetail(id:number){
     this.delete.emit(this.accountFormGroup.value)
   }


   //Reset the form data
   public btnReset(){
      this.accountFormGroup.reset();
   }
}







  //  this.accountFormGroup.valueChanges.subscribe( form =>{
    //   if(form.currency == "INR")
    //   this.accountFormGroup.patchValue({
    //     basic_amt: this.currencyPipe.transform(form.basic_amt.replace(/\D/g, '').replace(/^0+/, ''), 'INR',
    //     'symbol-narrow', '1.0-0')}, {emitEvent : false});

    //     else if(form.currency == "USD")
    //     this.accountFormGroup.patchValue({
    //       basic_amt: this.currencyPipe.transform(form.basic_amt.replace(/\D/g, '').replace(/^0+/, ''), 'USD',
    //       'symbol-narrow', '1.0-0')}, {emitEvent : false});

    //     else if(form.currency == "CAD")
    //     this.accountFormGroup.patchValue({
    //      basic_amt: this.currencyPipe.transform(form.basic_amt.replace(/\D/g, '').replace(/^0+/, ''), 'CAD',
    //      'symbol-narrow', '1.0-0')}, {emitEvent : false});

    //      else{
    //       this.accountFormGroup.patchValue({
    //         basic_amt: this.currencyPipe.transform(form.basic_amt.replace(/\D/g, '').replace(/^0+/, ''), 'EUR',
    //         'symbol-narrow', '1.0-0')}, {emitEvent : false});
    //      }
    //   })