import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  constructor(private authService: AuthenticationService) {}

  authCheck(): boolean{
    console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated();
  }
}
