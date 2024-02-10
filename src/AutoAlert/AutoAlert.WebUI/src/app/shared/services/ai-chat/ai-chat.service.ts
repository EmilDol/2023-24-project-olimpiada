import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {

  // Replace with your actual API endpoint URL
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  // Replace with your OpenAI API key
  private apiKey = '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';

  constructor(private http: HttpClient) { }

  sendMessage(text: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = JSON.stringify({
      model: 'text-davinci-003',
      prompt: text,
      max_tokens: 150,
      temperature: 0.7
    });
    
    console.log("In Service")

    return this.http.post<any>(this.apiUrl, body, { headers })
      .pipe(
        catchError(error => {
          console.error('Error sending message:', error);
          return throwError(error);
        })
      );
  }
}
