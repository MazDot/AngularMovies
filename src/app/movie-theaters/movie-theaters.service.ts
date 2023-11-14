import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theater.model';
import { Observable } from 'rxjs';
import { movieCreationDTO } from '../movies/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {
  private apiURL = environment.apiURL + '/movieTheater';
  constructor(private http: HttpClient) { }

  create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  get(): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(this.apiURL);
  }

  getById(id: number): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  edit(id: number, movieDTO: movieTheatersCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, movieDTO);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
