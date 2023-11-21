import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private hideRegisterComponent = new BehaviorSubject<boolean>(true);
  hideRegisterComponent$ = this.hideRegisterComponent.asObservable();
  private apiUrl: string;

  constructor(private appConfig: AppConfigurationService,private httpClient: HttpClient) 
  {
    this.apiUrl = appConfig.getApiUrl();
  }

  submitUser(user: User): Observable<any>
  {
    return this.httpClient.post(this.apiUrl+'/users/register', user);
  }

  
  hideRegisterBody() {
    this.hideRegisterComponent.next(true);
    console.log("Service hideRegisterComponent = true")
  }

  showRegisterBody() {
    this.hideRegisterComponent.next(false);
  }
}
