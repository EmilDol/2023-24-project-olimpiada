
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'token_key';
  private token: string | null = null;
  private apiUrl = 'https://autoalert-api.hvtns.net/api';
  private hideLoginComponent = new BehaviorSubject<boolean>(true);
  hideLoginComponent$ = this.hideLoginComponent.asObservable();
  httpClient: any;
 
  getApiUrl(): string {
    return this.apiUrl;
  }

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(user: User): Observable<boolean> {
    const loginUrl = `${this.apiUrl}/users/login`;
    
    return this.http.post<any>(loginUrl,  user ).pipe(
      map(response => {
        if (response && response.token) {
          this.setToken(response.token);
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(this.tokenKey);
  }
}
