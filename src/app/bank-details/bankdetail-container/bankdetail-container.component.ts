import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bankdetails } from '../bankdetails.model';
import { BankserviceService } from '../bankservice.service';

@Component({
  selector: 'app-bankdetail-container',
  templateUrl: './bankdetail-container.component.html',
  styleUrls: ['./bankdetail-container.component.css']
})
export class BankdetailContainerComponent implements OnInit {
  public bankdetail$!: Observable<any>;

  constructor(private bankService:BankserviceService) { 
    
    this.bankdetail$ = this.bankService.getBankDetail();

  }

  //Add new account detail
  public addBankDetail(data:Bankdetails){
    this.bankService.addBankDetail(data).subscribe((data:Bankdetails)=> {
      alert("Account detail added successfully");
    })
    
  }

  //Edit bank account details
  public editBankDetail(data:Bankdetails){
    this.bankService.updateBankDetail(data).subscribe((data:Bankdetails)=> {
      alert("Account detail added successfully");
    })
    
  }



  ngOnInit(): void {
  }

}
