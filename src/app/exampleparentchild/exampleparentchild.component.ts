import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exampleparentchild',
  templateUrl: './exampleparentchild.component.html',
  styleUrls: ['./exampleparentchild.component.css']
})
export class ExampleparentchildComponent implements OnInit {

  public message:any;
  public receivedata : any;

  data = [
    {
      id : 1,
      name : "abc",
      address : "daman",
      skill : "playing"
    },
    {
      id : 2,
      name : "pqr",
      address : "valsad",
      skill : "reading"
    },
    {
      id : 3,
      name : "xyz",
      address : "vapi",
      skill : "dancing"
    }
  ]

  receivedmessage($event:any){
    this.message = $event
  }

  receivedarray($event:any){
    this.receivedata = $event
  }

  constructor() { }

  ngOnInit(): void {
  }

}
