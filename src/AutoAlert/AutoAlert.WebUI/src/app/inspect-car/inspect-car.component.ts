import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspect-car',
  templateUrl: './inspect-car.component.html',
  styleUrl: './inspect-car.component.css'
})
export class InspectCarComponent {
  constructor(
    public router:Router
  ){};
}
