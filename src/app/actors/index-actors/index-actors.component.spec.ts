import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexActorsComponent } from './index-actors.component';

describe('IndexActorsComponent', () => {
  let component: IndexActorsComponent;
  let fixture: ComponentFixture<IndexActorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexActorsComponent]
    });
    fixture = TestBed.createComponent(IndexActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
