import { Injectable } from '@angular/core';
import { RegionModel } from '../../models/region/region.model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigurationService } from '../app-configuration.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  
  private apiUrl: string;
  private jwtToken: any;
  constructor(private appConfig: AppConfigurationService,private httpClient: HttpClient, private authenticationService: AuthenticationService) 
  {
    this.apiUrl = appConfig.getApiUrl();
  }
  getAllRegions(): Observable<RegionModel[]> {
    
    this.jwtToken = this.authenticationService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.jwtToken}`,
    });

    const options = { headers };

    

    return this.httpClient.get<RegionModel[]>(this.apiUrl + '/region/getall', options)
      .pipe(
        
        map((response: any) => {

          if (response) {
            console.log("inside if")
            this.authenticationService.setToken(response.token);
            const regions: RegionModel[] = [];
            response.forEach((region: any) => {
              console.log(region)
              regions.push({
                id: region.id,
                name: region.name
              });            
            });

            console.log('Filtered regions:', regions);
            return regions;
            
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

  filter(value: string, array: RegionModel[]): RegionModel[] {
    const filterValue = value.toLowerCase();
    return array.filter(region => {
      if (!region.name) {
        return false;
      }
      return region.name.toLowerCase().includes(filterValue);
    });
  }

  includes(value: string, array: RegionModel[]): boolean {
    return array.some((region) => {
      if (!region.name) {
        return false;
      }
      return region.name.toLowerCase() === value.toLowerCase();
    });
  }
}
