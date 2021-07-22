import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropexampleComponent } from './drag-dropexample.component';

describe('DragDropexampleComponent', () => {
  let component: DragDropexampleComponent;
  let fixture: ComponentFixture<DragDropexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
