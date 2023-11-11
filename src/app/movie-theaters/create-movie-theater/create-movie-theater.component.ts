import { Component } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent {

  saveChanges (movieTheater: movieTheatersCreationDTO) {
    console.log(movieTheater);
  }
}
