import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/types/photo';
import { Router } from '@angular/router'
import { AuthenticatedService } from 'src/app/authenticated.service';

@Component({
  selector: 'app-current-photo',
  templateUrl: './current-photo.component.html',
  styleUrls: ['./current-photo.component.css']
})
export class CurrentPhotoComponent implements OnInit {
  photo: Photo | undefined
  vertical = "vertical"
  horizontal = "horizontal"
  id: string = this.activatedRoute.snapshot.params['photoId']
  likes: number = 0
  personalLike: boolean = false
  userId: string |  undefined | null = localStorage.getItem('userId')
  isOwner: boolean = false
  

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authenticated: AuthenticatedService
  ){}

  ngOnInit(): void{
    
    this.fetchPhoto()
    this.getLikes()
    this.getOwnLike()
    
  }

  isOwnerChecker(): void{

    if(this.photo?._ownerId === this.userId){
      this.isOwner = true
    }else{
      return
    }
  }

  getOwnLike():void{

    if(!this.userId){
      return
    }
    this.apiService.getOwnLike(this.id, this.userId).subscribe((result)=>{
      if(result >= 1){
        this.personalLike = true
        
      }else{
        return
      }
    })
  }

  fetchPhoto(): void{
    const id = this.activatedRoute.snapshot.params['photoId']
    
    this.apiService.getPhoto(id).subscribe((photo)=>{
      this.photo = photo
      this.isOwnerChecker()
    })

    

  }

  getLikes(){
    this.apiService.getNumberOfLikes(this.id).subscribe({
      next: (likes)=>{
        this.likes = likes
        
      },
      error: (err)=>{
        console.log(`Error ${err}`)
      }
    })
  }

  like(): void{
    this.apiService.like(this.id).subscribe({
      next: (result)=>{
        this.likes = this.likes+1
        this.personalLike = true
      },
      error: (err)=>{
        console.log(err)
        alert("Unsuccessful like, please try again later")
      }
    })
  }

  delete(){
    const id = this.id
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
