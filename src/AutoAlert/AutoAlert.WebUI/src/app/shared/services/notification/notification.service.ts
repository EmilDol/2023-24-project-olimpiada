import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { NotificationModel } from '../../models/notification/notification-model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl: string;
  private jwtToken: any;
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) 
  {
    this.apiUrl = authService.getApiUrl();
  }

  getAllCars(): Observable<NotificationModel[]>{
    this.jwtToken = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });
  
    const options = { headers };

    return this.httpClient.get<NotificationModel[]>(this.apiUrl + '/car/get-notifications', options)
      .pipe(
        map((response: any) => {

          if (response) {
            console.log("inside if")
            const cars: NotificationModel[] = [];
            response.forEach((notificationData: any) => {
              console.log(notificationData)
              cars.push({
                id: notificationData.id,
                plateNumber: notificationData.plateNumber,
                model: notificationData.model,
                make: notificationData.make,
                text: notificationData.text
              });            
            });

            console.log('retreived notifications:', cars);
            return cars;
            
          } else {
            console.log(response)
            throw new Error('Regions retrieval failed');
          }
        }),
        catchError((error: any) => {
          throw error;
        })
      );
  }

  deleteNotification(id:string | undefined): Observable <any> {
    
    this.jwtToken = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });

    const options = { headers };
    console.log(`id == ${id}`);
    return this.httpClient.delete<any>(`${this.apiUrl}/car/delete-notification/${id}`, options)
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
