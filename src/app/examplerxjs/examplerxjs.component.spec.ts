import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplerxjsComponent } from './examplerxjs.component';

describe('ExamplerxjsComponent', () => {
  let component: ExamplerxjsComponent;
  let fixture: ComponentFixture<ExamplerxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplerxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplerxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
