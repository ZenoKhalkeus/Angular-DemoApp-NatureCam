import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/types/photo';

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
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void{
    
    this.fetchPhoto()
  }

  fetchPhoto(): void{
    const id = this.activatedRoute.snapshot.params['photoId']

    this.apiService.getPhoto(id).subscribe((photo)=>{
      this.photo = photo
      //console.log(this.photo.title)
    })

  }
  
}
