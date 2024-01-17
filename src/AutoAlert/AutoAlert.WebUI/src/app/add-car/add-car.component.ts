import { Component, OnInit, booleanAttribute } from '@angular/core';
import { CarModel } from '../shared/models/car/car.model';
import { AddCarService } from '../shared/services/add-car/add-car.service';
import { CarMakesService } from '../shared/services/car-make-service';
import { EngineOilModel } from '../shared/models/car/engine-oil.model';
import { TransmitionOilModel } from '../shared/models/car/transmition-oil.model';
import { VignetteModel } from '../shared/models/car/vignette.model';
import { InsurenceModel } from '../shared/models/car/insurence.model';
import { AutocompleteService } from '../shared/services/autocomplete/autocomplete.service';
import { RegionService } from '../shared/services/region/region.service';
import { RegionModel } from '../shared/models/region/region.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})

export class AddCarComponent implements OnInit  {

  ngOnInit() {

    this.regionService.getAllRegions().subscribe({
      next: (allRegions) => {
        this.allRegions = allRegions;
        this.filteredRegions = [...this.allRegions];
      },
      error: (error: any) => {
        console.error('Error fetching regions:', error);
      }
    });
  
    this.filteredCarMakes = this.autocompleteService.filter('', this.carMakesService.getMakes());
    
  }

  onClickRegionInput(): void {
    this.regionService.getAllRegions().subscribe({
      next: (allRegions) => {
        this.filteredRegions = allRegions;
      },
      error: (error: any) => {
        console.error('Error fetching regions:', error);
      }
    });
  }
  allRegions: RegionModel[] = [];
  filteredCarMakes: string[] = [];
  filteredRegions: RegionModel[] = [];
  showCarInfo: boolean = true;
  showEngineOilInfo: boolean = false;
  showTransmissionOilInfo: boolean = false;
  showVignetteInfo: boolean = false;
  showInshurenceInfo: boolean = false;

  constructor(private regionService: RegionService, private autocompleteService: AutocompleteService, private addCarService: AddCarService, public carMakesService: CarMakesService){}
  
  car: CarModel = new CarModel();
  region: RegionModel = new RegionModel();
  engineOil: EngineOilModel = new EngineOilModel();
  transmitionOil: TransmitionOilModel = new TransmitionOilModel();
  vignette: VignetteModel = new VignetteModel();
  insurence: InsurenceModel = new InsurenceModel();
  public errorString?: string;

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
      this.logObjectState(this.engineOil, 'engineOil');
      this.logObjectState(this.transmitionOil, 'transmitionOil');
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
        this.engineOil.oilType != null&&
        this.engineOil.mileageOfLastChange != null&&
        this.engineOil.mileageOfNextChange != null&&
        this.engineOil.dateOfLastChange != undefined&&
        //this.region.id != null&&
        this.transmitionOil.dateOfLastChange != undefined&&
        this.transmitionOil.mileageOfLastChange != null&&
        this.transmitionOil.mileageOfNextChange != null&&
        this.transmitionOil.oilType != null
      );
    }

    checkIfCarIsContained(value: string): boolean {

      return this.autocompleteService.includes(value, this.carMakesService.getMakes());
    }
   
    filterMakes(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      this.filteredCarMakes = this.autocompleteService.filter(value, this.carMakesService.getMakes());
    }   
    
    checkIfRegionIsContained(value: string): boolean {
      return this.regionService.includes(value, this.filteredRegions);
    }

    filterRegions(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      console.log('Input Value:', value);
      console.log('All Regions:', this.allRegions);
    
      this.filteredRegions = this.regionService.filter(value, this.allRegions);
      console.log('Filtered Regions:', this.filteredRegions);
    }

    onRegionSelected(event: any): void {
      const selectedRegionName = event.option.viewValue;
      const selectedRegion = this.filteredRegions.find(region => region.name === selectedRegionName);
      
      if (selectedRegion) {
        console.log('Selected Region:', selectedRegion);
        this.car.regionId = selectedRegion.id;
      }
    }
  

    onSubmit()
    {
      this.car.engineOil = this.engineOil
      this.car.transmitionOil = this.transmitionOil
      this.car.vignette = this.vignette
      this.car.insurence = this.insurence

      console.log("boolean before sending" + JSON.stringify(this.car.taxPayed))
      console.log("car before sending to service"+JSON.stringify(this.car))

      this.addCarService.onSubmit(this.car).subscribe(
        (response) => {
          console.log('API response:', response);
          if(response == true) this.addCarService.hideAddCarBody()
          else console.log(response.error)
        },
        (error) => {
          console.error('API error:', error);
          this.errorString = error
        }
      );
    }
}