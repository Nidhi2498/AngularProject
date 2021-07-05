import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleobserveComponent } from './exampleobserve.component';

describe('ExampleobserveComponent', () => {
  let component: ExampleobserveComponent;
  let fixture: ComponentFixture<ExampleobserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleobserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleobserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
