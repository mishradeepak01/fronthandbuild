(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_admin_dashboard_dashboard_module_ts"],{

/***/ 4673:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 3932);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 2477:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 4673);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 3932);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 3932:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 9883);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 9482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ 7501);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);








let DashboardPage = class DashboardPage {
    constructor(tokenStorage, adminService, alertService, router) {
        this.tokenStorage = tokenStorage;
        this.adminService = adminService;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.getCategory();
        this.getReferals();
    }
    getReferals() {
        this.adminService.getReferals().subscribe(data => {
            this.referals = data;
        });
    }
    deleteReferal(val) {
        this.adminService.deleteReferal(val).subscribe(data => {
            this.referals = data;
        });
    }
    generateReferal() {
        this.adminService.generateReferal().subscribe(data => {
            this.referals = data;
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            this.template_name = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.template_url = (event.target.result);
            };
        }
    }
    onSubmit() {
        this.adminService.addTemplate(this.template_url, this.template_name, this.business_id1, this.image_name).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.template_url = '';
            this.image_name = '';
            document.querySelector('ion-input').value = '';
            this.business_id1 = null;
        });
    }
    addCategory() {
        this.adminService.addBusiness(this.category).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.category = '';
        });
    }
    addMessage() {
        this.adminService.addMessage(1, this.business_id2, this.Message).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.Message = '';
            document.querySelector('ion-input').value = '';
            this.business_id2 = null;
        });
    }
    addService() {
        this.adminService.addService(1, this.business_id3, this.service).subscribe(data => {
            this.alertService.presentToast(data['msg'], 'success');
            this.service = '';
            document.querySelector('ion-input').value = '';
            this.business_id3 = null;
        });
    }
    getCategory() {
        this.adminService.getCategory().subscribe(data => {
            this.business_category = data['business'];
        });
    }
    logout() {
        this.tokenStorage.logout();
        this.router.navigateByUrl('/', { replaceUrl: true });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService },
    { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 9482:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".wrapper {\n  display: flex;\n  flex-direction: column;\n  padding: 0.4rem;\n}\n\n.wrapper ion-item {\n  padding: 0.4rem 0;\n}\n\n.wrapper ion-img {\n  padding: 0.3rem;\n}\n\n#referal ion-card-header {\n  padding: 0.2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#referal ion-card-header ion-button {\n  margin-top: 2rem;\n}\n\n#referal ion-card-content #header ion-chip {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#referal ion-card-content #content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBSkE7RUFLSSxpQkFBaUI7QUFHckI7O0FBUkE7RUFRSSxlQUFlO0FBSW5COztBQUFBO0VBRUksZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBRWpDOztBQVBBO0VBT00sZ0JBQWdCO0FBSXRCOztBQVhBO0VBYVEsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFFckM7O0FBakJBO0VBbUJNLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUVwQyIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgaW9uLWl0ZW17XG4gICAgcGFkZGluZzogMC40cmVtIDA7XG4gIH1cbiAgaW9uLWltZ3tcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gIH1cbn1cblxuI3JlZmVyYWx7XG4gIGlvbi1jYXJkLWhlYWRlcntcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGlvbi1idXR0b257XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbiAgfVxuICBpb24tY2FyZC1jb250ZW50e1xuICAgICNoZWFkZXJ7XG4gICAgICBpb24tY2hpcHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgfVxuICAgIH1cbiAgICAjY29udGVudHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59Il19 */");

/***/ }),

/***/ 9883:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/dashboard/dashboard.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Welcome To Dashboard</ion-title>\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"logout()\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>Add Category</ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Add Category</ion-label>\n        <ion-input type=\"text\" name=\"category\" [(ngModel)]=\"category\"></ion-input>\n      </ion-item>\n      <ion-button (click)=\"addCategory()\">Add</ion-button>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>Add Template</ion-card-header>\n      <div class=\"wrapper\">\n        <ion-item>\n          <ion-label position=\"floating\">Bussiness Category</ion-label>\n          <ion-select [(ngModel)]=\"business_id1\" name=\"business_id1\">\n            <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Template Name</ion-label>\n          <ion-input name=\"image_name\" [(ngModel)]=\"image_name\"></ion-input>\n        </ion-item>\n        <ion-input type=\"file\" (change)=\"onSelectFile($event)\" accept=\"image/*\"></ion-input>\n        <ion-img [src]=\"template_url\" *ngIf=\"template_url\"></ion-img>\n        <ion-button (click)=\"onSubmit()\">Upload</ion-button>\n      </div>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>Add Default Message</ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Bussiness Category</ion-label>\n        <ion-select [(ngModel)]=\"business_id2\" name=\"business_id2\">\n          <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Default Message</ion-label>\n        <ion-input type=\"text\" name=\"Message\" [(ngModel)]=\"Message\"></ion-input>\n      </ion-item>\n      <ion-button (click)=\"addMessage()\">Add</ion-button>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>Add Default Services</ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Bussiness Category</ion-label>\n        <ion-select [(ngModel)]=\"business_id3\" name=\"business_id3\">\n          <ion-select-option *ngFor=\"let business of business_category\" value={{business.business_id}}>{{business.business_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Default Services</ion-label>\n        <ion-input type=\"text\" name=\"service\" [(ngModel)]=\"service\"></ion-input>\n      </ion-item>\n      <ion-button (click)=\"addService()\">Add</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card id=\"referal\">\n    <ion-card-header >\n      <p>Generate Referal</p>\n      <ion-button (click)=\"generateReferal()\">Generate Referal</ion-button>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item id=\"header\">\n        <ion-chip>\n          <ion-label>Referal Code</ion-label>\n          <ion-label>Assigned Status</ion-label>\n        </ion-chip>\n      </ion-item>\n      <ion-item *ngFor=\"let referal of referals\" id=\"content\">\n        <ion-chip>{{referal.code}}</ion-chip>\n        <ion-chip>{{referal.assigned_status}}</ion-chip>\n        <ion-icon name=\"trash\" color=\"danger\" (click)=\"deleteReferal(referal.id)\"></ion-icon>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_dashboard_dashboard_module_ts.js.map