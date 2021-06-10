import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  
  @Input() customerDetails : any;
  @Input() name = ["abc",'pqr']
  //@Output() 
  @Input() showDetails : any;
  @Output() passData = new EventEmitter<any>();
  @Input() Changeevent : any;
  
  shifts: any = [
    {color: 'red'},
    {color: 'green'},
    {color: 'black'},
    {color: 'orange'},
    {color: 'purple'}
  ]
  onClick(){
    let arr1 = [{id:1, name:"abc"},
    {id:2, name:"abc"},
    {id:3, name:"abc"},
  ]
  this.passData.emit(arr1)
  }
  
  ngOnInit(): void {}
  
}
