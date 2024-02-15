import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { InspectCarService } from '../shared/services/inspect-car/inspect-car.service';
import { CarModel } from '../shared/models/car/car.model';
import { RegionModel } from '../shared/models/region/region.model';
import { EngineOilModel } from '../shared/models/car/engine-oil.model';
import { TransmitionOilModel } from '../shared/models/car/transmition-oil.model';
import { VignetteModel } from '../shared/models/car/vignette.model';
import { InsurenceModel } from '../shared/models/car/insurence.model';
import { RegionService } from '../shared/services/region/region.service';
import { AutocompleteService } from '../shared/services/autocomplete/autocomplete.service';
import { CarMakesService } from '../shared/services/car-models/car-make-service';


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
    private route: ActivatedRoute,
    private regionService: RegionService,
    private autocompleteService: AutocompleteService,  
    public carMakesService: CarMakesService
  ){}

  allRegions: RegionModel[] = [];
  filteredCarMakes: string[] = [];
  filteredRegions: RegionModel[] = [];
  showCarInfo: boolean = true;
  showEngineOilInfo: boolean = false;
  showTransmissionOilInfo: boolean = false;
  showVignetteInfo: boolean = false;
  showInshurenceInfo: boolean = false;
  car: CarModel = new CarModel();


  region: RegionModel = new RegionModel();
  engineOil: EngineOilModel = new EngineOilModel();
  transmitionOil: TransmitionOilModel = new TransmitionOilModel;
  vignette: VignetteModel = new VignetteModel();
  insurence: InsurenceModel = new InsurenceModel();
  public errorString?: string;

  ngOnInit(){
    if(this.auth.isAuthenticated() === false) this.router.navigate(['/'])
    console.log(this.id)
    this.getCarService.getCar(this.id).subscribe(
      carData => { 
        this.car = carData;
        this.region.name = this.car.region;
        this.vignette.dateBought = this.car.vignette?.dateBought;
        this.vignette.expireDate = this.car.vignette?.expireDate;
        this.transmitionOil.dateOfLastChange = this.car.transmitionOil?.dateOfLastChange;
        this.transmitionOil.mileageOfLastChange = this.car.transmitionOil?.mileageOfLastChange;
        this.transmitionOil.mileageOfNextChange = this.car.transmitionOil?.mileageOfNextChange;
        this.transmitionOil.oilType = this.car.transmitionOil?.oilType;
        this.engineOil.dateOfLastChange = this.car.engineOil?.dateOfLastChange;
        this.engineOil.mileageOfLastChange = this.car.engineOil?.mileageOfLastChange;
        this.engineOil.mileageOfNextChange = this.car.engineOil?.mileageOfNextChange;
        this.engineOil.oilType = this.car.engineOil?.oilType;
        this.region.name = this.car.region
      },
      error => { 
        console.error('Error fetching car data:', error);
      }
    );
    console.log(this.car)

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
  get id() {
    return this.route.snapshot.paramMap.get('id');
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
        this.car.plateNumber != null &&
        this.car.model != null &&
        this.car.make != null &&
        this.car.yearOfMake != null &&
        this.car.mileage != null &&
        this.car.horsePower != null &&
        this.car.euroType != null &&
        this.car.taxPayed != null &&
        this.car.technicalCheckExpirationDate != undefined&&
        this.engineOil?.oilType != null&&
        this.engineOil.mileageOfLastChange != null&&
        this.engineOil.mileageOfNextChange != null&&
        this.engineOil.dateOfLastChange != undefined&&
        //this.region.id != null&&
        this.transmitionOil?.dateOfLastChange != undefined&&
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

      this.getCarService.onSubmit(this.car).subscribe(
        (response) => {
          console.log('API response:', response);
          if(response == true)  this.router.navigate(['/'])
          else console.log(response.error)
        },
        (error) => {
          console.error('API error:', error);
          this.errorString = error
        }
      );
    }
    areEditable: Boolean = false;
    
    enableEditing(){
      this.areEditable = true
    }

    disableEditing(){
      this.areEditable = false
    }

    deleteCar(){
     
      this.getCarService.deleteCar(this.car.id).subscribe(
        (response) => {
          console.log('API response:', response);
          if(response == true)  this.router.navigate(['/'])
          else console.log(response.error)
        },
        (error) => {
          console.error('API error:', error);
          this.errorString = error
        }
      );

    }
}
