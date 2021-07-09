import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInjectTokenComponent } from './example-inject-token.component';

describe('ExampleInjectTokenComponent', () => {
  let component: ExampleInjectTokenComponent;
  let fixture: ComponentFixture<ExampleInjectTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInjectTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInjectTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
