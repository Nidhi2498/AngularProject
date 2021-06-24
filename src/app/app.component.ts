import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../app/common.service'
import { Child1Component } from './child1/child1.component';
import { from, Observable, of, Subscription } from 'rxjs/'
import { delay, map }  from 'rxjs/operators'
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  ngOnInit(){ 
  }

  
}


