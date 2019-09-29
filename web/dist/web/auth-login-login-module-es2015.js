(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/components/login/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/components/login/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-wrapper\">\n  <div class=\"box\">\n    <h2>Login</h2>\n    <form [formGroup]=\"loginForm\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\"/>\n        <div *ngIf=\"email?.errors && email?.touched\" class=\"error-text\">\n          {{ getErrorMessage(email) }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\n        <div *ngIf=\"password?.errors && password?.touched\" class=\"error-text\">\n          {{ getErrorMessage(password) }}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loginForm?.invalid || error\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Login</button>\n        <a [routerLink]=\"['/registration']\" class=\"btn btn-link\">Registration</a>\n      </div>\n      <div [hidden]='!error' class=\"alert alert-danger\" role=\"alert\">\n        {{ error }}\n      </div>\n    </form> \n  </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/login/components/login/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/login/components/login/login.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-wrapper {\n  background: #D7DFE7;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .login-wrapper .box {\n    width: 30%;\n    border: 0px; }\n  .ng-valid:not(form) {\n  border-left: 5px solid #42A948; }\n  .error-text {\n  color: #a94442;\n  padding: 0px 7px; }\n  @media screen and (max-width: 900px) {\n  .login-wrapper .box {\n    width: 60%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9jb21wb25lbnRzL2xvZ2luL0Q6XFxHaXRcXEdlbmVzaXNcXHdlYi9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBRVosYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQU52QjtJQVNRLFVBQVU7SUFDVixXQUFXLEVBQUE7RUFJbkI7RUFDSSw4QkFBOEIsRUFBQTtFQUdsQztFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJO0lBRVEsVUFBVSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDdERkU3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5nLXZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dCB7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAubG9naW4td3JhcHBlciB7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/components/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/login/components/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/auth/login/components/login/login.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_user_module_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ngrx/user-module/actions/user.actions */ "./src/app/ngrx/user-module/actions/user.actions.ts");
/* harmony import */ var _ngrx_user_module_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ngrx/user-module/reducers */ "./src/app/ngrx/user-module/reducers/index.ts");






// ngrx



let LoginComponent = class LoginComponent {
    constructor(formBuilder, loginService, router, store) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.store = store;
        this.error = '';
        this.isUserLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_ngrx_user_module_reducers__WEBPACK_IMPORTED_MODULE_8__["isUserLoggedIn"]));
        this.redirectIfAlreadyLoggedIn();
    }
    redirectIfAlreadyLoggedIn() {
        this.isUserLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe((userLoggedIn) => {
            if (userLoggedIn) {
                this.router.navigateByUrl('chat');
            }
        });
    }
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['test@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['test123', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    getErrorMessage(e) {
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
        };
        this.loginService.login(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((res) => {
            this.store.dispatch(new _ngrx_user_module_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["SetUserData"](res));
            this.router.navigateByUrl('chat');
        }, (error) => {
            this.error = 'Incorrect email or password.';
            this.loginForm.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(e => {
                this.error = '';
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/components/login/login.component.html")).default,
        providers: [_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/components/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/login/components/login/login.component.ts");



// components

const routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/login/components/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map