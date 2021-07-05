import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplepipeComponent } from './examplepipe.component';

describe('ExamplepipeComponent', () => {
  let component: ExamplepipeComponent;
  let fixture: ComponentFixture<ExamplepipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplepipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
