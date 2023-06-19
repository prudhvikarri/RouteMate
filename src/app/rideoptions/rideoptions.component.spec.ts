import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideoptionsComponent } from './rideoptions.component';

describe('RideoptionsComponent', () => {
  let component: RideoptionsComponent;
  let fixture: ComponentFixture<RideoptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RideoptionsComponent]
    });
    fixture = TestBed.createComponent(RideoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
