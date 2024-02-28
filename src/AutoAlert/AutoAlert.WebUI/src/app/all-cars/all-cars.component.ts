import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from '../shared/services/get-all-cars/get-all-cars.service';
import { CarModel } from '../shared/models/car/car.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { InspectCarService } from '../shared/services/inspect-car/inspect-car.service';
import { AddVignetteService } from '../shared/services/add-vignette/add-vignette.service';

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
    private addVignetteService: AddVignetteService
  ){};

  public allCars: CarModel[] = []
  openPopupIds: string[] = [];
  
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
  private vignettePopup: boolean = false;
  openVignettePopup(id: string | undefined, plateNumber: string | undefined){
    if (id != undefined) {
      // Add ID to openPopupIds if not already open
      if (!this.openPopupIds.includes(id)) {
        this.openPopupIds.push(id);
      }
    }
  }

  getPlateNumberById(id: string | undefined): string | undefined {
    const car = this.allCars.find(car => car.id === id);
    return car ? car.plateNumber : '';
  }

  closeVignettePopup(id: string) {
    const index = this.openPopupIds.indexOf(id);
    if (index !== -1) {
      this.openPopupIds.splice(index, 1); // Remove the ID from openPopupIds
    }
  }

  addVignette(id: string | undefined){
    if(id === null || id === undefined){
      //in app notification
      return;
    }
  }

  trackByFn(index: number, id: string) {
    return id;
  }
}
