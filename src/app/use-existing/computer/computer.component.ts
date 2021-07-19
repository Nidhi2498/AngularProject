import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../desktop.service';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
  providers:[
    DesktopService,
    {
      provide:LaptopService, useExisting:DesktopService
    }
  ]
})
export class ComputerComponent implements OnInit {
  computerName : any;
  constructor(private desktopService: LaptopService) { }

  ngOnInit() {
    this.computerName = this.desktopService.getComputerName();
  }

}
