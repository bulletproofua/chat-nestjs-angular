(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/components/registration/registration.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/components/registration/registration.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"registration-wrapper\">\n    <div class=\"box\">\n        <h2>Register</h2>\n        <form [formGroup]=\"registerForm\">\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\"/>\n                <div *ngIf=\"email?.errors && email?.touched\" class=\"error-text\">\n                    {{ getErrorMessage(email) }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\"/>\n                <div *ngIf=\"username?.errors && username?.touched\" class=\"error-text\">\n                    {{ getErrorMessage(username) }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\n                <div *ngIf=\"password?.errors && password?.touched\" class=\"error-text\">\n                    {{ getErrorMessage(password) }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">Confirm password</label>\n                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" />\n                <div *ngIf=\"confirmPassword?.errors && (confirmPassword?.touched || password?.touched)\" class=\"error-text\">\n                    {{ getErrorMessage(confirmPassword) }}\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"avatar\">Avatar</label>\n                <input  #file type=\"file\" [hidden]='true' class=\"form-control-file\" accept=\"image/*\" (change)=\"onFileChange($event)\" >\n                <button \n                    [ngClass]=\"{'form-control btn btn-sm' : true, 'btn-light': !fileName, 'btn-success': fileName}\"  \n                    (click)=\"file.click()\"\n                >Choose avatar</button>\n                <label class=\"font-itali\"> {{fileName}}</label>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"registerForm?.invalid || error\" class=\"btn btn-primary\" (click)=\"onSubmit(registerForm)\">Register</button>\n                <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n            </div>\n            <div [hidden]='!error' class=\"alert alert-danger\" role=\"alert\">\n                {{ error }}\n            </div>\n        </form>\n            \n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/auth/register/components/registration/registration.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/auth/register/components/registration/registration.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".registration-wrapper {\n  background: #D7DFE7;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .registration-wrapper .box {\n    width: 40%; }\n  .ng-valid:not(form) {\n  border-left: 5px solid #42A948; }\n  .error-text {\n  color: #a94442;\n  padding: 0px 7px; }\n  @media screen and (max-width: 900px) {\n  .login-wrapper .box {\n    width: 60%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9EOlxcR2l0XFxHZW5lc2lzXFx3ZWIvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdGVyXFxjb21wb25lbnRzXFxyZWdpc3RyYXRpb25cXHJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQU52QjtJQVNRLFVBQVUsRUFBQTtFQUlsQjtFQUNJLDhCQUE4QixFQUFBO0VBR2xDO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0k7SUFFUSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbi13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNEN0RGRTc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmctdmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0IHtcclxuICAgIGNvbG9yOiAjYTk0NDQyO1xyXG4gICAgcGFkZGluZzogMHB4IDdweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5sb2dpbi13cmFwcGVyIHtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/register/components/registration/registration.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/register/components/registration/registration.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_user_module_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ngrx/user-module/reducers */ "./src/app/ngrx/user-module/reducers/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration.service */ "./src/app/auth/register/components/registration/registration.service.ts");
/* harmony import */ var src_app_ngrx_user_module_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/ngrx/user-module/actions/user.actions */ "./src/app/ngrx/user-module/actions/user.actions.ts");
/* harmony import */ var src_app_auth_login_components_login_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth/login/components/login/login.service */ "./src/app/auth/login/components/login/login.service.ts");







// services



let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, router, store, cd, loginService, registrationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.cd = cd;
        this.loginService = loginService;
        this.registrationService = registrationService;
        this.error = '';
        this.fileName = '';
        this.saltRounds = 10;
        this.isUserLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_ngrx_user_module_reducers__WEBPACK_IMPORTED_MODULE_5__["isUserLoggedIn"]));
        this.redirectIfAlreadyLoggedIn();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: [
                'test@gmail.com',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                this.validateEmailNotTaken.bind(this)
            ],
            username: [
                'test',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                this.validateUserNameNotTaken.bind(this)
            ],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['test123', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['test123', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }
    validateEmailNotTaken(control) {
        return this.registrationService.checkEmailNotTaken(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
            return res ? null : { emailTaken: true };
        }));
    }
    validateUserNameNotTaken(control) {
        return this.registrationService.checkUserNameNotTaken(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
            return res ? null : { userNameTaken: true };
        }));
    }
    redirectIfAlreadyLoggedIn() {
        this.isUserLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((userLoggedIn) => {
            if (userLoggedIn) {
                this.router.navigateByUrl('chat');
            }
        });
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    get username() { return this.registerForm.get('username'); }
    get email() { return this.registerForm.get('email'); }
    get file() { return this.registerForm.get('file'); }
    get password() { return this.registerForm.get('password'); }
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }
    getErrorMessage(e) {
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
    onFileChange(event) {
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
        };
        this.registrationService.createUser(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((res) => {
            this.login({ username: data.email, password: data.password });
        }, (error) => {
            this.error = 'Error';
            this.cleanErrorText();
        });
    }
    login(data) {
        this.loginService.login(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((res) => {
            this.store.dispatch(new src_app_ngrx_user_module_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["SetUserData"](res));
            this.router.navigateByUrl('chat');
        }, (error) => {
            this.error = "Can't login";
            this.cleanErrorText();
        });
    }
    cleanErrorText() {
        this.registerForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(e => {
            this.error = '';
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_auth_login_components_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"] },
    { type: _registration_service__WEBPACK_IMPORTED_MODULE_7__["RegistrationService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/components/registration/registration.component.html")).default,
        providers: [src_app_auth_login_components_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _registration_service__WEBPACK_IMPORTED_MODULE_7__["RegistrationService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/auth/register/components/registration/registration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_auth_login_components_login_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
        _registration_service__WEBPACK_IMPORTED_MODULE_7__["RegistrationService"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/auth/register/components/registration/registration.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/register/components/registration/registration.service.ts ***!
  \*******************************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
    }
    checkEmailNotTaken(email) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/user/allUserEmails`, { email: email }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((isUniq) => isUniq));
    }
    checkUserNameNotTaken(username) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/user/isUserNameIsUniq`, { name: username }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((isUniq) => isUniq));
    }
    createUser(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/auth/registerUser`, data, httpOptions);
    }
};
RegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegistrationService);



/***/ }),

/***/ "./src/app/auth/register/register-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/auth/register/components/registration/registration.component.ts");



// components

const routes = [
    { path: '', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] }
];
let RegisterRoutingModule = class RegisterRoutingModule {
};
RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegisterRoutingModule);



/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/auth/register/register-routing.module.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/auth/register/components/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let RegisterModule = class RegisterModule {
};
RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"]
        ]
    })
], RegisterModule);



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module-es2015.js.map