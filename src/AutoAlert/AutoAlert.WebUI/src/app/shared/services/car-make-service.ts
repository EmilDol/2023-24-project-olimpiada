import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarMakesService {
  carMakes: Array<string>;

  constructor() {
    this.carMakes = [
      'Toyota',
      'Honda',
      'Ford',
      'Chevrolet',
      'Volkswagen',
      'Nissan',
      'Kia',
      'Hyundai',
      'Suzuki',
      'BMW',
      'Mercedes-Benz',
      'Audi',
      'Lexus',
      'Land Rover',
      'Porsche',
      'Ferrari',
      'Lamborghini',
      'Tesla',
      'Jaguar',
      'Mazda',
      'Subaru',
      'Volvo',
      'Jeep',
      'Chrysler',
      'Dodge',
      'Ram',
      'Buick',
      'Cadillac',
      'GMC',
      'Acura',
      'Infiniti',
      'Mitsubishi',
      'Alfa Romeo',
      'Fiat',
      'Maserati',
      'Genesis',
      'Bentley',
      'Rolls-Royce',
      'MINI',
      'Smart',
      'Bugatti',
      'McLaren',
      'Koenigsegg',
      'Pagani',
      'Maybach',
      'Lotus',
      'Aston Martin',
      'Bugatti',
      'Spyker',
      'Daihatsu',
      'Isuzu',
      'Lada',
      'Great Wall',
      'Geely',
      'BYD',
      'Chery',
      'Dacia',
      'Haval',
      'JAC Motors',
      'SsangYong',
      'Tata Motors',
      'Mahindra',
      'Perodua',
      'Proton',
      'Wuling',
      'BYD',
      'Changan',
      'Chery',
      'Dongfeng',
      'FAW',
      'GAC',
      'Great Wall',
      'Haval',
      'Lynk & Co',
      'NIO',
      'Noble',
      'Rimac',
      'Tata',
      'Zenvo'
    ];
  }

  filterCarMakes(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.carMakes.filter(make => make.toLowerCase().includes(filterValue));
  }

  includes(value:string) : boolean{
    return this.carMakes.includes(value);
  }
}
