import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {

  user: User = new User();
  public errorString?: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    
  }

  unrenderComponent() {
    this.authService.hideLoginBody();
  }

  onSubmit() { 
    this.authService.login(this.user).subscribe((success: boolean) => 
    {
      console.log(success)
      if (success === true) 
      {
      this.authService.hideLoginBody();
      }
    },
     
      error => {
        console.error('Component-level error handling:', error);
        this.errorString = "Failed to submit user";
      }
    )
  }
}
