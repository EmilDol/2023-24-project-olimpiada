import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { AppConfigurationService } from '../app-configuration.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { CarModel } from '../../models/car/car.model';

@Injectable({
  providedIn: 'root'
})
export class AddCarService {

  private hideAddCarComponent = new BehaviorSubject<boolean>(true);
  hideAddCarComponent$ = this.hideAddCarComponent.asObservable();
  private apiUrl: string;
  private jwtToken: any;

  constructor(private authService: AuthenticationService, private appConfig: AppConfigurationService,private httpClient: HttpClient) 
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

  onSubmit(carModel: CarModel): Observable <any> {
    
    this.jwtToken = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });
 
    const options = { headers };
    console.log('CarModel before request:', carModel);

    // Log headers for verification
    console.log('Headers:', headers);

    return this.httpClient.post(`${this.apiUrl}/car/create`, carModel, options)
    .pipe(
      tap(response => {
        // Log the response for debugging
        console.log('API Response:', response);
      }),
      catchError(error => {
        // Log any errors for debugging
        console.error('API Error:', error);
        throw error;
    })
  );
  }
}
