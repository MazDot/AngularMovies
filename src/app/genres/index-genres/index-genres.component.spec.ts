import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGenresComponent } from './index-genres.component';

describe('IndexGenresComponent', () => {
  let component: IndexGenresComponent;
  let fixture: ComponentFixture<IndexGenresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexGenresComponent]
    });
    fixture = TestBed.createComponent(IndexGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
