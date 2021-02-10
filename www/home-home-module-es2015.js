(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 345.17 55.07\"><defs><style>.logo-fill{fill:#eeeeee;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Hinweise\"><path class=\"logo-fill\" d=\"M27.68,40.22h.22L41.65.77h14V54.29H44.92V17.76l-.22,0L31.47,54.29H24.19L11,17.64l-.22,0V54.29H0V.77H14.08Z\"/><path class=\"logo-fill\" d=\"M98.53,42.75H81.18L77.57,54.29H66.36L84.41.77h11l18,53.52H102.17ZM83.82,34.33h12.1L90,15.48h-.22Z\"/><path class=\"logo-fill\" d=\"M141.9,19.74l10-19h12.5L148.55,27.31l16.8,27h-13L142,35,131.71,54.29H119.18l16.28-27L119.58.77H132Z\"/><path class=\"logo-fill\" d=\"M214.54,36.58l.08.22q.13,8.56-5.22,13.41t-14.82,4.86q-9.63,0-15.55-6.2t-5.91-16V22.24q0-9.78,5.77-16T194,0q9.78,0,15.29,4.78t5.37,13.45l-.07.22H204.18q0-5.14-2.48-7.66C200,9.11,197.49,8.27,194,8.27a8.66,8.66,0,0,0-7.52,3.88,17.14,17.14,0,0,0-2.7,10V32.86a16.66,16.66,0,0,0,2.85,10.08,9.27,9.27,0,0,0,7.92,3.89q4.81,0,7.19-2.51t2.37-7.74Z\"/><path class=\"logo-fill\" d=\"M238.21,54.29H227.48V.77h10.73Z\"/><path class=\"logo-fill\" d=\"M296.54,54.29H285.81L264.23,18.2l-.22,0V54.29H253.28V.77H264l21.58,36.06.22,0V.77h10.73Z\"/><path class=\"logo-fill\" d=\"M341.42,30.77H321.57V46.06h23.6v8.23H310.84V.77H345.1V9H321.57V22.5h19.85Z\"/></g></g></svg>\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\" class=\"ion-padding-horizontal\">\n  \n\n    <div *ngIf=\"content\">\n      <div *ngFor=\"let item of content; index as i;\">\n        <ion-card class=\"ion-no-padding\" routerLink=\"/{{ item.type[0].name }}\">\n          <ion-card-header>\n            <ion-card-title color=light>{{ item.title }}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            {{ item.teasertext }}\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n\n    <!-- <ion-card class=\"ion-no-padding\" routerLink=\"/location\">\n      <ion-card-header>\n        <ion-card-title color=light>Digitaler Location</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        Hier kannst du dich selbst <br>\n        über das Institutsgelände <br>\n        und die Arbeit informieren.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-no-padding\" disabled=\"true\">\n      <ion-card-header>\n        <ion-card-title color=light>360° Führung</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        Mitten drin: auch von <br>\n        Zuhause aus das Insititut <br>\n        kennelernen.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-no-padding\" disabled=\"true\">\n      <ion-card-header>\n        <ion-card-title color=light>Quiz</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        Du kennst dich schon in der <br>\n        Welt der Verhaltensbiologie <br>\n        aus? Teste dein Wissen!\n      </ion-card-content>\n    </ion-card> -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0FBUEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gbGVmdDogMDtcbiAgLy8gcmlnaHQ6IDA7XG4gIC8vIHRvcDogNTAlO1xuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");





// import { HttpClient } from '@angular/common/http';
let HomePage = class HomePage {
    // constructor() {}
    constructor(http) {
        this.http = http;
        this.http.useBasicAuth('mail@example.de', 'Raute123');
        this.http.get('http://localhost:8000/rest/main', {}, {})
            .then(data => {
            // console.log(data.status);
            this.content = JSON.parse(data.data); // data received by server
            // console.log(data.headers);
            console.log(this.content);
            console.log("test");
        })
            .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map