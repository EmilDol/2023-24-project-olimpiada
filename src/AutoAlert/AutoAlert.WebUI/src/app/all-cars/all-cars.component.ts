import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from '../shared/services/get-all-cars/get-all-cars.service';
import { CarModel } from '../shared/models/car/car.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})

export class AllCarsComponent implements OnInit{
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    public getAllCarsService: GetAllCarsService
  ){};

  public allCars: CarModel[] = [];
  
  ngOnInit(): void {
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
}
