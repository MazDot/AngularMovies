import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMovieTheaterComponent } from './index-movie-theater.component';

describe('IndexMovieTheaterComponent', () => {
  let component: IndexMovieTheaterComponent;
  let fixture: ComponentFixture<IndexMovieTheaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexMovieTheaterComponent]
    });
    fixture = TestBed.createComponent(IndexMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
