import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { VignetteModel } from '../shared/models/car/vignette.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { AddVignetteService } from '../shared/services/add-vignette/add-vignette.service';

@Component({
  selector: 'app-vignette-popup',
  templateUrl: './vignette-popup.component.html',
  styleUrls: ['./vignette-popup.component.css']
})
export class VignettePopupComponent {
  @ViewChild('popupElement', { static: false }) popupElement: ElementRef | undefined;
  
  @Input() carId!: string; // Expecting car ID as input
  @Input() carPlate!: string | undefined;

  constructor(private addVignetteService: AddVignetteService){}
  vignette: VignetteModel = new VignetteModel();
  startDate: string = '';
  endDate: string = '';

  @Output() closePopup = new EventEmitter<void>(); // Event to signal closure

  submitVignette() {
    this.addVignetteService.onSubmit(this.carId,this.vignette ).subscribe(
      (response) => {
        console.log('API response:', response);
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }

  onClose() {
    this.closePopup.emit();
  }

}