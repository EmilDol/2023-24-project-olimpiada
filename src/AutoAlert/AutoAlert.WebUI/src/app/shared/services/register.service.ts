import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string;

  constructor(private appConfig: AppConfigurationService,private httpClient: HttpClient) 
  {
    this.apiUrl = appConfig.getApiUrl();
  }

  submitUser(user: User): Observable<any>
  {
    return this.httpClient.post(this.apiUrl+'/users/register', user);
  }
}
