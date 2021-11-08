(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_service_service_module_ts"],{

/***/ 4440:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/service/service-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageRoutingModule": () => (/* binding */ ServicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.page */ 3744);




const routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_0__.ServicePage
    }
];
let ServicePageRoutingModule = class ServicePageRoutingModule {
};
ServicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicePageRoutingModule);



/***/ }),

/***/ 333:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/service/service.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePageModule": () => (/* binding */ ServicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-routing.module */ 4440);
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.page */ 3744);







let ServicePageModule = class ServicePageModule {
};
ServicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _service_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicePageRoutingModule
        ],
        declarations: [_service_page__WEBPACK_IMPORTED_MODULE_1__.ServicePage]
    })
], ServicePageModule);



/***/ }),

/***/ 3744:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/service/service.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicePage": () => (/* binding */ ServicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_service_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./service.page.html */ 8770);
/* harmony import */ var _service_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.page.scss */ 8143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);







let ServicePage = class ServicePage {
    constructor(tokenStorage, userService, alertServie) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.alertServie = alertServie;
    }
    ngOnInit() {
        this.getUser();
        this.getService();
        this.getMessage();
        this.getBusinessDetails();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
        this.business_id = user['business_id'];
    }
    show(content) {
        document.getElementById(content).style.display = 'block';
    }
    getBusinessDetails() {
        this.userService.getBusinessDetails(this.user_id).subscribe(data => {
            this.businessName = data['businessName'];
            this.contactNo = data['contactNo'];
        });
    }
    addBusinessDetails() {
        this.userService.addBusinessDetails(this.user_id, this.businessName, this.contactNo).subscribe(data => {
            this.alertServie.presentToast(data['msg'], 'success');
        });
    }
    getService() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getService(this.user_id).subscribe(data => {
                this.services = data['service'];
            });
        });
    }
    addService() {
        this.userService.addService(this.user_id, this.business_id, this.service).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            this.service = '';
            document.getElementById('service').style.display = 'none';
            yield this.getService();
        }));
    }
    deleteService(data) {
        this.userService.deleteService(data).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            yield this.getService();
        }));
    }
    getMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getMessage(this.user_id).subscribe(data => {
                this.messages = data['message'];
            });
        });
    }
    addMessage() {
        this.userService.addMessage(this.user_id, this.business_id, this.message).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.alertServie.presentToast(data['msg'], 'success');
            this.message = '';
            document.getElementById('message').style.display = 'none';
            yield this.getMessage();
        }));
    }
    deleteMessage(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.deleteMessage(data).subscribe(data => {
                this.alertServie.presentToast(data['msg'], 'success');
                this.getMessage();
            });
        });
    }
};
ServicePage.ctorParameters = () => [
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ServicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-service',
        template: _raw_loader_service_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_service_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServicePage);



/***/ }),

/***/ 8143:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/service/service.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#service, #message {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlcnZpY2UsICNtZXNzYWdle1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ 8770:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/service/service.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Service</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Business Details\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Business Name</ion-label>\n        <ion-input name=\"businessName\" type=\"text\" [(ngModel)]=\"businessName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Contact Info</ion-label>\n        <ion-input name=\"contactNo\" type=\"number\" [(ngModel)]=\"contactNo\"></ion-input>\n      </ion-item>\n      <ion-button (click)=\"addBusinessDetails()\">Add</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label>\n          Customer Service\n        </ion-label>\n        <ion-icon name=\"add-circle-outline\" (click)=\"show('service')\" slot=\"end\" color=\"primary\"></ion-icon>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let service of services\">\n          <ion-label>{{service.service_data}}</ion-label>\n          <ion-icon (click)=\"deleteService(service.service_id)\" name=\"trash\" slot=\"end\" color=\"danger\"></ion-icon>\n        </ion-item>\n        <ion-item id=\"service\">\n          <ion-label position=\"floating\">Add Service</ion-label>\n          <ion-input name=\"service\" [(ngModel)]=\"service\"></ion-input>\n          <ion-button slot=\"end\" (click)=\"addService()\">Add</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label>\n          Custom Messages\n        </ion-label>\n        <ion-icon name=\"add-circle-outline\" (click)=\"show('message')\" slot=\"end\" color=\"primary\"></ion-icon>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let message of messages\">\n          <ion-label>{{message.text_data}}</ion-label>\n          <ion-icon (click)=\"deleteMessage(message.text_id)\" name=\"trash\" slot=\"end\" color=\"danger\"></ion-icon>\n        </ion-item>\n        <ion-item id=\"message\">\n          <ion-label position=\"floating\">Add Message</ion-label>\n          <ion-input name=\"message\" [(ngModel)]=\"message\"></ion-input>\n          <ion-button slot=\"end\" (click)=\"addMessage()\">Add</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_service_service_module_ts.js.map