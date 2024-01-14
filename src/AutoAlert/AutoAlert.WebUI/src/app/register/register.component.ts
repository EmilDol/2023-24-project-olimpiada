import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { RegisterService } from '../shared/services/register.service';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class RegisterComponent implements OnInit {
 
  user: User = new User();
  constructor(private registerService: RegisterService, private loginService: AuthenticationService) { }
  hideRegisterComponent: boolean = true;

  ngOnInit() {
    
  }

  onSubmit() { 
    this.registerService.submitUser(this.user).subscribe(( response: boolean ) => {
       if(response) {
          this.registerService.hideRegisterBody();
          this.loginService.showLoginBody();
      }
  }, error => {
      throw new Error('Failed to submit user');
  });
  };

    unrenderComponent() 
    {
        this.registerService.hideRegisterBody();
        console.log("hideRegisterComponent is :");
    }

    passwordComparer(): boolean
    {
      if(this.user.password === this.user.confirmPassword)  {
        console.log("password :"+ this.user.password + "confirmPassword" + this.user.confirmPassword)
        return true
      }return false
    }
}
