import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../app/common.service'
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //Display array list of sending parent to child
  customer = [
    {id:1, name : "abc", age : 30},
    {id:2, name : "xyz", age : 20},
    {id:3, name : "pqr", age : 40}
]
  
  public message1 : any;

  myarr = ["mango","apple","grapes","pineapple"];
  
  
  onGetArraylist($event : any){
    console.log($event)
  }

  employee = ["abc","pqr","xyz"];
  
  //Increment or decrement the value
  Counter = 10;
  
  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  } 
  
  //Add or remove the number
  value : any;
  add = () =>{
    this.value = 5;
  }
  remove = () =>{
    this.value = "";
  }

  showData(title1:string){
  }  
  
  message : any;
  receivedMessage = ($event: any) => {
    this.message = $event
  }

  public fruitName : any;
    onSubmit(value:any) {
    this.fruitName.push(value);
  }

  //Array filtering example by using ngswitch
  data :any =  [
    {
      id : 1,
      name : "abc",
      currency : "INR"
    },
    {
      id : 2,
      name : "pqr",
      currency : "INR"
    },
    {
      id : 3,
      name : "xyz",
      currency : "USD"
    },
    {
      id : 4,
      name : "kit",
      currency : "INR"
    },
    {
      id : 5,
      name : "abc",
      currency : "USD"
    }
  ]

  public newArray: any[]= [];
  // = this.data.filter(function(ele:any){
  //   debugger
  //   return ele.currency == "INR";
  // });
  
  flag : boolean = true;
  onChange($flag : any){
    console.log($flag)
  
  }

  // receivedMessageparent(p){
  //   this.
  // }

}



