import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examplepipe',
  templateUrl: './examplepipe.component.html',
  styleUrls: ['./examplepipe.component.css']
})
export class ExamplepipeComponent implements OnInit {
  dateval =  Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
