import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoAlertTest';

  constructor(private authService: AuthenticationService, private toastr: ToastrService) {}
  
  ngOnInit() {
  }

  logout() {
    this.authService.logout()
    this.toastr.warning('Logged out!');
    this.authCheck()
  }

  authCheck(): boolean{
    console.log(this.authService.isAuthenticated())
    return this.authService.isAuthenticated();
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
