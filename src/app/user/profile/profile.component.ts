import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileName: string | undefined = ""
  email: string | null= localStorage.getItem("userEmail")
  result: number | null | undefined = -1
  id: string | null | undefined = localStorage.getItem("userId")

  vertical = "vertical"
  horizontal = "horizontal"

  isLoading = false
  
  photosList: Photo[] = []
  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    this.isLoading = true
    this.result = this.email?.indexOf("@")
    this.profileName = this.email?.slice(0,this.result)

    this.apiService.getOwnPhotos(this.id).subscribe({
      next: (photos) =>{
        
        this.photosList = photos
        this.isLoading = false
      },
      error: (err) =>{
        console.error(`Error ${err}`)
        this.isLoading = false
      }
    })
  }
}
