import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { Bankdetails } from '../../bankdetails.model';
import { BankserviceService } from '../../bankservice.service';
import { BankdetailserviceService } from '../bankdetail-presenter/bankdetailservice.service';


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
  public search = new FormControl()
  private _accountbankDetail : Bankdetails[] = [];

  public isSubmitted = false;
  @Output() add = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();

  //Set method to set the value
  @Input() public set accountbankDetail(value:Bankdetails[]){
    if(value){
      this.bankdetails;
      this._accountbankDetail = value
    }
  }

  //get method for getting bank details
  public get accountbankDetail(): Bankdetails[]{
    return this._accountbankDetail;
  }

  constructor(private formBuilder: FormBuilder, 
    private bankservice:BankserviceService,
    private bankservicePresenter : BankdetailserviceService
    ) 
    {
      this.accountFormGroup = this.formBuilder.group({
        id:[''],
        account_no : ['',  [Validators.required,  Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5), Validators.maxLength(15) ]],
        account_name: ['', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]],
        email_id : ['', [Validators.required, Validators.email]],
        phone_no : ['', [Validators.required, Validators.maxLength(10)]],
        bank_name : ['', [Validators.required]],
        gender : ['male'],
        address : ['', [Validators.required]],
        basic_amt : ['', [Validators.required]],
        currency : ['', [Validators.required]]

    })

   }

   //get all bank details
   public btnListBankDetail(){
     debugger
      return this.bankservice.getBankDetail();
   }

  
   //Form data save and edit from table
   public result :any;
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

  //  public phoneNumberMask(){
  //       this.accountFormGroup = this.formBuilder.group({
  //         phoneNumber:['', Validators.mask({mask:'(999)-999 9999' })], 
  //     });
  //  }
 
  

   //Get data by ID
   public getBankDetailById(id:number){
     debugger
    this.bankservice.geteditBankDetailbyId(id).subscribe((data:Bankdetails)=>{
      //let result = this. femaleCondition();
      this.accountFormGroup.patchValue(data);
      alert("Bank detail added to form");
    })

   }



   //Delete data 
   public deleteBankDetail(id:number){
     debugger
     this.bankservice.deleteBankDetail(id).subscribe((data:number)=>{
       alert("Bank detail deleted successfully");
     })
   }


   //Reset the form data
   public btnReset(){
     debugger
      this.accountFormGroup.reset();
   }


   //Get all bank detail
   public getAllBankDetails(){
        this.bankservice.getBankDetail().subscribe((data:Bankdetails[])=>{
            this.bankdetails = data;
        })
   }

 
  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000),
      switchMap((value: string)=> this.bankservice.getBankDetail(value)),
    ).subscribe((filterData)=>{
      // this.array = filterData
      this.bankdetails=filterData;
    })
  }

}




