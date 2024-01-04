import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {
  private apiUrl: string;
  constructor() { 
    this.apiUrl = 'https://localhost:44305/api';
  }
  getApiUrl(): string {
    return this.apiUrl;
  }
}
