import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CarModel } from '../../models/car/car.model';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {

  private apiUrl: string;
  private jwtToken: any;
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) 
  {
    this.apiUrl = authenticationService.getApiUrl();
  }

  getAllCars(): Observable<CarModel[]>{
    this.jwtToken = this.authenticationService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });
  
    const options = { headers };

    return this.httpClient.get<CarModel[]>(this.apiUrl + '/car/get-all', options)
      .pipe(
        map((response: any) => {

          if (response) {
            console.log("inside if")
            const cars: CarModel[] = [];
            response.forEach((carData: any) => {
              console.log(carData)
              cars.push({
                id: carData.id,
                plateNumber: carData.plateNumber,
                model: carData.model,
                make: carData.make,
                yearOfMake: carData.yearOfMake,
                mileage: carData.mileage,
                horsePower: carData.horsePower,
                euroType: carData.euroType,
                taxPayed: carData.taxPayed,
                technicalCheckExpirationDate: new Date(carData.technicalCheckExpirationDate),
                regionId: carData.regionId,
                engineOil: {
                  oilType: carData.engineOil?.oilType,
                  mileageOfLastChange: carData.engineOil?.mileageOfLastChange,
                  mileageOfNextChange: carData.engineOil?.mileageOfNextChange,
                  dateOfLastChange: new Date(carData.engineOil?.dateOfLastChange)
                },
                transmitionOil: {
                  oilType: carData.engineOil?.oilType,
                  mileageOfLastChange: carData.engineOil?.mileageOfLastChange,
                  mileageOfNextChange: carData.engineOil?.mileageOfNextChange,
                  dateOfLastChange: new Date(carData.engineOil?.dateOfLastChange)
                },
                vignette: {
                  dateBought: new Date(carData.vignette?.dateBought),
                  expireDate: new Date(carData.vignette?.expireDate),
                },
                insurence: {
          
                }
              });            
            });

            console.log('retreived cars:', cars);
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
  
}
