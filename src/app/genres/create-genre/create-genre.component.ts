import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';
import { parseWebAPIErrors } from 'src/app/utilities/utils';


@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {

  errors: string[] = [];

  constructor (private router: Router, private genresService: GenresService) {  }

  saveChanges (genreCreationDTO: genreCreationDTO) {
    this.genresService.create(genreCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => this.errors = parseWebAPIErrors(error));
  }

}
