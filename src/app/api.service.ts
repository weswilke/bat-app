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

  private base:string;

  public getMoviesByTitle(title:string) { 
    const url:URL = new URL(this.base);

    url.searchParams.append('s', title);

    return this.http.get(url.href);
  }

  public getMovieById(id:string) {
    const url:URL = new URL(this.base);

    url.searchParams.append('i', id);

    return this.http.get(url.href);
  }

  private constructUrl(endpoint) {
    const url = new URL(endpoint);
    url.searchParams.append('apiKey', environment.apiKey);

    this.base = url.href;
  }
}
