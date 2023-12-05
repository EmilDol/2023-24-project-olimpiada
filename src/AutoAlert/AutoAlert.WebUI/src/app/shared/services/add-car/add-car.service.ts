import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfigurationService } from '../app-configuration.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  private hideAddCarComponent = new BehaviorSubject<boolean>(true);
  hideAddCarComponent$ = this.hideAddCarComponent.asObservable();
  private apiUrl: string;

  constructor(private appConfig: AppConfigurationService,private httpClient: HttpClient) 
  {
    this.apiUrl = appConfig.getApiUrl();
  }

  hideAddCarBody() {
    this.hideAddCarComponent.next(true);
    console.log("Service hideAddCarComponent = true")
  }

  showAddCarBody() {
    this.hideAddCarComponent.next(false);
    console.log("Service hideAddCarComponent = false")
  }
}
