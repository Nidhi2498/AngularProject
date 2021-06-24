import { Component, OnInit } from '@angular/core';
import { from} from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-exampleobserve',
  templateUrl: './exampleobserve.component.html',
  styleUrls: ['./exampleobserve.component.css']
})
export class ExampleobserveComponent implements OnInit {
  public display :any;
  constructor(private commonService:CommonService) { }

  // Object1 = from([
  //   { fName: 'Sachin', lName: "Tendulkar" },
  //   { fName: 'Rahul', lName: "Dravid" },
  //   { fName: 'Saurav', lName: "Ganguly" },
  // ]);


  ngOnInit(): void {

    // this.Object1.pipe(map(data1 => {return data1.fName + ' ' + data1.lName})).subscribe(data1=>{
    // console.log(data1)})
    this.commonService.getdata().pipe(
      map((res) => 
      res.map((item:any) => {
        return {
          name:item.name,
          email:item.email
        }
      })
      )
    ).subscribe( console.log)
  }
}
