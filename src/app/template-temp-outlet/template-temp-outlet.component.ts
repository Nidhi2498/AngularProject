import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-temp-outlet',
  templateUrl: './template-temp-outlet.component.html',
  styleUrls: ['./template-temp-outlet.component.css']
})
export class TemplateTempOutletComponent implements OnInit {
  mycontext = {
    $implicit: 'LEVIS BRAND', 
    size : 400,
    alt : 'cmp_name'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
