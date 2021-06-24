import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleroutingComponent } from './examplerouting.component';

describe('ExampleroutingComponent', () => {
  let component: ExampleroutingComponent;
  let fixture: ComponentFixture<ExampleroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
