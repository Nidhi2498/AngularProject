import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit, AfterViewInit {
  @ViewChild('templatePortalContent')  templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent')  domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal! : Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

}
@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }
