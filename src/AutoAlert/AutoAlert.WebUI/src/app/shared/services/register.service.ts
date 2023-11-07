import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) { }
  submitUser(user: User): Observable<any>
  {
    return this.httpClient.post('https://localhost:5001/api/users', user);
  }
}
