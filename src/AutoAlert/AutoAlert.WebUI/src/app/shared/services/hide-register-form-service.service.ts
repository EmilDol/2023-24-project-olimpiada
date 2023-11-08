import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideRegisterFormServiceService {
  @Output() hideRegisterComponent = new EventEmitter<boolean>();
  onUnregisterClick() {
    this.hideRegisterComponent.emit(true);
  }
}
