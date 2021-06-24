import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleinterpolationComponent } from './exampleinterpolation.component';

describe('ExampleinterpolationComponent', () => {
  let component: ExampleinterpolationComponent;
  let fixture: ComponentFixture<ExampleinterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleinterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
