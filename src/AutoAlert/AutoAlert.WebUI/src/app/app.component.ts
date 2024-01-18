import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';

  constructor(private authService: AuthenticationService) {}
  
  ngOnInit() {
  }

  logout() {
    this.authService.logout()
    this.authCheck()
  }

  authCheck(): boolean{
    console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated();
  }
}
