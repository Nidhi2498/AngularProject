import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription} from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-exampleobserve',
  templateUrl: './exampleobserve.component.html',
  styleUrls: ['./exampleobserve.component.css']
})
export class ExampleobserveComponent implements OnInit {
  public display :any;
  sub!: Subscription;
  message :any;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {

    // this.commonService.getdata().subscribe((res)=>{
    //   let d = res.map((data:any)=> data = data.name +''+ data.email)
    //   console.log(res)
    // })


    //Example of interval time using map 
    const broadCastVideo = interval(1000);
    this.sub = broadCastVideo.pipe(map(data => 'video' +''+ data)).subscribe(res =>{
      console.log(res);
      this.message = res;
    })

    //set timeout for unsubscribe
    setTimeout(() =>{
      this.sub.unsubscribe();
    }, 10000)

    //get name and email from fake api
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

