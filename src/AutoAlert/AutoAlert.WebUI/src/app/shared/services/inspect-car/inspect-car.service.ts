import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CarModel } from '../../models/car/car.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectCarService {

  private apiUrl: string;
  private jwtToken: any;
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) 
  {
    this.apiUrl = authenticationService.getApiUrl();
  }
  getCar(id: string | null): Observable<CarModel>{
    this.jwtToken = this.authenticationService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });

    const options = { headers };

    return this.httpClient.get<CarModel>(this.apiUrl + `/car/get-by-id/${id}` , options)
    .pipe(
      map((data: CarModel) => {
       
        if(!data){
          throw new Error('Invalid car data');
        }
        console.log(data)
        return data;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }

  onSubmit(carModel: CarModel): Observable <any> {
    
    this.jwtToken = this.authenticationService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });
 
    const options = { headers };
    console.log('CarModel before request:', carModel);

    // Log headers for verification
    console.log('Headers:', headers);

    return this.httpClient.put<any>(`${this.apiUrl}/car/update`, JSON.stringify(carModel), options)
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

  deleteCar(id:string | undefined): Observable <any> {
    
    this.jwtToken = this.authenticationService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });

    const options = { headers };
    console.log(`id == ${id}`);
    return this.httpClient.delete<any>(`${this.apiUrl}/car/delete/${id}`, options)
    .pipe(
      map(response => {
        const statusCode = response.status;
        console.log('Status Code:', statusCode);
          return response;
        
      }),
      catchError(error => {
        console.error('Delete error:', error);
        return throwError(() => error);
      })
    )
   
  }
}
