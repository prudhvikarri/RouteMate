import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrideComponent } from './findride.component';

describe('FindrideComponent', () => {
  let component: FindrideComponent;
  let fixture: ComponentFixture<FindrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindrideComponent]
    });
    fixture = TestBed.createComponent(FindrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
