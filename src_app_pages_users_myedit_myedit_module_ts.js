(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_myedit_myedit_module_ts"],{

/***/ 4677:
/*!*************************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPageRoutingModule": () => (/* binding */ MyeditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _myedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myedit.page */ 3295);




const routes = [
    {
        path: '',
        component: _myedit_page__WEBPACK_IMPORTED_MODULE_0__.MyeditPage
    }
];
let MyeditPageRoutingModule = class MyeditPageRoutingModule {
};
MyeditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyeditPageRoutingModule);



/***/ }),

/***/ 7741:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPageModule": () => (/* binding */ MyeditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _myedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myedit-routing.module */ 4677);
/* harmony import */ var _myedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myedit.page */ 3295);







let MyeditPageModule = class MyeditPageModule {
};
MyeditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyeditPageRoutingModule
        ],
        declarations: [_myedit_page__WEBPACK_IMPORTED_MODULE_1__.MyeditPage]
    })
], MyeditPageModule);



/***/ }),

/***/ 3295:
/*!***************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyeditPage": () => (/* binding */ MyeditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_myedit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myedit.page.html */ 1902);
/* harmony import */ var _myedit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myedit.page.scss */ 4292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);






let MyeditPage = class MyeditPage {
    constructor(userService, tokenStorage) {
        this.userService = userService;
        this.tokenStorage = tokenStorage;
    }
    ngOnInit() {
        this.getUser();
        this.getTemplates();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
    }
    getTemplates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.userService.getEditedTemplate(this.user_id).subscribe(data => {
                this.templates = data['template'];
            });
        });
    }
};
MyeditPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService }
];
MyeditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-myedit',
        template: _raw_loader_myedit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myedit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyeditPage);



/***/ }),

/***/ 4292:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/myedit/myedit.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid {\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1rem;\n}\n\n.grid ion-card {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.grid ion-card ion-img {\n  opacity: 0.6;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15ZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDREQUEyRDtFQUMzRCxjQUFjO0FBQ2hCOztBQUxBO0VBTUksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBR3ZCOztBQVpBO0VBWU0sWUFBWTtFQUNaLFVBQVU7QUFJaEIiLCJmaWxlIjoibXllZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlke1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBncmlkLWdhcDogMXJlbTtcbiAgaW9uLWNhcmR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBpb24taW1ne1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 1902:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/myedit/myedit.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Edits</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"grid\">\n    <ion-card *ngFor=\"let template of templates\">\n      <ion-card-content >\n        <ion-img [src]=\"'data:image/png;base64,'+template.template_name\"></ion-img>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_myedit_myedit_module_ts.js.map