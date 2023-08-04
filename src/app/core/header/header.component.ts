import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedService } from 'src/app/authenticated.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, public authenticated: AuthenticatedService){}

  ngOnInit(): void{
    this.isLoggedInChecker()
  }

  isLoggedInChecker(): void{
    if(localStorage.getItem("accessToken")){
      this.authenticated.isLoggedIn = true
    }else{
      this.authenticated.isLoggedIn = false
    }
  }

  logout():void{
    console.log("Logging out test")
    localStorage.clear()
    this.authenticated.isLoggedIn = false
    this.router.navigate(['/photos'])
  }

}
