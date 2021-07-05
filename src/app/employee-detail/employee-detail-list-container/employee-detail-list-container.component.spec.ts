import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailListContainerComponent } from './employee-detail-list-container.component';

describe('EmployeeDetailListContainerComponent', () => {
  let component: EmployeeDetailListContainerComponent;
  let fixture: ComponentFixture<EmployeeDetailListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
