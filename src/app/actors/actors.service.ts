import { Injectable } from '@angular/core';
import { actorCreationDTO, actorDTO } from './actors.Model';
import { formatDateFromData } from '../utilities/utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {


  private apiURL = environment.apiURL + '/actor';
  constructor(private http: HttpClient) { }

  create(actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  get(page: number, pageSize: number): Observable<actorDTO[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('pageSize', pageSize.toString());

    return this.http.get<actorDTO[]>(this.apiURL, {params});
  }

  getById(id: number) : Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  getCount() : Observable<number> {
    return this.http.get<number>(this.apiURL + '/count');
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  edit(id: number, actorDto: actorCreationDTO) {
    const formData = this.buildFormData(actorDto);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private buildFormData(actor: actorCreationDTO): FormData {
    const formData = new FormData();

    formData.append('name', actor.name);

    if(actor.biography) {
      formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFromData(actor.dateOfBirth));
    }

    if(actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
