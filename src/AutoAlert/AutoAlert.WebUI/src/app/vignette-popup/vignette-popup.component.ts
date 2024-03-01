import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { VignetteModel } from '../shared/models/car/vignette.model';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { AddVignetteService } from '../shared/services/add-vignette/add-vignette.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vignette-popup',
  templateUrl: './vignette-popup.component.html',
  styleUrls: ['./vignette-popup.component.css'],
  animations: [
    trigger('moveOffScreen', [
      state('off', style({ transform: 'translateX(-120%)' })),
      state('on', style({ transform: 'translateX(0)' })),
      transition('on => off', animate('0.3s ease-in-out')),
      transition('off => on', animate('0.3s ease-in-out'))
    ])
  ]
})
export class VignettePopupComponent {
  @ViewChild('popupElement', { static: false }) popupElement: ElementRef | undefined;
  
  @Input() carId!: string; // Expecting car ID as input
  @Input() carPlate!: string | undefined;


  isOffScreen = false;
  constructor(private addVignetteService: AddVignetteService, private toastr: ToastrService){}
  vignette: VignetteModel = new VignetteModel();
  startDate: string = '';
  endDate: string = '';

  @Output() closePopup = new EventEmitter<void>(); // Event to signal closure

  submitVignette() {
    this.addVignetteService.onSubmit(this.carId,this.vignette ).subscribe(
      (response) => {
        this.toastr.success('Successfylly added Vignette!');
        console.log('API response:', response);
      },
      (error) => {
        console.error('API error:', error);
        this.toastr.error(error);
      }
    );
  }


  delayedClosePopup() {
    
    setTimeout(() => {
      
      this.isOffScreen = !this.isOffScreen;
    }, 300);
    
    // Add a delay of one second (1000 milliseconds) before emitting the event
    setTimeout(() => {
      
      this.closePopup.emit();
    }, 1000);
  }

}