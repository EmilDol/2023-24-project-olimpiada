import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddCarComponent } from './add-car/add-car.component';
import { HomeComponent } from './home/home.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { InspectCarComponent } from './inspect-car/inspect-car.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AddCar', component: AddCarComponent },
  { path: 'AllCars', component: AllCarsComponent },
  { path: 'InspectCar/:id', component: InspectCarComponent, data:{id:null}},
  { path: 'Chat', component: AiChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
