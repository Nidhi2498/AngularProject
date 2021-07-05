import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { Action, Customer } from '../customer.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  baseurl = 'http://localhost:4200/';
  public customerFormGroup: FormGroup;
  public customer: Customer[] = [];
  actionDetail = Action;  //enum variable declaration
  isSubmitted = false;
  public maleSubject = new BehaviorSubject('male');
  public femaleSubject = new BehaviorSubject('female');
  public search = new FormControl()

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private http: HttpClient
  ) {
    let d = Action.EDIT_ACTION;
    this.customerFormGroup = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      rollno: ['', [Validators.pattern(/^[0-9]\d*$/)]],
      address: ['', [Validators.required]],
      gender:[''],
      skill: this.fb.array([
        this.skillGroup()
      ]),
    })
  }

  //Declare method for skill array  
  public skillGroup() {
    return new FormGroup({
      title1: new FormControl(),
      title2: new FormControl()
    })
  }

  //Multiple skill added
  addskillgroup() {
    const addskill = this.customerFormGroup.get('skill') as FormArray
    addskill.push(this.skillGroup())
  }

  // removeskillgroup() {
  //   const addskill = this.customerFormGroup.get('skill') as FormArray
  //   addskill.reset(this.skillGroup())
  // }

  public changeOnClick(event: any) : void{
    if(this.customerFormGroup.value.gender == "male"){
      this.maleSubject.next(event.target.value)
    }
    else{
      this.femaleSubject.next(event.target.value)
    }
  }

  public onReset(){
    this.customerFormGroup == null
  }
 
  ngOnInit(): void {
    // this.search.valueChanges.pipe(
    //   debounceTime(1000),
    //   switchMap((value)=> this.customerService.getCustomer().find(item)=> item.includes(value))
    // )

  }

  //get All customer data
  public getCustomer() {
    debugger
    this.customerService.getCustomer().subscribe((data: Customer[]) => {
      this.customer = data
    })
  }


  //Add new customer and update the customer
  public onSave() {
    this.isSubmitted = true
    if (this.customerFormGroup.invalid) {
      return;
    }
    else {
      if (this.customerFormGroup.value.id !== '' && this.customerFormGroup.value.id) {
        this.customerService.updateCustomer(this.customerFormGroup.value).subscribe((item: Customer) => {
          alert("Customer updated successfully");
        })
      } else {
        this.customerService.addCustomer(this.customerFormGroup.value).subscribe((item: Customer) => {
          alert("Customer added successfully");
        })
      }

    }

  }

  //Get customer by Id
  public getCustomerId(id: number) {
    debugger
    this.customerService.geteditCustomerbyId(id).subscribe((item: Customer) => {
      debugger
      item.skill.map((col) => { this.addskillgroup() })
      // item.gender.map((gen)=> {this.gender.target(value)})
      this.customerFormGroup.patchValue(item) //bind data 
      alert("Customer updated successfully")
    })

  }

  //delete customer
  public deleteCustomer(id: number) {
    debugger
    this.customerService.deleteCustomer(id).subscribe((item: number) => {
      alert("Customer deleted successfully")
      this.getCustomer();
    })
  }

}


