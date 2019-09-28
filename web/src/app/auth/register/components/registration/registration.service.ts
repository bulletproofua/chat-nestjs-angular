import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/ngrx/user-module/models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {}

  checkEmailNotTaken(email: string) {
    return this.http.post(`${environment.apiUrl}/users/allUserEmails`, {email: email}, httpOptions).pipe(
        map((isUniq: boolean) => isUniq)
    )
  }

  checkUserNameNotTaken(username: string) {
    return this.http.post(`${environment.apiUrl}/users/isUserNameIsUniq`, {name: username}, httpOptions).pipe(
        map((isUniq: boolean) => isUniq)
    )
  }

  createUser(data: User): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/auth/registerUser`, data, httpOptions)
  }
}