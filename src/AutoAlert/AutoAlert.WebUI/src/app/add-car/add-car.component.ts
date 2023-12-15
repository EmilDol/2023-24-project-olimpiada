import { Component, OnInit } from '@angular/core';
import { CarModel } from '../shared/models/car/car.model';
import { AddCarService } from '../shared/services/add-car/add-car.service';
import { CarMakesService } from '../shared/services/car-make-service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit  {
  ngOnInit() {
    
  }
  
  showCarInfo: boolean = true;
  showEngineOilInfo: boolean = false;
  showTransmissionOilInfo: boolean = false;
  showVignetteInfo: boolean = false;
  showInshurenceInfo: boolean = false;

  constructor(private addCarService: AddCarService, public carMakesService: CarMakesService){}
  
  car: CarModel = new CarModel();
  // onSubmit() { 
    
  //   // if(!this.isModelFilled())
  //   // {

  //   //   //dont send request return to view?
  //   // }
  //   //do da api
  //   this.registerService.submitUser(this.user).subscribe((data:any) => 
  //   {
  //     if (data.Succeeded = true) 
  //     {
  //       this.registerService.hideRegisterBody()
  //     }
  //   },
  //      error => {
  //        throw new Error('Failed to submit user');
  //      }
  //   )
  // };
    unrenderComponent() 
    {
      this.addCarService.hideAddCarBody();
    }

    renderNewForm(toShow: string)
    {
      this.showCarInfo = false;
      this.showEngineOilInfo = false;
      this.showTransmissionOilInfo = false;
      this.showVignetteInfo = false;
      this.showInshurenceInfo = false;
      switch (toShow) {
          case 'showCarInfo': 
          this.showCarInfo = true
          break;

          case 'showEngineOilInfo': 
          this.showEngineOilInfo = true
          break;

          case 'showTransmissionOilInfo': 
          this.showTransmissionOilInfo = true
          break;

          case 'showVignetteInfo': 
          this.showVignetteInfo = true
          break;

          case 'showInshurenceInfo': 
          this.showInshurenceInfo = true
          break;
      }
    }

    validateForm() : boolean
    {
      if(this.isCarModelValid())
      {
        return true
      }  else return false
    }
    private isCarModelValid(): boolean {
      return !!(
        this.car.plateNumber &&
        this.car.model &&
        this.car.make &&
        this.car.yearOfMake &&
        this.car.mileage &&
        this.car.horsePower &&
        this.car.euroType &&
        this.car.taxPayed !== undefined &&
        this.car.technicalCheckExpirationDate instanceof Date &&
        this.car.engineOilReminder !== undefined &&
        this.car.engineOilReminder.oilType &&
        this.car.engineOilReminder.mileageOfLastChange &&
        this.car.engineOilReminder.mileageOfNextChange &&
        this.car.engineOilReminder.dateOfLastChange instanceof Date &&
        this.car.regionId &&
        this.car.transmissionOilReminder !== undefined &&
        this.car.transmissionOilReminder.dateOfLastChange instanceof Date &&
        this.car.transmissionOilReminder.mileageOfLastChange &&
        this.car.transmissionOilReminder.mileageOfNextChange &&
        this.car.transmissionOilReminder.oilType &&
        this.car.vignette !== undefined &&
        this.car.vignette.dateBought instanceof Date &&
        this.car.vignette.expireDate instanceof Date
      );
    }
   
}
