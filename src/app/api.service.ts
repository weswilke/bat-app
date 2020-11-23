import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    this.constructUrl(environment.apiEnpoint);
  }

  private url:URL;

  public getMoviesByTitle(title:string) { 
    const url:URL = this.url;
    
    url.searchParams.append('s', title);

    return this.http.get(url.href);
  }

  private constructUrl(endpoint) {
    const url = new URL(endpoint);
    url.searchParams.append('apiKey', environment.apiKey);

    this.url = url;
  }
}
