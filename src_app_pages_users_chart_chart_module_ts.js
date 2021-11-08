(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_chart_chart_module_ts"],{

/***/ 5773:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/chart/chart-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartPageRoutingModule": () => (/* binding */ ChartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.page */ 8869);




const routes = [
    {
        path: '',
        component: _chart_page__WEBPACK_IMPORTED_MODULE_0__.ChartPage
    }
];
let ChartPageRoutingModule = class ChartPageRoutingModule {
};
ChartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChartPageRoutingModule);



/***/ }),

/***/ 9799:
/*!***************************************************!*\
  !*** ./src/app/pages/users/chart/chart.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartPageModule": () => (/* binding */ ChartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 4256);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-routing.module */ 5773);
/* harmony import */ var _chart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.page */ 8869);








let ChartPageModule = class ChartPageModule {
};
ChartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartPageRoutingModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule
        ],
        declarations: [_chart_page__WEBPACK_IMPORTED_MODULE_1__.ChartPage]
    })
], ChartPageModule);



/***/ }),

/***/ 8869:
/*!*************************************************!*\
  !*** ./src/app/pages/users/chart/chart.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartPage": () => (/* binding */ ChartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chart.page.html */ 4832);
/* harmony import */ var _chart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.page.scss */ 4897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ChartPage = class ChartPage {
    constructor() {
    }
};
ChartPage.ctorParameters = () => [];
ChartPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["chart",] }]
};
ChartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-chart',
        template: _raw_loader_chart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChartPage);



/***/ }),

/***/ 4897:
/*!***************************************************!*\
  !*** ./src/app/pages/users/chart/chart.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4832:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/chart/chart.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>chart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <apx-chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [title]=\"chartOptions.title\"\n  ></apx-chart>\n</ion-content>\n\n\n<!-- <ion-card>\n  <ion-card-header style=\"padding-bottom: 0\">\n    <ion-card-title class=\"\" style=\"font-size: 20px; color: #c51162\">Sub Agents total tickets</ion-card-title>\n    <ion-card-subtitle></ion-card-subtitle>\n  </ion-card-header>\n  \n  <div id=\"chart3\">\n    <apx-chart></apx-chart>\n  </div>\n</ion-card> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_chart_chart_module_ts.js.map