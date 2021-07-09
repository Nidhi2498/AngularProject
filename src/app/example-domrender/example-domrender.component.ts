import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example-domrender',
  templateUrl: './example-domrender.component.html',
  styleUrls: ['./example-domrender.component.css']
})
export class ExampleDOMRenderComponent implements OnInit, AfterViewInit {

  @ViewChild('box') box!: ElementRef;
  constructor(private renderer: Renderer2) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   // this.box.nativeElement.style.backgroundColor ="yellow"

   //change background color using renderer
  //  this.renderer.setStyle(this.box.nativeElement, 'backgroundColor','yellow')

   //change font color using renderer
  //  this.renderer.setStyle(this.box.nativeElement, 'color','red')
  
  }

  public onClickAdd(){
    //change using class attribute
    this.renderer.addClass(this.box.nativeElement, 'myclass')
  }

  public onClickRemove(){
    this.renderer.removeClass(this.box.nativeElement, 'myclass')
  }


}
