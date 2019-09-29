import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../../ngrx/user-module/reducers';
import { take, map } from 'rxjs/operators';
// services
import { RegistrationService } from './registration.service';
import { SetUserData } from 'src/app/ngrx/user-module/actions/user.actions';
import { User } from 'src/app/ngrx/user-module/models/user';
import { LoginService } from 'src/app/auth/login/components/login/login.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
	providers: [LoginService, RegistrationService]
})
export class RegistrationComponent implements OnInit {

	public registerForm: FormGroup;
	public error = '';
	public fileName = '';
	public saltRounds = 10;

	public isUserLoggedIn$ = this.store.pipe(select(fromUser.isUserLoggedIn));

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private store: Store<any>,
		private cd: ChangeDetectorRef,
		private loginService: LoginService,
		private registrationService: RegistrationService
	) {
		this.redirectIfAlreadyLoggedIn();
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			email: [
				'test@gmail.com',
				[Validators.required],
				this.validateEmailNotTaken.bind(this)
			],
			username: [
				'test',
				[Validators.required],
				this.validateUserNameNotTaken.bind(this)
			],
			file: [null, Validators.required],
			password: ['test123', [Validators.required, Validators.minLength(6)]],
			confirmPassword: ['test123', [Validators.required, Validators.minLength(6)]]
		}, {
			validator: this.MustMatch('password', 'confirmPassword')
		});
	}

	validateEmailNotTaken(control: AbstractControl) {
		return this.registrationService.checkEmailNotTaken(control.value).pipe(
			map(res => {
				return res ? null : { emailTaken: true };
			})
		);
	}

	validateUserNameNotTaken(control: AbstractControl) {
		return this.registrationService.checkUserNameNotTaken(control.value).pipe(
			map(res => {
				return res ? null : { userNameTaken: true };
			})
		);
	}

	redirectIfAlreadyLoggedIn() {
		this.isUserLoggedIn$.pipe(take(1)).subscribe((userLoggedIn: boolean) => {
			if (userLoggedIn) {
				this.router.navigateByUrl('chat');
			}
		})
	}

	MustMatch(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];

			if (matchingControl.errors && !matchingControl.errors.mustMatch) {
				return;
			}
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ mustMatch: true });
			} else {
				matchingControl.setErrors(null);
			}
		}
	}

	get username() { return this.registerForm.get('username'); }
	get email() { return this.registerForm.get('email'); }
	get file() { return this.registerForm.get('file'); }
	get password() { return this.registerForm.get('password'); }
	get confirmPassword() { return this.registerForm.get('confirmPassword'); }

	getErrorMessage(e: any) {
		if (e.errors) {
			const K = Object.keys(e.errors);
			switch (K[0]) {
				case 'email': return 'Incorrect format';
				case 'required': return 'Field is required';
				case 'mustMatch': return 'Passwords must match';
				case 'emailTaken': return 'Email taken';
				case 'userNameTaken': return 'User name is taken';
				case 'minlength': return 'Password is too short (minimum is 6 characters)';
				default: return '';
			}
		}
	}

	onFileChange(event: any) {
		const reader = new FileReader();

		if (event.target.files && event.target.files.length) {
			const [file] = event.target.files;
			this.fileName = file.name;

			reader.readAsDataURL(file);
			reader.onload = () => {
				this.registerForm.patchValue({
					file: reader.result
				});
				this.cd.markForCheck();
			};
		}
	}

	onSubmit() {
		const data = {
			username: this.username.value,
			email: this.email.value,
			password: this.password.value,
			avatar: this.file.value
		}

		this.registrationService.createUser(data)
		.pipe(take(1))
		.subscribe(
		  (res: User) => {
			this.login({ username: data.email, password: data.password});
		  },
		  (error: string) => {
			this.error = 'Error'
			this.cleanErrorText();
		  }
		)
	}

	login(data) {
		this.loginService.login(data)
		.pipe(take(1))
		.subscribe(
		  (res: User) => {
			this.store.dispatch(new SetUserData(res));
			this.router.navigateByUrl('chat');
		  },
		  (error: string) => {
			this.error = "Can't login"; 
			this.cleanErrorText();
		  }
		)
	}

	cleanErrorText() {
		this.registerForm.valueChanges
		.pipe(take(1))
		.subscribe(e => {
		  this.error = '';
		}) 
	}

}
