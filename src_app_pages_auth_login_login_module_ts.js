(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 5221:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7412);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9456:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5221);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7412);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7412:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 2898);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);








let LoginPage = class LoginPage {
    constructor(router, authService, tokenStorage, alertService, route) {
        this.router = router;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.alertService = alertService;
        this.route = route;
        this.email = 'User@gmail.com';
        this.password = 'User123';
        this.showPassword = false;
        this.loading = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.router.navigate(['/dashboard']);
        }
    }
    hideShowPassword() {
        this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon == 'eye-off' ? 'eye' : 'eye-off';
    }
    onSubmit() {
        this.loading = true;
        this.authService.login(this.email, this.password).subscribe(data => {
            this.alertService.presentToast(data.msg, 'success');
            this.tokenStorage.setToken(data.token);
            setTimeout(() => {
                this.router.navigateByUrl('/dashboard', { replaceUrl: true });
            }, 1500);
        });
        this.loading = false;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 6934:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-row {\n  align-items: center;\n}\n\nion-card {\n  margin: 0 1rem;\n}\n\nion-card-title {\n  font-size: 2rem;\n  text-align: center;\n  padding-left: 1rem;\n  color: #2000aa;\n}\n\nion-img {\n  width: 230px;\n  height: 170px;\n  align-items: center;\n}\n\n.spinner {\n  position: absolute;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.spinner img {\n  position: fixed;\n  height: 120px;\n}\n\n.content {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.icon {\n  position: relative;\n  top: 20px;\n  color: #474747;\n}\n\n.button {\n  margin-top: 2rem;\n}\n\nion-button {\n  background-color: #200aaa;\n}\n\n.handler {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-items: center;\n}\n\n.handler .forget-password {\n  align-self: flex-end;\n  margin-top: 0.2rem;\n}\n\n.handler .register-page {\n  margin-top: 1rem;\n}\n\n@media (min-width: auto) {\n  ion-card-header {\n    width: auto;\n    height: auto;\n  }\n}\n\n@media (min-width: 900px) {\n  ion-card-title {\n    margin: 1rem 0;\n    font-size: 3rem;\n  }\n}\n\n@media (max-width: 350px) {\n  ion-img {\n    width: auto;\n    height: auto;\n  }\n}\n\n@media (min-width: 576px) {\n  .xs-header1 {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .xs-header2 {\n    display: none;\n  }\n  ion-card {\n    margin: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFFckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBSztFQUNMLE9BQU07RUFDTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUt2QiwwQ0FBdUM7QUFIekM7O0FBWEE7RUFXSSxlQUFlO0VBQ2YsYUFBYTtBQUlqQjs7QUFDQTtFQUNFLFlBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixjQUFzQjtBQUV4Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUVsQjs7QUFBQTtFQUNFLHlCQUF5QjtBQUczQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUV2Qjs7QUFOQTtFQU9JLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFHdEI7O0FBWEE7RUFZSSxnQkFBZ0I7QUFHcEI7O0FBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBR2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFFakI7QUFDRjs7QUFBQTtFQUNFO0lBQ0csV0FBVztJQUNYLFlBQVk7RUFHZjtBQUNGOztBQURBO0VBQ0U7SUFDRSxhQUFhO0VBSWY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsYUFBYTtFQUlmO0VBRkE7SUFDRSxZQUFZO0VBSWQ7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tY2FyZHtcbiAgbWFyZ2luOiAwIDFyZW07XG59XG5cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBjb2xvcjogIzIwMDBhYTtcbn1cbmlvbi1pbWd7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG59XG5cbi5zcGlubmVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBpbWd7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xufVxuXG4uY29udGVudHtcbiAgaGVpZ2h0OjEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDoyMHB4O1xuICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xufVxuXG4uYnV0dG9ue1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuaW9uLWJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMGFhYTtcbn1cblxuXG4uaGFuZGxlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmZvcmdldC1wYXNzd29yZHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIH1cblxuICAucmVnaXN0ZXItcGFnZXtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEobWluLXdpZHRoOiBhdXRvKSB7XG4gIGlvbi1jYXJkLWhlYWRlcntcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDkwMHB4KSB7XG4gIGlvbi1jYXJkLXRpdGxle1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogMzUwcHgpe1xuICBpb24taW1ne1xuICAgICB3aWR0aDogYXV0bztcbiAgICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xuICAueHMtaGVhZGVyMXtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC54cy1oZWFkZXIye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW9uLWNhcmR7XG4gICAgbWFyZ2luOiBub25lO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 2898:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"content\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title class=\"xs-header1\">Sign In</ion-card-title>\n      </ion-card-header>\n      \n      <ion-grid>\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col size-xs=\"9\" size-sm=\"5\" size-lg=\"5\">\n            <ion-card>\n              <ion-img src=\"../../../../assets/images/male-user.png\" class=\"image\"></ion-img>\n            </ion-card>\n          </ion-col>\n\n          <div *ngIf=\"loading\" class=\"spinner\">\n            <img src=\"../../../../assets/icon/spinner.gif\">\n          </div>\n\n          <ion-col size-xs=\"12\" size-sm=\"5\" size=\"5.5\">\n            <ion-card-header>\n              <ion-card-title class=\"xs-header2\">Sign In</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content>\n              <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n                  <ion-icon class=\"icon\" name=\"mail\" slot=\"end\"></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" [(ngModel)]=\"password\">\n                  </ion-input>\n                  <ion-icon class=\"icon\" [name]=\"passwordIcon\" slot=\"end\" (click)=\"hideShowPassword()\"></ion-icon>\n                </ion-item>\n                \n                <div class=\"handler\">\n                  <a class=\"forget-password\" routerLink=\"#\">Forget Password</a>\n                  <ion-button class=\"button\" type=\"submit\" slot=\"end\">Sign In</ion-button>\n                  <a class=\"register-page\" routerLink=\"/register\">Create a new account</a>\n                </div>\n              </form>\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map