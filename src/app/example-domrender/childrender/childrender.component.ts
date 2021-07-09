import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-childrender',
  templateUrl: './childrender.component.html',
  styleUrls: ['./childrender.component.css']
})
export class ChildrenderComponent implements OnInit, AfterContentInit {

  @ContentChild('childComponent') childData! : ElementRef;
  constructor(private renderer: Renderer2) { }
 

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.childData)
    this.renderer.setStyle(this.childData.nativeElement,'color','blue')
  }

  //Create text using render
  public clickMe(){
    var text = this.renderer.createText('This text is created by child');
    this.renderer.appendChild(this.childData.nativeElement, text)
  }

}
