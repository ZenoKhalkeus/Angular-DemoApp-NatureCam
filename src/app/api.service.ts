import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Photo } from './types/photo';
import { Observable } from 'rxjs'

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

  saveLocalData(key: string, value: string): void{
    localStorage.setItem(key, value)
  }
  clearLocalData(): void{
    localStorage.clear()
  }

  

  login(email: string, password: string): Observable<any> {
    const { apiUserUrl } = environment
    return this.http.post(`${apiUserUrl}/login`, { email: email, password: password });
  }

  register(email: string, password: string): Observable<any> {
    const { apiUserUrl } = environment
    return this.http.post(`${apiUserUrl}/register`, { email: email, password: password });
  }
}
