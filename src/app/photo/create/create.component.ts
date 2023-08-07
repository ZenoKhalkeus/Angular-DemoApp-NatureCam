import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private apiService: ApiService, private router: Router){}

  create(form: NgForm): void{

    if (form.invalid){
      alert("Some fields are either empty or don't fulfill the required criteria")
      return
    }

    const value: {title: string, summary: string, imageUrl: string, location: string, orientation: string} = form.value

    this.apiService.create(value).subscribe({
      next: (response) =>{
        this.router.navigate(['/photos'])
      },
      error: (error) =>{
        console.log(error)
        if(error.status===401){
          alert("Unauthorized access")
      }else{
          alert("Server is unavailable. Please try again later!")
      }
      }
    })
  }
}
