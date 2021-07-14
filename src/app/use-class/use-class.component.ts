import { Component, InjectionToken, OnInit } from '@angular/core';

export const message = new InjectionToken<string>('hello');
@Component({
  selector: 'app-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.css'],
  providers:[
    { 
      provide: message,
      useValue: 'hello world'
    }
  ]
})
export class UseClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
