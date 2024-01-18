import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user/user.model';
import { RegisterService } from '../shared/services/register/register.service';
import { Router } from '@angular/router';


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
  constructor(

    private registerService: RegisterService, 
    private router: Router
    ) { }

  ngOnInit() {
    
  }

  onSubmit() { 
      this.registerService.submitUser(this.user).subscribe(( response: boolean ) => {
        if(response==true) {
          this.router.navigate(['/Login']);
        }
    }, error => {
        throw new Error('Failed to submit user');
    });  
  };

    passwordComparer(): boolean
    {
      if(this.user.password === this.user.confirmPassword)  {
        console.log("password :"+ this.user.password + "confirmPassword" + this.user.confirmPassword)
        return true
      }return false
    }
}
