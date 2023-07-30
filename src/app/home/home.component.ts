import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Photo } from '../types/photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vertical = "vertical"
  horizontal = "horizontal"
  
  photosList: Photo[] = []
  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    this.apiService.getPhotos().subscribe({
      next: (photos) =>{
        
        this.photosList = photos
      },
      error: (err) =>{
        console.error(`Error ${err}`)
      }
    })
  }

}
