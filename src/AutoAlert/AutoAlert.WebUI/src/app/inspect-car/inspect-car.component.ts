import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { InspectCarService } from '../shared/services/inspect-car/inspect-car.service';
import { CarModel } from '../shared/models/car/car.model';

@Component({
  selector: 'app-inspect-car',
  templateUrl: './inspect-car.component.html',
  styleUrl: './inspect-car.component.css'
})
export class InspectCarComponent implements OnInit{
  constructor(
    private router:Router,
    private auth: AuthenticationService,
    private getCarService: InspectCarService,
    private route: ActivatedRoute
  ){}
  ngOnInit(){
    if(this.auth.isAuthenticated() === false) this.router.navigate(['/'])
    console.log(this.id)
    this.car = this.getCarService.getCar(this.id).subscribe();
    // if (this.cachedCarData) {

    //   this.car = this.cachedCarData;
    // } else {
    //   this.car = this.getCarService.getCar(this.id);
      
    //   this.cachedCarData = this.car;
    // }
  }
  get id() {
    return this.route.snapshot.paramMap.get('id');
  }
  car?: CarModel
  public cachedCarData?: CarModel;
}
