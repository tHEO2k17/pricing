import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SubscribeModel } from '../domain/models/subscribe.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  apiUrl = 'api/subscription';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private httpClient: HttpClient) { }                     //Injecting HTTP service to communicate with the data

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }

  getSubscriptions(): Observable<SubscribeModel[]>{
    return this.httpClient.get<SubscribeModel[]>(this.apiUrl).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
    );
  }

  subscribeUser (user: SubscribeModel): Observable<SubscribeModel> {
    return this.httpClient.post<SubscribeModel>(this.apiUrl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
