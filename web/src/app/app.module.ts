import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModuleModule } from './ngrx/user-module/user-module.module';
import { environment } from '../environments/environment';
import { CustomRouterStateSerializer } from './shared/utils';
// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// interceptors
import { JwtInterceptor } from './shared/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    UserModuleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
