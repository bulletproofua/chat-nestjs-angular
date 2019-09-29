import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromUser from '../../ngrx/user-module/reducers';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private accessToken$ = this.store.select(fromUser.getUserAccessToken);
    constructor(private store: Store<any>) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.accessToken$.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    request = request.clone({
                        setHeaders: { 
                            Authorization: `Bearer ${accessToken}`
                        }
                    });
                }

                return next.handle(request);
            })
        )
    }
}