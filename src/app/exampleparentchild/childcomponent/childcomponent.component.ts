import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent  {

  @Input() sendtochild:any;
  @Output() sendtoParent = new EventEmitter<any>();
  @Output() sendData = new EventEmitter<any>();

  constructor() { }

  onClickEvent(){
    this.sendtoParent.emit("Child evaluates");
  }

  Data = [
    {id:1, name:"abc"},
    {id:2, name:"pqr"},
    {id:3, name:"xyz"}
  ]

  onSendData(data:any){
    this.sendData.emit(this.Data)
  }
  ngOnInit(): void {
  }

  
}
