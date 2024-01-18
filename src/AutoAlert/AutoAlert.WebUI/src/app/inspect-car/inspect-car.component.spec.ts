import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectCarComponent } from './inspect-car.component';

describe('InspectCarComponent', () => {
  let component: InspectCarComponent;
  let fixture: ComponentFixture<InspectCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
