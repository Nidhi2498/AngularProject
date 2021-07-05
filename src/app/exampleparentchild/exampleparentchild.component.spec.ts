import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleparentchildComponent } from './exampleparentchild.component';

describe('ExampleparentchildComponent', () => {
  let component: ExampleparentchildComponent;
  let fixture: ComponentFixture<ExampleparentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleparentchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleparentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
