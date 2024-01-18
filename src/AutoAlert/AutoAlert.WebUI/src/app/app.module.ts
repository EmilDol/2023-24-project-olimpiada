import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './shared/services/register/register.service';
import { LoginComponent } from './login/login.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { InspectCarComponent } from './inspect-car/inspect-car.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddCarComponent, 
    AllCarsComponent, 
    InspectCarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [
    RegisterService,
    LoginComponent,
    AddCarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
