import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkexampleComponent } from './cdkexample.component';

describe('CdkexampleComponent', () => {
  let component: CdkexampleComponent;
  let fixture: ComponentFixture<CdkexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
