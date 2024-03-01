import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication/authentication.service';
import { NotificationModel } from '../shared/models/notification/notification-model';
import { NotificationService } from '../shared/services/notification/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit { 
  constructor(
    private authService: AuthenticationService, 
    private notificationService: NotificationService,
    private toastr: ToastrService
    ) {}

  public allNotifications: NotificationModel[] = []
  notification: NotificationModel = new NotificationModel();
  public errorString?: string;

  ngOnInit(): void {
    
    if (this.authService.isAuthenticated()) {
      this.notificationService.getAllCars().subscribe({
        next: (allNotifications) => {
          console.log(allNotifications)
          this.allNotifications = allNotifications;
          
        },
        error: (error: any) => {
          console.error('Error fetching regions:', error);
        }
      });
    }
  }

  deleteNotif(id: string | undefined){
    console.log(id)
    this.notificationService.deleteNotification(id).subscribe(
      (response) => {
        console.log('API response:', response);
        if(response == true)  {

          const indexToRemove = this.allNotifications.findIndex(not => not.id === id);

          if (indexToRemove !== -1) {
            this.allNotifications.splice(indexToRemove, 1);
          }
          this.toastr.success('Notification Cleared');
          }
        else {console.log(response.error); this.toastr.error(response.error);}
      },
      (error) => {
        console.error('API error:', error);
        this.errorString = error
      }
    );
  }

  authCheck(): boolean{
    return this.authService.isAuthenticated();
  }
}
