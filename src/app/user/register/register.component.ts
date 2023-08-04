import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { AuthenticatedService } from 'src/app/authenticated.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  constructor(private apiService: ApiService, private router: Router, private authenticated: AuthenticatedService){}

  register(form: NgForm): void{

    
    if (form.invalid){
      alert("Some fields are either empty or don't fulfill the required criteria")
      return
    }

    const value: {email: string, password: string, repassword: string} = form.value

    this.apiService.register(value.email, value.password).subscribe({
      next: (response) =>{
        console.log(response)
        if (response.accessToken) {
          this.apiService.clearLocalData

          this.apiService.saveLocalData('accessToken', response.accessToken)
          this.apiService.saveLocalData('userEmail', response.email)
          this.apiService.saveLocalData('userId', response._id)
        }
        
        console.log("Register worked")
        this.authenticated.isLoggedIn = true
        this.router.navigate(['/photos'])
      },
      error: (error) =>{
        if(error.status===409){
          alert("An account with that email already exists")
      }else{
          alert("Server is unavailable. Please try again later!")
      }
      }
    })
  }

  ngOnInit(): void{
    localStorage.clear()
    this.authenticated.isLoggedIn = false
  }
}
