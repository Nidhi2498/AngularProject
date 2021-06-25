import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { Action, Customer } from '../customer.model';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  baseurl = 'http://localhost:4200/';
  customerFormGroup!: FormGroup;
  public customer: Customer[] = [];
  actionDetail = Action;  //enum variable declaration
  isSubmitted = false;


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


  ngOnInit(): void {

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


