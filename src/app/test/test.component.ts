import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Photo } from '../types/photo';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  photosList: Photo[] = []
  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    this.apiService.getPhotos().subscribe({
      next: (photos) =>{
        console.log("HI")
        this.photosList = photos
      },
      error: (err) =>{
        console.error(`Error ${err}`)
      }
    })
  }

}
