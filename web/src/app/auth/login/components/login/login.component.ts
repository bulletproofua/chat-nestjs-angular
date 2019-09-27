import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { take } from 'rxjs/operators';


export interface User {
  id: number;
  access_token: string;
  email: string;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public error = '';

  constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private router: Router,
  ) {
    console.log("TCL: LoginComponent -> router", router)
    // TODO redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) { 
    //     this.router.navigate(['/']);
    // }
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

  onSubmit(form) {
    const data = {
      username: form.get('email').value,
      password: form.get('password').value
    }

    this.loginService.login(data)
    .subscribe(
      (res: User) => {
        // TODO set user
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
