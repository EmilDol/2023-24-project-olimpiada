import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from '../shared/services/get-all-cars/get-all-cars.service';
import { CarModel } from '../shared/models/car/car.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { InspectCarService } from '../shared/services/inspect-car/inspect-car.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})

export class AllCarsComponent implements OnInit{
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    public getAllCarsService: GetAllCarsService,
    private getCarService: InspectCarService,
  ){};

  public allCars: CarModel[] = [];
  
  ngOnInit(): void {
    if(this.auth.isAuthenticated() === false) this.router.navigate(['/'])
    if (this.auth.isAuthenticated()) {
      this.getAllCarsService.getAllCars().subscribe({
        next: (allCars) => {
          console.log(allCars)
          this.allCars = allCars;
          
        },
        error: (error: any) => {
          console.error('Error fetching regions:', error);
        }
      });
    }
  }

  inspectCar(id:string | undefined){
    if (id) {
      this.router.navigate(['InspectCar', id]);
  } console.log(id)
  }
  deleteCar(id: string | undefined){
     
    this.getCarService.deleteCar(id).subscribe(
      (response) => {
        console.log('API response:', response);
        if(response == true) 
        {
          const indexToRemove = this.allCars.findIndex(car => car.id === id);

        // Remove the car from the array
        if (indexToRemove !== -1) {
            this.allCars.splice(indexToRemove, 1);
        }
      }
        else console.log(response.error)
      },
      (error) => {
        console.error('API error:', error);
      }
    );

  }
}
