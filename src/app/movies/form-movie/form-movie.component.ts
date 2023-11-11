import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  constructor (private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  model: movieDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    {key: 1, value: 'Drama'},
    {key: 2, value: 'Action'},
    {key: 3, value: 'Comedy'}
  ];

  selectedGenres: multipleSelectorModel[] = [];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    {key: 1, value: 'Cinemax'},
    {key: 2, value: 'Angora'},
    {key: 3, value: 'MegaCenter'},
  ];

  selectedMovieTheaters: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genreIds: '',
      movieTheatersIds: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges () {
    const genreIds = this.selectedGenres.map(value => value.key);
    this.form.get('genreIds').setValue(genreIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

}
