import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailContainerComponent } from './bankdetail-container.component';

describe('BankdetailContainerComponent', () => {
  let component: BankdetailContainerComponent;
  let fixture: ComponentFixture<BankdetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
