import { Component, OnInit } from '@angular/core';
import { CarModel } from '../shared/models/car/car.model';
import { AddCarService } from '../shared/services/add-car/add-car.service';
import { CarMakesService } from '../shared/services/car-make-service';
import { EngineOilModel } from '../shared/models/car/engine-oil.model';
import { TransmitionOilModel } from '../shared/models/car/transmition-oil.model';
import { VignetteModel } from '../shared/models/car/vignette.model';
import { InsurenceModel } from '../shared/models/car/insurence.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})

export class AddCarComponent implements OnInit  {

  ngOnInit() {
    this.filteredCarMakes = this.carMakesService.filterCarMakes('');
  }

  filteredCarMakes: string[] = [];
  showCarInfo: boolean = true;
  showEngineOilInfo: boolean = false;
  showTransmissionOilInfo: boolean = false;
  showVignetteInfo: boolean = false;
  showInshurenceInfo: boolean = false;

  constructor(private addCarService: AddCarService, public carMakesService: CarMakesService){}
  
  car: CarModel = new CarModel();
  engineOilReminder: EngineOilModel = new EngineOilModel();
  transmitionOilReminder: TransmitionOilModel = new TransmitionOilModel();
  vignette: VignetteModel = new VignetteModel();
  insurence: InsurenceModel = new InsurenceModel();

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

    logObjectState(obj: any, objName: string) {
      console.log(`Properties inside ${objName}:`);
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          console.log(`${prop}: ${obj[prop]}`);
        }
      }
    }
    
    displayAll()
    {
      this.logObjectState(this.car, 'car');
      this.logObjectState(this.engineOilReminder, 'engineOilReminder');
      this.logObjectState(this.transmitionOilReminder, 'transmitionOilReminder');
      this.logObjectState(this.vignette, 'vignette');
      this.logObjectState(this.insurence, 'insurence');
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
        this.car.plateNumber != null &&
        this.car.model != null &&
        this.car.make != null &&
        this.car.yearOfMake != null &&
        this.car.mileage != null &&
        this.car.horsePower != null &&
        this.car.euroType != null &&
        this.car.taxPayed != null &&
        this.car.technicalCheckExpirationDate != undefined&&
        this.engineOilReminder.oilType != null&&
        this.engineOilReminder.mileageOfLastChange != null&&
        this.engineOilReminder.mileageOfNextChange != null&&
        this.engineOilReminder.dateOfLastChange != undefined&&
        //this.car.regionId != null&&
        this.transmitionOilReminder.dateOfLastChange != undefined&&
        this.transmitionOilReminder.mileageOfLastChange != null&&
        this.transmitionOilReminder.mileageOfNextChange != null&&
        this.transmitionOilReminder.oilType != null
      );
    }

    checkIfContained(value: string): boolean {
      return this.carMakesService.includes(value);
    }
   
    filterMakes(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      this.filteredCarMakes = this.carMakesService.filterCarMakes(value);
    }    

    submit()
    {
      this.car.engineOilReminder = this.engineOilReminder
      this.car.transmitionOilReminder = this.transmitionOilReminder
      this.car.vignette = this.vignette
      this.car.insurence = this.insurence

      //post
    }
}