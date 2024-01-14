import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  filter(value: string, array: Array<string>): Array<string> {
    const filterValue = value.toLowerCase();
    return array.filter(object => object.toLowerCase().includes(filterValue));
  }

  includes(value:string, array: Array<string>) : boolean{
    return array.includes(value);
  }
  constructor() { }
}
