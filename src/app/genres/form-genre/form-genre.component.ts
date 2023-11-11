import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {
  form: FormGroup;

  @Input()
  model: genreCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  constructor (private formBuilder: FormBuilder) {  }  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, firstLetterUppercase()]
      }]
    });

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }

  }

  saveChanges () {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'The name field is required';
    }
    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
  }
}
