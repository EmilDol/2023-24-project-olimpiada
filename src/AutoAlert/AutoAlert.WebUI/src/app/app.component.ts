import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';
import { RegisterService } from './shared/services/register.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';
  
  hideRegisterComponent: boolean = true;
  hideLoginComponent: boolean = true;
  

  constructor(private registerService: RegisterService, private loginService: LoginService) {}
  
  ngOnInit() {
    
    this.registerService.hideRegisterComponent$.subscribe((hideRegisterComponent) => {
      this.hideRegisterComponent = hideRegisterComponent;
      console.log("hideRegisterComponent in onInit is = " + this.hideRegisterComponent);
    });
    this.loginService.hideLoginComponent$.subscribe((hideLoginComponent) => {
      this.hideLoginComponent = hideLoginComponent; 
      console.log("hideLoginComponent in  onInit is = " + this.hideLoginComponent);
    });
  }

  onRegisterClick() {
    this.registerService.showRegisterBody();
    console.log("hideRegisterComponent in component is = " + this.hideRegisterComponent)
  }

  onLoginClick() {
    this.loginService.showLoginBody();
    console.log("hideLoginComponent in component is = " + this.hideLoginComponent)
  }
}
