import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { HideRegisterFormServiceService } from './shared/services/hide-register-form-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';
  
  showRegisterComponent: boolean = false;

  

  constructor(private registerComponent: RegisterComponent, private hideRegisterForm: HideRegisterFormServiceService) {}
  
  ngOnInit() {
    this.hideRegisterForm.hideRegisterComponent.subscribe(() => {
      this.showRegisterComponent = false;
    });
  }

  onRegisterClick() {

    this.showRegisterComponent = true;
  }
}
