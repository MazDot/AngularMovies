import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTheaterFormComponent } from './movie-theater-form.component';

describe('MovieTheaterFormComponent', () => {
  let component: MovieTheaterFormComponent;
  let fixture: ComponentFixture<MovieTheaterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTheaterFormComponent]
    });
    fixture = TestBed.createComponent(MovieTheaterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
