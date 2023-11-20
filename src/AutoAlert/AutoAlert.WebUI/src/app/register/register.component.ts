import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../shared/services/register.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HideRegisterFormServiceService } from '../shared/services/hide-register-form-service.service';


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
  showRegisterComponent: boolean = false;
  constructor(private httpClient: HttpClient, private registerService: RegisterService, private hideRegisterForm: HideRegisterFormServiceService) { }

  ngOnInit() {
    
  }

  onSubmit() { 
    
    if(!this.isModelFilled())
    {

      //dont send request return to view?
    }
    //do da api
    this.registerService.submitUser(this.user).subscribe((data:any) => 
    {if (data.Succeeded = true) this.unrenderComponent},
     
      error => {
        throw new Error('Failed to submit user');
      }
    )
  };

    unrenderComponent() {
        this.hideRegisterForm.hideRegisterComponent.emit(true);
    }
  
    isModelFilled(): boolean {
      let filled: boolean = false;
  
      if (
        this.user.email !== null &&
        this.user.firstName !== null &&
        this.user.lastName !== null &&
        this.user.password !== null &&
        this.user.confirmPassword !== null
      ) {
        return true;
      }
      return false;
    };
}
