import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenderComponent } from './childrender.component';

describe('ChildrenderComponent', () => {
  let component: ChildrenderComponent;
  let fixture: ComponentFixture<ChildrenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
