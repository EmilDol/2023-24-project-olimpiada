import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CarModel } from '../../models/car/car.model';
import { Observable, catchError, map } from 'rxjs';

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
        console.log(JSON.stringify(data))
        if(!data){
          throw new Error('Invalid car data');
        }
        
        return data;
      }),
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
