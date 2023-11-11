import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';


@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent {

  constructor (private router: Router, private genresService: GenresService) {  }

  saveChanges (genreCreationDTO: genreCreationDTO) {
    this.genresService.create(genreCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => console.log(error));
  }

}
