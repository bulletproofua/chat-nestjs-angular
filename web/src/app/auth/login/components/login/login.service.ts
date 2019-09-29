import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { Observable } from 'rxjs';

export interface Credentials {
    username: string;
    password: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
  private url = 'auth/login';

  constructor(private http: HttpClient) {}

  login(data: Credentials): Observable<any> {
    return this.http.post<Credentials>(`${environment.apiUrl}/${this.url}`, data, httpOptions)
  }

}