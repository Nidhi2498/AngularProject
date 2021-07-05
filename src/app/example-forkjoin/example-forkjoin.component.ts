import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, zip } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-example-forkjoin',
  templateUrl: './example-forkjoin.component.html',
  styleUrls: ['./example-forkjoin.component.css']
})
export class ExampleForkjoinComponent implements AfterViewInit {

  names = ['sweta','kinjal','komal','manisha']
  colors = ['red','yellow','green','blue']

  @ViewChild('name',{static:false}) public name!:ElementRef
  @ViewChild('color',{static:false}) public color!:ElementRef

  constructor() { }
  ngAfterViewInit(): void {
    const name$ = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event => event.target.value), take(2));
    const color$ = fromEvent<any>(this.color.nativeElement,'change').pipe(map(event => event.target.value), take(1));

    zip(name$, color$).subscribe(([name1, color1])=>{
      console.log('zip', name1, color1);
    })

    forkJoin([name$, color$]).subscribe(([name1, color1])=>{
      console.log('forkjoin', name1, color1);
    })
  }

}
