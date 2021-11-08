(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_customer_customer_module_ts"],{

/***/ 6595:
/*!*****************************************************************!*\
  !*** ./src/app/pages/users/customer/customer-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPageRoutingModule": () => (/* binding */ CustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.page */ 7718);




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_0__.CustomerPage
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerPageRoutingModule);



/***/ }),

/***/ 9067:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/customer/customer.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPageModule": () => (/* binding */ CustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 6595);
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page */ 7718);







let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerPageRoutingModule
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_1__.CustomerPage]
    })
], CustomerPageModule);



/***/ }),

/***/ 7718:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/customer/customer.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPage": () => (/* binding */ CustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer.page.html */ 8177);
/* harmony import */ var _customer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page.scss */ 2764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tokenstorage.service */ 2727);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);








let CustomerPage = class CustomerPage {
    constructor(tokenStorage, userService, alertService, router) {
        this.tokenStorage = tokenStorage;
        this.userService = userService;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.getUserData();
        this.getUsers();
    }
    // getAnniversary() {
    //   let date: Date = new Date('UTC');
    //   let currentDay = date.getDay();
    //   let currentMonth = date.getMonth();
    //   // let currentDay = 14;
    //   // let currentMonth = 8;
    //   this.customers.forEach(customer => {
    //     let customer_anniversary = customer.anniversary.split('-');
    //     if((currentDay == customer_anniversary[2]) && (currentMonth == customer_anniversary[1])) {
    //       this.alertService.presentToast(`Congratulations ${customer.first_name+' '+customer.last_name} has completed a year with us`, 'success');
    //     }
    //   });
    // }
    getUserData() {
        let user = this.tokenStorage.DecodeToken();
        this.name = user['username'];
        this.id = user['user_id'];
    }
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getUsers(this.id).subscribe(data => {
                this.customers = data['customer'];
                // this.getAnniversary()
            });
        });
    }
    Search(value) {
        value = value.toLowerCase();
        if (value == '') {
            this.getUsers();
        }
        let copyCustomers = this.customers;
        this.customers = [];
        copyCustomers.forEach(element => {
            let name = (element['first_name'] + ' ' + element['last_name']).toLowerCase();
            if (name.indexOf(value) != -1) {
                this.customers.push(element);
            }
        });
    }
    onClear() {
        this.getUsers();
    }
    select(customer) {
        this.router.navigate(['/profile']);
        this.userService.addCusomerToStorage(JSON.stringify(customer));
    }
    add() {
        this.router.navigateByUrl('/add-customer', { state: { id: this.id } });
    }
};
CustomerPage.ctorParameters = () => [
    { type: _services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
CustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer',
        template: _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerPage);



/***/ }),

/***/ 2764:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/customer/customer.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  width: 50%;\n  color: #bfb8ff;\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.grid {\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1.5rem;\n}\n\n.grid ion-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.grid ion-card ion-card-header {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.grid ion-card-subtitle {\n  font-size: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.grid ion-card-subtitle span {\n  font-weight: bold;\n}\n\nion-title {\n  color: #1000aa;\n}\n\n@media (max-width: 450px) {\n  .content ion-title {\n    padding: 0 0.8rem;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n  .content ion-searchbar {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n}\n\n@media (max-width: 350px) {\n  .content ion-title {\n    padding: 0 0.4rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDREQUEyRDtFQUMzRCxnQkFBZ0I7QUFDbEI7O0FBTEE7RUFPSSxhQUFhO0VBQ2Isc0JBQXNCO0FBRTFCOztBQVZBO0VBVU0sYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFJekI7O0FBaEJBO0VBaUJJLGVBQWM7RUFDZCxxQkFBcUI7QUFHekI7O0FBckJBO0VBb0JNLGlCQUFpQjtBQUt2Qjs7QUFEQTtFQUNFLGNBQWM7QUFJaEI7O0FBQUE7RUFDRTtJQUVJLGlCQUFpQjtJQUNqQiw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtFQUUxQjtFQUxBO0lBT0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7RUFDdEI7QUFDRjs7QUFHQTtFQUNFO0lBRUksaUJBQWlCO0VBRHJCO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhcntcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6ICNiZmI4ZmY7XG59XG5cbi5jb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ncmlke1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMS41cmVtO1xuXG4gIGlvbi1jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBzcGFue1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5pb24tdGl0bGV7XG4gIGNvbG9yOiAjMTAwMGFhO1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jb250ZW50e1xuICAgIGlvbi10aXRsZXtcbiAgICAgIHBhZGRpbmc6IDAgMC44cmVtO1xuICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiAzNTBweCkge1xuICAuY29udGVudHtcbiAgICBpb24tdGl0bGV7XG4gICAgICBwYWRkaW5nOiAwIDAuNHJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 8177:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/customer/customer.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"content\">\n      <ion-title>Customer</ion-title>\n      <ion-searchbar (ionClear)=\"onClear()\" (ionChange)=\"Search($event.target.value)\" animated></ion-searchbar>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"grid\">\n    <ion-card *ngFor=\"let customer of customers\" (click)=\"select(customer)\">\n      <ion-card-header>\n        <ion-card-title>\n          <ion-text>\n            {{customer.first_name}}\n          </ion-text>\n\n          <ion-text>\n            {{customer.last_name}}\n          </ion-text>\n        </ion-card-title>\n\n        <ion-avatar>\n          <img [src]=\"'data:image/png;base64,'+customer.image_name\">\n        </ion-avatar>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-card-subtitle class=\"main-content\">\n          <span>Mostly Prefer: </span>\n          {{customer.service}}\n        </ion-card-subtitle>\n\n        <ion-text>{{customer.message}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\" (click)=\"add()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_customer_customer_module_ts.js.map