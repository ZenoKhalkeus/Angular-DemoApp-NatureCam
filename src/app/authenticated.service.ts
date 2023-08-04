import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService {
  isLoggedIn: boolean = false
  constructor() { }
}
