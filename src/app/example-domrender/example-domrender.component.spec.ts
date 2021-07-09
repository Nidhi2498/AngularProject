import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDOMRenderComponent } from './example-domrender.component';

describe('ExampleDOMRenderComponent', () => {
  let component: ExampleDOMRenderComponent;
  let fixture: ComponentFixture<ExampleDOMRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDOMRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDOMRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
