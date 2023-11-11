import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieTheatersComponent } from './edit-movie-theaters.component';

describe('EditMovieTheatersComponent', () => {
  let component: EditMovieTheatersComponent;
  let fixture: ComponentFixture<EditMovieTheatersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMovieTheatersComponent]
    });
    fixture = TestBed.createComponent(EditMovieTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
