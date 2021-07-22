import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.css']
})
export class ScrollingComponent implements OnInit {
  employee = [
        {
                "empId":1,
                "empName":"Nidhi",
                "salary":12000
        },
        {
                "empId":2,
                "empName":"Jinal",
                "salary":7000
        },
        {
                "empId":3,
                "empName":"Vaibhavi",
                "salary":4000
        },
        {
                "empId":4,
                "empName":"Mahika",
                "salary":10000
        },
        {
                "empId":5,
                "empName":"Jinal",
                "salary":15000
        },
        {
                "empId":6,
                "empName":"Siya",
                "salary":3000
        },
        {
                "empId":7,
                "empName":"Binjal",
                "salary":2000
        }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
