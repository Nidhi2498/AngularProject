import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy{
  @Input() type: string = 'success';

  @Output() OnDestroy = new EventEmitter();
  constructor() { }
 
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }


}
