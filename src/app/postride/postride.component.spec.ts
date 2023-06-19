import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrideComponent } from './postride.component';

describe('PostrideComponent', () => {
  let component: PostrideComponent;
  let fixture: ComponentFixture<PostrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostrideComponent]
    });
    fixture = TestBed.createComponent(PostrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
