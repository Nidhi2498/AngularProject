import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTempOutletComponent } from './template-temp-outlet.component';

describe('TemplateTempOutletComponent', () => {
  let component: TemplateTempOutletComponent;
  let fixture: ComponentFixture<TemplateTempOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTempOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTempOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
