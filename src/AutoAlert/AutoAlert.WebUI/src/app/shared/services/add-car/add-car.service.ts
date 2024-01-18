import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
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

  constructor(private authService: AuthenticationService,private httpClient: HttpClient) 
  {
    this.apiUrl = authService.getApiUrl();
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

    return this.httpClient.post<any>(`${this.apiUrl}/car/create`, JSON.stringify(carModel), options)
    .pipe(
      map(response => {
        const statusCode = response.status;
        console.log('Status Code:', statusCode);
          return response;
        
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    )
  }
}
