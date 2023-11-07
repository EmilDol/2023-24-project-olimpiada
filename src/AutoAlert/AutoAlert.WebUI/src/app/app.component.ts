import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';
  
  showRegisterComponent: boolean = false;

  constructor () {}
  
  ngOnInit() {
    
  }

  onRegisterClick() {

    this.showRegisterComponent = true;
    
  }
}
