import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from './types/photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPhotos() {
    const { apiUrl } = environment;
    return this.http.get<Photo[]>(`${apiUrl}?sortBy=_createdOn%20desc`);
  }

  getPhoto(id: string){
    const { apiUrl } = environment
    return this.http.get<Photo>(`${apiUrl}/${id}`)
  }
}
