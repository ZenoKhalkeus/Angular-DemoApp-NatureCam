import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/types/photo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  photo: Photo | any

  constructor(
    private apiService: ApiService, 
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  edit(form: NgForm): void{

    if (form.invalid){
      alert("Some fields are either empty or don't fulfill the required criteria")
      return
    }

    const value: {title: string, summary: string, imageUrl: string, location: string, orientation: string} = form.value

    this.apiService.edit(value, this.photo._id).subscribe({
      next: (response) =>{
        this.router.navigate([`/photos/${this.photo._id}`])
      },
      error: (error) =>{
        console.log(error)
        if(error.status===403){
          alert("Unauthorized access")
          this.router.navigate([`/photos/${this.photo._id}`])
      }else{
          alert("Server is unavailable. Please try again later!")
      }
      }
    })
  }

  ngOnInit(): void {
    this.fetchPhoto()
  }

  fetchPhoto(): void{
    const id = this.activatedRoute.snapshot.params['photoId']
    
    this.apiService.getPhoto(id).subscribe((photo)=>{
      this.photo = photo
    })
  }
}
