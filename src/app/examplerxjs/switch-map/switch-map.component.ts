import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, interval, of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  public counter = 0;
  public array1 = ['pen','pencil','book','rubber'];
  public array2: any = [];
  public search = new FormControl()
  public display :any;

  constructor() { }

  ngOnInit(): void {
    //example-1
    fromEvent(document,'click').pipe(switchMap(()=> interval(400))).subscribe((value:any)=>{
      this.counter = value
    })

    //example-2
    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x * 2, x * 3)));
    switched.subscribe(x => {
      this.display = x
      console.log(x)
    })

    //example-3
    this.search.valueChanges.pipe(
      debounceTime(1000),
      switchMap((value)=> this.array1.filter((item)=> item.includes(value)))
    ).subscribe((filterdata)=>{
      debugger
      this.array2.push(filterdata)
    })
    
  }
}
