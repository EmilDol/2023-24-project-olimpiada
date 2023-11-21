import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { LoginService } from '../shared/services/login.service';

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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  unrenderComponent() {
    this.loginService.hideLoginBody();
}

onSubmit() { 
    
  
  //do da api
  this.loginService.submitUser(this.user).subscribe((data:any) => 
  {
    if (data.Succeeded = true) 
    {
    this.loginService.hideLoginBody();
    const token = data.token;

      // Store the JWT token in user's browser storage
      localStorage.setItem('jwtToken', token);
    }
  },
   
    error => {
      throw new Error('Failed to submit user');
    }
  )
};
}
