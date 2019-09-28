import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { LoginService } from './login.service';
// ngrx
import { Store, select } from '@ngrx/store';
import { SetUserData } from '../../../../ngrx/user-module/actions/user.actions';
import * as fromUser from '../../../../ngrx/user-module/reducers';

import { User } from '../../../../ngrx/user-module/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public error = '';

  public isUserLoggedIn$ = this.store.pipe(select(fromUser.isUserLoggedIn));

  constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private router: Router,
      private store: Store<any>
  ) {
    this.redirectIfAlreadyLoggedIn();
  }

  redirectIfAlreadyLoggedIn() {
    this.isUserLoggedIn$.pipe(take(1)).subscribe((userLoggedIn: boolean) => {
      if (userLoggedIn) {
        this.router.navigateByUrl('chat');
      }
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['qqe@gmail.com', [Validators.required, Validators.email]],
        password: ['gues1s1', [Validators.required]]
    });
  }

  getErrorMessage(e: any) {
		if (e.errors) {
			const K = Object.keys(e.errors);
			switch (K[0]) {
        case 'email': return 'Incorrect format.';
				case 'required': return 'Field is required';
				default: return '';
			}
		}
	}

  onSubmit() {
    const data = {
      username: this.email.value,
      password: this.password.value
    }

    this.loginService.login(data)
    .pipe(take(1))
    .subscribe(
      (res: User) => {
        this.store.dispatch(new SetUserData(res));
        this.router.navigateByUrl('chat');
      },
      (error: string) => {
        this.error = 'Incorrect email or password.'
        this.loginForm.valueChanges
        .pipe(take(1))
        .subscribe(e => {
          this.error = '';
        })   
      }
    )
  }
}
