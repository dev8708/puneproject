import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuynowComponent } from './dialog-buynow.component';

describe('DialogBuynowComponent', () => {
  let component: DialogBuynowComponent;
  let fixture: ComponentFixture<DialogBuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuynowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
