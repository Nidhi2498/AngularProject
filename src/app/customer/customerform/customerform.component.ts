import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  baseurl = 'http://localhost:app/api/reviews';
  customerFormGroup!: FormGroup;
  isSubmitted = false;
  error: any;

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private http : HttpClient
  ) { }

  public skillGroup() {
    return new FormGroup({
      title1: new FormControl(),
      title2: new FormControl()
    })
  }

  getskillarray() {
    return this.customerFormGroup.get('skill') as FormArray
  }

  addskillgroup() {
    const addskill = this.customerFormGroup.get('skill') as FormArray
    addskill.push(this.skillGroup())
  }

  onSubmit() {
    console.log(this.customerFormGroup.value)
    this.addCustomer();
  }


  public addCustomer() {
    this.customerService.addCustomer(this.customerFormGroup.value).subscribe((value) => {
      console.log(value)
    })
  }



  ngOnInit(): void {
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

  get _student(){
    return this.customerFormGroup.controls;
  }

  public res = [];
  Save(){
    debugger
    this.isSubmitted = true;
    if (this.customerFormGroup.invalid)
    {
      return;
    }
    else{
      let id = this.customerFormGroup.controls.id.value;
      if(!id){
         let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post<Customer>(this.baseurl+'crud_customer', this.customerFormGroup.value).subscribe(response =>
        {
          console.log(response)
          alert("Customer added successfully");
          this.Reset();
        });
      }
    }
  }

  // this.http.post('http://localhost:app/api/reviews', JSON.stringify(review), {headers: headers})
  // .subscribe(res => {
  //   console.log(res.json());
  // });
  Reset(){


  }

}


