import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Photo } from 'src/app/types/photo';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  unsearched: boolean = true

  vertical = "vertical"
  horizontal = "horizontal"
  isLoading = false
  
  photosList: Photo[] = []
  constructor(
    private apiService: ApiService
  ){}

  search(form: NgForm): void {

    if (form.invalid){
      return
    }

    this.isLoading = true

    const value: {search: string} = form.value
    this.apiService.search(value.search).subscribe({
      next: (photos) =>{
        this.photosList = photos
        this.unsearched = false
        this.isLoading = false
      },
      error: (err) =>{
        this.isLoading = false
        console.error(`Error ${err}`)
      }
    })
  }
}
