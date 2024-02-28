import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VignettePopupComponent } from './vignette-popup.component';

describe('VignettePopupComponent', () => {
  let component: VignettePopupComponent;
  let fixture: ComponentFixture<VignettePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VignettePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VignettePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
