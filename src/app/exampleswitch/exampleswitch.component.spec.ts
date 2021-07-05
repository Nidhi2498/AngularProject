import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleswitchComponent } from './exampleswitch.component';

describe('ExampleswitchComponent', () => {
  let component: ExampleswitchComponent;
  let fixture: ComponentFixture<ExampleswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
