import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/types/photo';
import { Router } from '@angular/router'

@Component({
  selector: 'app-current-photo',
  templateUrl: './current-photo.component.html',
  styleUrls: ['./current-photo.component.css']
})
export class CurrentPhotoComponent implements OnInit {
  photo: Photo | undefined
  vertical = "vertical"
  horizontal = "horizontal"

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void{
    
    this.fetchPhoto()
  }

  fetchPhoto(): void{
    const id = this.activatedRoute.snapshot.params['photoId']
    
    this.apiService.getPhoto(id).subscribe((photo)=>{
      this.photo = photo
    })

  }

  delete(){
    const id = this.activatedRoute.snapshot.params['photoId']
    const result = confirm("Are you sure you want to delete your photo")
    if(result){
      this.apiService.delete(id).subscribe({
        next: (response)=>{
          alert("Successfully deleted")
          this.router.navigate(['/photos'])
        },
        error: (error)=>{
          if(error.status===403){
            alert("Unauthorized deletion")
          }else{
            alert("Server is down, please try again later!")
          }
        }
      })
    }
  }
  
}
