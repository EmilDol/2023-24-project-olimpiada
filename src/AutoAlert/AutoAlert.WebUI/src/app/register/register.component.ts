import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { RegisterService } from '../shared/services/register.service';
import { LoginService } from '../shared/services/login.service';

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
  constructor(private registerService: RegisterService) { }
  hideRegisterComponent: boolean = true;

  ngOnInit() {
    
  }

  onSubmit() { 
    
    // if(!this.isModelFilled())
    // {

    //   //dont send request return to view?
    // }
    //do da api
    this.registerService.submitUser(this.user).subscribe((data:any) => 
    {
      if (data.Succeeded = true) 
      {
        this.registerService.hideRegisterBody()
        
      }
      
    },
     
       error => {
         throw new Error('Failed to submit user');
       }
      
    )
  };

    unrenderComponent() {

      
        this.registerService.hideRegisterBody();
        console.log("hideRegisterComponent is :");
    }
  
    // isModelFilled(): boolean {
    //   let filled: boolean = false;
  
    //   if (
    //     this.user.email !== null &&
    //     this.user.firstName !== null &&
    //     this.user.lastName !== null &&
    //     this.user.password !== null &&
    //     this.user.confirmPassword !== null
    //   ) {
    //     return true;
    //   }
    //   return false;
    // };
}
