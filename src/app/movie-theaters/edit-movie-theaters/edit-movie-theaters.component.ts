import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theaters',
  templateUrl: './edit-movie-theaters.component.html',
  styleUrls: ['./edit-movie-theaters.component.css']
})
export class EditMovieTheatersComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersDTO = {name: 'Agora', longitude: 51.41369819641114, latitude: 35.78184083125742};
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {

  }
}
