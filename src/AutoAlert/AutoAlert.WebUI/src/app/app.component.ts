import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication/authentication.service';
import { RegisterService } from './shared/services/register.service';
import { AddCarService } from './shared/services/add-car/add-car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';
  

  hideRegisterComponent: boolean = true;
  hideLoginComponent: boolean = true;
  hideAddCarComponent: boolean = true;

  constructor(private registerService: RegisterService, private authService: AuthenticationService, private addCarService: AddCarService) {}
  
  ngOnInit() {
   
    //if not logged in
    
      this.registerService.hideRegisterComponent$.subscribe((hideRegisterComponent) => {
        this.hideRegisterComponent = hideRegisterComponent;
        console.log("hideRegisterComponent in onInit is = " + this.hideRegisterComponent);
      });
      this.authService.hideLoginComponent$.subscribe((hideLoginComponent) => {
        this.hideLoginComponent = hideLoginComponent; 
        console.log("hideLoginComponent in  onInit is = " + this.hideLoginComponent);
      });
    

    //if logged in
    if(true)
    {
      this.addCarService.hideAddCarComponent$.subscribe((hideAddCarComponent) => {
        this.hideAddCarComponent = hideAddCarComponent;
        console.log("hideAddCarComponent in onInit is = " + this.hideAddCarComponent);
      });
    }
  }

  authCheck(): boolean{
    console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated();
  }

  onAddCarClick() {
    this.addCarService.showAddCarBody();
    this.authService.hideLoginBody();
    this.registerService.hideRegisterBody();
    console.log("hideAddCarComponent in component is = " + this.hideAddCarComponent)
  }

  onRegisterClick() {
    this.addCarService.hideAddCarBody();
    this.authService.hideLoginBody();
    this.registerService.showRegisterBody();
    console.log("hideRegisterComponent in component is = " + this.hideRegisterComponent)
  }

  onLoginClick() {
    this.authService.showLoginBody();
    this.addCarService.hideAddCarBody();
    this.registerService.hideRegisterBody();
    console.log("hideLoginComponent in component is = " + this.hideLoginComponent)
  }
}
