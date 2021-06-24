import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exampleinterpolation',
  templateUrl: './exampleinterpolation.component.html',
  styleUrls: ['./exampleinterpolation.component.css']
})
export class ExampleinterpolationComponent implements OnInit {
  public databinding = "";
  myarr = ["mango","apple","grapes","pineapple"];

  //Increment or decrement the value
  Counter = 10;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  } 

  //Hide or show value
  value : any;
  add = () =>{
    this.value = 5;
  }
  remove = () =>{
    this.value = "";
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular';
  myObservable : any;
  d = [{ id:1, Name:"abc", age:20},
        {id:2, Name:"xyz", age:30}]
  

}
