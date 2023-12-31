import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../movie-theater.model';
import { coordinateMap } from 'src/app/utilities/map/coordinate';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  model: movieTheatersCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinates: coordinateMap[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    });
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onSelectedLocation(coordinates: coordinateMap) {
    this.form.patchValue(coordinates);
  }

}
