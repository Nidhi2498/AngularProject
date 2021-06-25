import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // debugger
    // this.service1.getCustomer().pipe(
    //   tap((res1)=> console.log(res1)),
    //   concatMap((res)=> this.service2.getdata()),
    //   tap((res2)=> console.log(res2))
    // ).subscribe((data)=>{
    //   debugger
    //   console.log(data)
    // })
  
  }

}
