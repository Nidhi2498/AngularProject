import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exampleswitch',
  templateUrl: './exampleswitch.component.html',
  styleUrls: ['./exampleswitch.component.css']
})
export class ExampleswitchComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
