import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  //define two timer stream
  public firstTimer = timer(1000, 2000);
  public secondTimer = timer(3000, 2000);

  //both stream connect with combinelatest
  public connectStream = combineLatest(this.firstTimer, this.secondTimer);

  //Subscribe both the stream
  public subscribe = this.connectStream.subscribe(([firstTimer, secondTimer]) => {
    console.log('First Timer' + ' ' + firstTimer);
    console.log('Second Timer' + ' ' + secondTimer);
   
  })

  ngOnInit(): void {
  }

}
