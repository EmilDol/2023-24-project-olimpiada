import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigurationService } from './app-configuration.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private hideLoginComponent = new BehaviorSubject<boolean>(true);
  hideLoginComponent$ = this.hideLoginComponent.asObservable();
  private apiUrl: string;

  constructor(private appConfig: AppConfigurationService,private httpClient: HttpClient) 
  {
    this.apiUrl = appConfig.getApiUrl();
  }

  submitUser(user: User): Observable<any>
  {
    return this.httpClient.post(this.apiUrl+'/users/login', user);
  }

  hideLoginBody() {
    this.hideLoginComponent.next(true);
  }

  showLoginBody() {
    this.hideLoginComponent.next(false);
  }
}
