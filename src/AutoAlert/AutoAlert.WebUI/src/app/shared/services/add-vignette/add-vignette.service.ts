import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { VignetteModel } from '../../models/car/vignette.model';

@Injectable({
  providedIn: 'root'
})
export class AddVignetteService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.apiUrl = authService.getApiUrl();
   }

  private apiUrl: string;
  private jwtToken: any;
 

  onSubmit(id: string,vignette: VignetteModel): Observable <any> {
    
    this.jwtToken = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });
 
    const options = { headers };
    console.log('CarModel before request:', vignette);

    // Log headers for verification
    console.log('Headers:', headers);

    return this.httpClient.post<any>(this.apiUrl + `/car/add-vignette/${id}` , JSON.stringify(vignette), options)
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
