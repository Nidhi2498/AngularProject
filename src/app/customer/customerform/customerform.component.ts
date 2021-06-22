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
  public customer : Customer[] = []; 
  actionDetail = Action;  //enum variable declaration
  public id! : number; //Id is provided for delete customer in html

  constructor(private fb: FormBuilder,
    private customerService: CustomerService, 
    private http : HttpClient
  ) { 
    let d= Action.EDIT_ACTION;
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

  
  public skillGroup() {
    return new FormGroup({
      title1: new FormControl(),
      title2: new FormControl()
    })
  }

  //get skill data from formGroup
  getskillarray() {
    return this.customerFormGroup.get('skill') as FormArray
  }

  //Multiple skill added
  addskillgroup() {
    const addskill = this.customerFormGroup.get('skill') as FormArray
    addskill.push(this.skillGroup())
  }

  // //Submit click event 
  // onSubmit() {
  //   console.log(this.customerFormGroup.value)
  // }

  ngOnInit(): void {
    
  }
  //get customer data
  getCustomer(){
    debugger
      this.customerService.getCustomer().subscribe((data:Customer[]) =>{
      this.customer = data
    })
  }
  

  //Add new customer
  Save(){
    debugger
    this.customerService.addCustomer(this.customerFormGroup.value).subscribe((item:Customer)=>{
      alert("Customer added successfully");
    })
        
  }

  //edit customer
  editCustomer(){
    debugger
    this.customerService.editCustomer(this.customerFormGroup.value).subscribe((item:Customer)=>{
     debugger
     alert("Customer updated successfully")
    })
    
  }

  //delete customer
  deleteCustomer(id:number){
    debugger
    this.customerService.deleteCustomer(id).subscribe((item:number)=>{
      alert("Customer deleted successfully")
      this.getCustomer();
    })
  }

 }


