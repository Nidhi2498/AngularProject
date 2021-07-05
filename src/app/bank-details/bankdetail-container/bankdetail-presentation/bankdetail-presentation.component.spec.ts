import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailPresentationComponent } from './bankdetail-presentation.component';

describe('BankdetailPresentationComponent', () => {
  let component: BankdetailPresentationComponent;
  let fixture: ComponentFixture<BankdetailPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
