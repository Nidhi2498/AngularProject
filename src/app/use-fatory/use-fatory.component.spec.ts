import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFatoryComponent } from './use-fatory.component';

describe('UseFatoryComponent', () => {
  let component: UseFatoryComponent;
  let fixture: ComponentFixture<UseFatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
