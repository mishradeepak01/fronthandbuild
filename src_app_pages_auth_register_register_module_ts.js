(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_auth_register_register_module_ts"],{

/***/ 917:
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/register/register-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9413);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 6029:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 917);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9413);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9413:
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 2403);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 2912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/alert.service */ 5970);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/admin.service */ 7501);








let RegisterPage = class RegisterPage {
    constructor(authService, router, alertService, adminService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.adminService = adminService;
        this.username = 'Anshul Sharma';
        this.email = 'anshulsharma@gmail.com';
        this.password = 'anshul123';
        this.loading = false;
        this.submitted = false;
        this.showPassword = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ngOnInit() {
        this.getCategory();
    }
    hideShowPassword() {
        this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon == 'eye-off' ? 'eye' : 'eye-off';
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.authService.register(this.username, this.email, this.password, this.business_id).subscribe(data => {
            this.alertService.presentToast(data.msg, 'success');
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 2000);
        });
        this.loading = false;
    }
    getCategory() {
        this.adminService.getCategory().subscribe(data => {
            this.category = data['business'];
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 2912:
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-row {\n  align-items: center;\n}\n\nion-card-title {\n  font-size: 2rem;\n  text-align: center;\n  padding-left: 1rem;\n  color: #2000aa;\n}\n\n.content {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n\nion-img {\n  width: 230px;\n  height: 170px;\n  align-items: center;\n}\n\n.spinner {\n  position: absolute;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.spinner img {\n  position: fixed;\n  height: 120px;\n}\n\nion-card {\n  margin: 0 1rem;\n}\n\nion-card-title {\n  font-size: 2rem;\n  text-align: center;\n  padding-left: 1rem;\n}\n\nion-select-option {\n  color: #2000aa;\n}\n\nion-select .text {\n  color: #2000aa;\n}\n\n.icon {\n  position: relative;\n  top: 20px;\n  color: #474747;\n}\n\n.button {\n  margin-top: 2rem;\n}\n\n.handler {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-items: center;\n}\n\n.handler a {\n  margin-top: 1rem;\n}\n\n.handler a span {\n  font-weight: bold;\n}\n\n@media (min-width: 1500px) {\n  ion-card-title {\n    margin: 1rem 0;\n    font-size: 3rem;\n  }\n}\n\n@media (max-width: 340px) {\n  ion-img {\n    width: auto;\n    height: auto;\n  }\n}\n\n@media (min-width: 576px) {\n  .xs-header1 {\n    display: none;\n  }\n}\n\n@media (max-width: 576px) {\n  .xs-header2 {\n    display: none;\n  }\n  ion-card {\n    margin: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFFaEI7O0FBQUE7RUFDRSxhQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUdyQjs7QUFEQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBSXJCOztBQURBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQUs7RUFDTCxPQUFNO0VBQ04sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFLdkIsMENBQXVDO0FBQXpDOztBQWRBO0VBV0ksZUFBZTtFQUNmLGFBQWE7QUFPakI7O0FBRkE7RUFDRSxjQUFjO0FBS2hCOztBQUZBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFLcEI7O0FBSEE7RUFDRSxjQUFjO0FBTWhCOztBQUpBO0VBRUksY0FBYztBQU1sQjs7QUFIQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsY0FBc0I7QUFNeEI7O0FBSEE7RUFDRSxnQkFBZ0I7QUFNbEI7O0FBSEE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFNdkI7O0FBVkE7RUFPSSxnQkFBZ0I7QUFPcEI7O0FBZEE7RUFTTSxpQkFBaUI7QUFTdkI7O0FBSkE7RUFDRTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBT2pCO0FBQ0Y7O0FBTEE7RUFDRTtJQUNHLFdBQVc7SUFDWCxZQUFZO0VBUWY7QUFDRjs7QUFMQTtFQUNFO0lBQ0UsYUFBYTtFQVFmO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLGFBQWE7RUFRZjtFQU5BO0lBQ0UsWUFBWTtFQVFkO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvd3tcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBjb2xvcjogIzIwMDBhYTtcbn1cbi5jb250ZW50e1xuICBoZWlnaHQ6MTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taW1ne1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxufVxuLnNwaW5uZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGltZ3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG59XG5cbmlvbi1jYXJke1xuICBtYXJnaW46IDAgMXJlbTtcbn1cblxuaW9uLWNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5pb24tc2VsZWN0LW9wdGlvbntcbiAgY29sb3I6ICMyMDAwYWE7XG59XG5pb24tc2VsZWN0e1xuICAudGV4dHtcbiAgICBjb2xvcjogIzIwMDBhYTtcbiAgfVxufVxuLmljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjIwcHg7XG4gIGNvbG9yOiByZ2IoNzEsIDcxLCA3MSk7XG59XG5cbi5idXR0b257XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5oYW5kbGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICBhe1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgc3BhbntcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgaW9uLWNhcmQtdGl0bGV7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOiAzNDBweCl7XG4gIGlvbi1pbWd7XG4gICAgIHdpZHRoOiBhdXRvO1xuICAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnhzLWhlYWRlcjF7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NzZweCkge1xuICAueHMtaGVhZGVyMntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogbm9uZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 2403:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content> \n  <div class=\"content\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title class=\"xs-header1\">Sign Up</ion-card-title>\n      </ion-card-header>\n      \n      <ion-grid>\n        <ion-row class=\"ion-justify-content-around\">\n          <ion-col size-xs=\"9\" size-sm=\"5\" size-lg=\"5\">\n            <ion-card>\n              <ion-img src=\"../../../../assets/images/male-user.png\" class=\"image\"></ion-img>\n            </ion-card>\n          </ion-col>\n  \n          <div *ngIf=\"loading\" class=\"spinner\">\n            <img src=\"../../../../assets/icon/spinner.gif\">\n          </div>\n\n          <ion-col size-xs=\"12\" size-sm=\"5\" size=\"5.5\">\n            <ion-card-header>\n              <ion-card-title class=\"xs-header2\">Sign Up</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content>\n              <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <ion-item>\n                  <ion-label position=\"floating\">Username</ion-label>\n                  <ion-input type=\"username\" name=\"username\" [(ngModel)]=\"username\"></ion-input>\n                  <ion-icon class=\"icon\" name=\"person-circle-outline\" slot=\"end\"></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n                  <ion-icon class=\"icon\" name=\"mail\" slot=\"end\"></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" [(ngModel)]=\"password\">\n                  </ion-input>\n                  <ion-icon class=\"icon\" [name]=\"passwordIcon\" slot=\"end\" (click)=\"hideShowPassword()\"></ion-icon>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label position=\"floating\">Business Category</ion-label>\n                  <ion-select type=\"text\" name=\"business_id\" [(ngModel)]=\"business_id\">\n                    <ion-select-option *ngFor=\"let business of category\" value={{business.business_id}} color=\"black\">{{business.business_name}}</ion-select-option>\n                  </ion-select>\n                  <ion-icon class=\"icon\" name=\"keypad-outline\" slot=\"end\"></ion-icon>\n                </ion-item>\n                \n                <div class=\"handler\">\n                  <ion-button class=\"button\" type=\"submit\" slot=\"end\">Sign Up</ion-button>\n                  <a routerLink=\"/login\">Have already an account? <span>Login here</span></a>\n                </div>\n              </form>\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_register_register_module_ts.js.map