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

  ngOnInit(): void {

    this.commonService.getdata().pipe(
      map((res) => 
      res.map((item:any) => {
        return {
          name:item.name,
          email:item.email
        }
      })
      )
    ).subscribe(res =>{
      this.display = res
    })
  }
}
