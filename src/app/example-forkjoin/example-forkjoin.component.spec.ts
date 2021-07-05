import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleForkjoinComponent } from './example-forkjoin.component';

describe('ExampleForkjoinComponent', () => {
  let component: ExampleForkjoinComponent;
  let fixture: ComponentFixture<ExampleForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleForkjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
