(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_home_home_module_ts"],{

/***/ 2321:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/home/home-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7573);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 790:
/*!*************************************************!*\
  !*** ./src/app/pages/users/home/home.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2321);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 7573);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7573:
/*!***********************************************!*\
  !*** ./src/app/pages/users/home/home.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 3116);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);









let HomePage = class HomePage {
    constructor(tokenStorage, userService, router, _alertController, _alertService) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.router = router;
        this._alertController = _alertController;
        this._alertService = _alertService;
    }
    ngOnInit() {
        this.getTemplates();
        this.getUser();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.username = user['username'];
        this.user_id = user['user_id'];
    }
    edit(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.checkReferal(this.user_id).subscribe(data => {
                this.result = data;
                if (this.result == null) {
                    this.presentAlertPrompt(value);
                }
                else {
                    this.userService.addImageToStorage(value);
                    this.router.navigate(['/editimage']);
                }
            });
        });
    }
    presentAlertPrompt(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: 'Enter Referal Code',
                inputs: [
                    {
                        name: 'code',
                        type: 'number',
                        placeholder: 'Referal Code'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                    }, {
                        text: 'Ok',
                        handler: (alertData) => {
                            this.userService.assignReferal(this.user_id, alertData.code).subscribe(data => {
                                if (data == true) {
                                    this.userService.addImageToStorage(value);
                                    this.router.navigate(['/editimage']);
                                }
                                else {
                                    this._alertService.presentToast(data['error'], 'danger');
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getTemplates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getTemplate().subscribe(data => {
                this.templates = data['template'];
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2511:
/*!*************************************************!*\
  !*** ./src/app/pages/users/home/home.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid {\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.grid ion-card {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n}\n\n.grid ion-card ion-img {\n  opacity: 0.6;\n  z-index: 1;\n  height: 350px;\n}\n\n.grid ion-card ion-button {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.grid #template_name {\n  text-align: center;\n}\n\nion-title {\n  color: #1000aa;\n}\n\nion-label {\n  color: #414040;\n}\n\nion-chip {\n  padding: 1rem;\n  background-color: #d4cbff;\n}\n\nion-chip .username {\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw0REFBMkQ7QUFDN0Q7O0FBSkE7RUFNSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFFeEI7O0FBWEE7RUFZTSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFHbkI7O0FBakJBO0VBbUJNLGtCQUFrQjtFQUNsQixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsb0NBQW9DO0FBRTFDOztBQTFCQTtFQTZCSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUVoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFFM0I7O0FBSkE7RUFJSSxlQUFlO0FBSW5CIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWR7XG4gIG1hcmdpbjogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgzMDBweCwgMWZyKSk7XG5cbiAgaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjsgICAgXG4gICAgXG4gICAgaW9uLWltZ3tcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIGlvbi1idXR0b257XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OjI7XG4gICAgICB0b3A6NTAlO1xuICAgICAgbGVmdDo1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gIH1cblxuICAjdGVtcGxhdGVfbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbmlvbi10aXRsZXtcbiAgY29sb3I6ICMxMDAwYWE7XG59XG5pb24tbGFiZWx7XG4gIGNvbG9yOiAjNDE0MDQwO1xufVxuXG5pb24tY2hpcHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0Y2JmZjtcbiAgLnVzZXJuYW1le1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG59Il19 */");

/***/ }),

/***/ 3116:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/home/home.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n    <ion-chip  slot=\"end\">\n      <ion-label class=\"username\">Welcome {{username}}</ion-label>\n    </ion-chip>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"grid\" *ngFor=\"let template of templates\">\n    <ion-card>\n      <ion-card-content>\n        <ion-img [src]=\"'data:image/png;base64, '+template.template_name\"></ion-img>\n        <ion-button color=\"light\" (click)=\"edit(template.template_name)\">Edit</ion-button>\n      </ion-card-content>\n    </ion-card>\n    <ion-label id=\"template_name\">{{template.image_name}}</ion-label>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_home_home_module_ts.js.map