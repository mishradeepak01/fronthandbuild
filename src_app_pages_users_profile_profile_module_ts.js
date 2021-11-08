(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_profile_profile_module_ts"],{

/***/ 9816:
/*!***************************************************************!*\
  !*** ./src/app/pages/users/profile/profile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6178);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 4628:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 4256);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 9816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6178);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6178:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 6130);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 5686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);







let ProfilePage = class ProfilePage {
    constructor(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.Payment = [];
        this.Date = [];
        this.currentYear = "2021";
    }
    ngOnInit() {
        this.getCustomer();
        this.getGraphData();
        this.getCurrentYear();
        this.Chart();
        this.Data();
    }
    getCustomer() {
        this.customer = JSON.parse(this.userService.getCustomerFromStorage());
        this.last_visit = this.customer.last_visit;
        this.service = this.customer.service;
        this.payment = this.customer.payment;
    }
    update() {
        let editedDate = this.last_visit.toString();
        if (editedDate.split('-')[1] === this.customer.last_visit.split('-')[1]) {
            this.userService.editProfile(this.customer.customer_data_id, this.customer.customer_id, this.service, this.payment, this.last_visit).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.alertService.presentToast(data['msg'], 'success');
                yield this.userService.addCusomerToStorage(JSON.stringify(data['customer']));
            }));
        }
        else {
            this.userService.updateProfile(this.customer.customer_id, this.service, this.payment, this.last_visit).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.alertService.presentToast(data['msg'], 'success');
                this.userService.addCusomerToStorage(JSON.stringify(data['customer']));
            }));
        }
    }
    getCurrentYear() {
        let date = new Date();
        this.currentYear = String(date.getFullYear());
    }
    getGraphData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getGraphData(this.customer.customer_id).subscribe(data => {
                data['Payment'].forEach(element => {
                    this.Payment.push(element);
                });
                data['Date'].forEach(element => {
                    this.Date.push(element);
                });
            });
        });
    }
    Data() {
        let i = 0;
        let series = [];
        // while(i<this.Date.length) {
        //   var x = this.Date[i];
        //   var y = this.Payment[i];
        //   series.push([x,y])
        //   i++;
        // }
        for (i = 0; i < this.Date.length; i++) {
            console.log("Hello");
        }
        return series;
    }
    Chart() {
        this.chartOptions = {
            series: [
                {
                    // data: this.Data()
                    data: this.Payment
                }
            ],
            chart: {
                height: 360,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                }
            },
            stroke: {
                curve: 'smooth',
            },
            markers: {
                size: 6,
                hover: {
                    size: 10
                }
            },
            fill: {
                colors: ["#00E396"],
                opacity: 0.8,
            },
            tooltip: {
                followCursor: false,
                theme: "dark",
                marker: {
                    show: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return "₹";
                        }
                    }
                }
            },
            xaxis: {
                title: {
                    text: "Year " + this.currentYear
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            yaxis: {
                title: {
                    text: "Money Spend"
                },
                labels: {
                    minWidth: 10
                },
                min: 0,
                max: 2000,
                tickAmount: 6
            }
        };
    }
    ngOnDestroy() {
        this.userService.remove('customer');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
ProfilePage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["chart",] }]
};
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 5686:
/*!*******************************************************!*\
  !*** ./src/app/pages/users/profile/profile.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr;\n}\n\n.grid img {\n  background-position: center;\n  background-size: cover;\n}\n\n.grid .wrapper ion-input {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFIQTtFQUlJLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFHMUI7O0FBUkE7RUFTTSxrQkFBa0I7QUFHeEIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XG4gIGltZ3tcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAud3JhcHBlcntcbiAgICBpb24taW5wdXR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59Il19 */");

/***/ }),

/***/ 6130:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/profile/profile.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{customer.first_name}} {{customer.last_name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <div class=\"grid\">\n        <div>\n          <ion-card>\n            <ion-card-content>\n              <img [src]=\"'data:image/png;base64,'+customer.image_name\">\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div class=\"wrapper\">\n          <ion-item>\n            <ion-label>First Name:</ion-label>\n            <ion-label>{{customer.first_name}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Last Name:</ion-label>\n            <ion-label>{{customer.last_name}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Last Visit:</ion-label>\n            <ion-input value=\"{{customer.last_visit}}\" type=\"date\" name=\"last_visit\" [(ngModel)]=\"last_visit\"></ion-input>\n            <ion-icon name=\"pencil-outline\"></ion-icon>\n          </ion-item>\n          <ion-item>\n            <ion-label>Service:</ion-label>\n            <ion-input value=\"{{customer.service}}\" type=\"text\" name=\"service\" [(ngModel)]=\"service\"></ion-input>\n            <ion-icon name=\"pencil-outline\"></ion-icon>\n          </ion-item>\n          <ion-item>\n            <ion-label>Payment Status:</ion-label>\n            <ion-input value=\"{{customer.payment}}\" type=\"number\" name=\"payment\" [(ngModel)]=\"payment\"></ion-input>\n            <ion-icon name=\"pencil-outline\"></ion-icon>\n          </ion-item>\n          <ion-item>\n            <ion-label>Important Dates:</ion-label>\n            <ion-label>{{customer.anniversary}}</ion-label>\n          </ion-item>\n          <ion-button slot=\"end\" (click)=\"update()\">Update</ion-button>\n        </div>\n      </div>\n      <ion-item>\n        <ion-label>About Customer</ion-label>\n        <ion-label>{{customer.message}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-content>\n      <apx-chart\n      [series]=\"chartOptions.series\"\n      [chart]=\"chartOptions.chart\"\n      [xaxis]=\"chartOptions.xaxis\"\n      [yaxis]=\"chartOptions.yaxis\"\n      [stroke]=\"chartOptions.stroke\"\n      [markers]=\"chartOptions.markers\"\n      [tooltip]=\"chartOptions.tooltip\"\n      [fill]=\"chartOptions.fill\"\n    ></apx-chart>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_profile_profile_module_ts.js.map