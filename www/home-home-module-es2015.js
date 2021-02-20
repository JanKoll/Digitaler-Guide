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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n\n\n      <ion-buttons slot=\"secondary\">\n        <ion-button (click)=\"pollData()\" *ngIf=\"offline == undefined\">\n          <svg style=\"height: 1.6rem; width: 1.6rem;\" id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style>.cls-1{fill:#eee;}</style></defs><path class=\"cls-1\" d=\"M80.58,30.55c0-.53.09-1.07.09-1.61A19.51,19.51,0,0,0,45.14,17.81,19.5,19.5,0,0,0,17,30.72a19.5,19.5,0,0,0,2.47,38.85H42v-8H19.51a11.5,11.5,0,0,1-1.46-22.91L23.6,38l1.24-5.45a11.51,11.51,0,0,1,16.57-7.62l6.25,3.31,4-5.81a11.51,11.51,0,0,1,21,6.56c0,.24,0,.56-.06,1l-.7,8.61,8.64,0a11.51,11.51,0,0,1-.06,23H58v8H80.49a19.51,19.51,0,0,0,.09-39Z\"/><path class=\"cls-1\" d=\"M60.84,75.73a4,4,0,0,0-5.65,0L54,76.92V52.57a4,4,0,1,0-8,0V76.92l-1.19-1.19a4,4,0,0,0-5.65,5.66l8,8a4.92,4.92,0,0,0,.61.5l.31.17.38.2c.13,0,.27.08.41.12a1.91,1.91,0,0,0,.34.1,3.84,3.84,0,0,0,1.56,0,1.91,1.91,0,0,0,.34-.1c.14,0,.28-.07.41-.12l.38-.2.31-.17a4.92,4.92,0,0,0,.61-.5l8-8A4,4,0,0,0,60.84,75.73Z\"/></svg>\n        </ion-button>\n\n\n        <ion-button (click)=\"deleteData()\" *ngIf=\"offline\">\n          <svg style=\"height: 1.6rem; width: 1.6rem;\" id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><style>.cls-1{fill:#eee;}</style></defs><path class=\"cls-1\" d=\"M55.19,75.73,54,76.92V54.31l-8,8V76.92l-1.19-1.19a4,4,0,0,0-5.65,5.66l8,8a4.92,4.92,0,0,0,.61.5l.31.17.38.2c.13,0,.27.08.41.12a1.91,1.91,0,0,0,.34.1,3.84,3.84,0,0,0,1.56,0,1.91,1.91,0,0,0,.34-.1c.14,0,.28-.07.41-.12l.38-.2.31-.17a4.92,4.92,0,0,0,.61-.5l8-8a4,4,0,0,0-5.65-5.66Z\"/><path class=\"cls-1\" d=\"M15.5,85.5a4,4,0,0,1-2.83-6.83l69-69a4,4,0,1,1,5.66,5.66l-69,69A4,4,0,0,1,15.5,85.5Z\"/><path class=\"cls-1\" d=\"M24.11,61.57h-4.6a11.5,11.5,0,0,1-1.46-22.91L23.6,38l1.24-5.45a11.51,11.51,0,0,1,16.57-7.62l6.25,3.31,4-5.81a11.54,11.54,0,0,1,9.45-4.95,11.42,11.42,0,0,1,5.63,1.48l5.78-5.78a19.47,19.47,0,0,0-27.42,4.68A19.5,19.5,0,0,0,17,30.72a19.49,19.49,0,0,0-.65,38.58Z\"/><path class=\"cls-1\" d=\"M80.58,30.55c0-.53.09-1.07.09-1.61s0-.82-.07-1.23l-8.51,8.51-.18,2.29,8.64,0a11.51,11.51,0,0,1-.06,23H58v8H80.49a19.51,19.51,0,0,0,.09-39Z\"/><polygon class=\"cls-1\" points=\"38.74 69.57 42 69.57 42 66.31 38.74 69.57\"/></svg>\n        </ion-button>\n      </ion-buttons>\n\n\n    <ion-title>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 345.17 55.07\"><defs><style>.logo-fill{fill:#eeeeee;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Hinweise\"><path class=\"logo-fill\" d=\"M27.68,40.22h.22L41.65.77h14V54.29H44.92V17.76l-.22,0L31.47,54.29H24.19L11,17.64l-.22,0V54.29H0V.77H14.08Z\"/><path class=\"logo-fill\" d=\"M98.53,42.75H81.18L77.57,54.29H66.36L84.41.77h11l18,53.52H102.17ZM83.82,34.33h12.1L90,15.48h-.22Z\"/><path class=\"logo-fill\" d=\"M141.9,19.74l10-19h12.5L148.55,27.31l16.8,27h-13L142,35,131.71,54.29H119.18l16.28-27L119.58.77H132Z\"/><path class=\"logo-fill\" d=\"M214.54,36.58l.08.22q.13,8.56-5.22,13.41t-14.82,4.86q-9.63,0-15.55-6.2t-5.91-16V22.24q0-9.78,5.77-16T194,0q9.78,0,15.29,4.78t5.37,13.45l-.07.22H204.18q0-5.14-2.48-7.66C200,9.11,197.49,8.27,194,8.27a8.66,8.66,0,0,0-7.52,3.88,17.14,17.14,0,0,0-2.7,10V32.86a16.66,16.66,0,0,0,2.85,10.08,9.27,9.27,0,0,0,7.92,3.89q4.81,0,7.19-2.51t2.37-7.74Z\"/><path class=\"logo-fill\" d=\"M238.21,54.29H227.48V.77h10.73Z\"/><path class=\"logo-fill\" d=\"M296.54,54.29H285.81L264.23,18.2l-.22,0V54.29H253.28V.77H264l21.58,36.06.22,0V.77h10.73Z\"/><path class=\"logo-fill\" d=\"M341.42,30.77H321.57V46.06h23.6v8.23H310.84V.77H345.1V9H321.57V22.5h19.85Z\"/></g></g></svg>\n    </ion-title> \n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\" class=\"ion-padding-horizontal\">\n    <div *ngIf=\"content\">\n      <div *ngFor=\"let item of content; index as i;\">\n        <div [ngSwitch]=\"item.type[0].name\" class=\"section-wrap\">\n          <!-- START Switch \"Locaiton\" -->\n          <ion-card *ngSwitchCase=\"'location'\" class=\"ion-no-padding\" routerLink=\"/{{ item.type[0].name }}/{{ item.id }}\">\n            <ion-card-header>\n              <ion-card-title color=light>{{ item.title }}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              {{ item.teasertext }}\n            </ion-card-content>\n          </ion-card>\n          <!-- END Switch \"Locaiton\" -->\n\n          <!-- START Switch \"webview\" -->\n          <ion-card *ngSwitchCase=\"'webview'\" class=\"ion-no-padding\" (click)=\"createInAppBrowser( item.link.value )\">\n            <ion-card-header>\n              <ion-card-title color=light>{{ item.title }}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              {{ item.teasertext }}\n            </ion-card-content>\n          </ion-card>\n          <!-- END Switch \"webview\" -->\n\n          <!-- START Switch defautl / article -->\n          <ion-card *ngSwitchDefault class=\"ion-no-padding\" routerLink=\"/article/{{ item.id }}\">\n            <ion-card-header>\n              <ion-card-title color=light>{{ item.title }}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n              {{ item.teasertext }}\n            </ion-card-content>\n          </ion-card>\n          <!-- END Switch \"webview\" -->\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");








let HomePage = class HomePage {
    constructor(http, iab, nativeStorage, alertController, loadingController) {
        this.http = http;
        this.iab = iab;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.nativeStorage.getItem('isOffline')
            .then(data => {
            this.offline = true;
            this.http.useBasicAuth('mail@example.de', 'Raute123');
            this.http.get('http://api.jankoll.de/rest/updated', {}, {})
                .then(data => {
                let storage = JSON.parse(data.data);
                this.nativeStorage.getItem('lastupdated')
                    .then(data => {
                    if (data.date != storage.date) {
                        this.updateData();
                    }
                    else {
                        this.localGET();
                    }
                }, error => {
                    console.log(error);
                    this.localGET();
                });
            })
                .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                this.localGET();
            });
        }, error => this.restGET());
    }
    localGET() {
        this.nativeStorage.getItem('database')
            .then(data => {
            this.content = data.main;
        }, error => console.log(error));
    }
    // Get Rest Data
    restGET() {
        // REST Authentication
        this.http.useBasicAuth('mail@example.de', 'Raute123');
        this.http.get('http://api.jankoll.de/rest/main', {}, {})
            .then(data => {
            // console.log(data.status);
            this.content = JSON.parse(data.data); // data received by server
            // console.log(data.headers);
        })
            .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    // Open BrowserModule
    createInAppBrowser(url) {
        const browser = this.iab.create(url, '_blank', 'toolbarposition=top,hideurlbar=yes');
    }
    // Download Data
    pollData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Auf Gerät Speichern',
                message: 'Möchtest du alle Inhalte auf deinem Smartphone Speichern?',
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.nativeStorage.setItem('isOffline', { offline: true })
                                .then((data) => this.downloadData(), error => console.error('Error storing item', error));
                            // window.location.reload();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading(says, duration) {
        this.loadingController.create({
            message: says,
            duration: duration
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => {
                window.location.reload();
            });
        });
    }
    downloadData() {
        this.loadingController.create({
            message: 'Wird heruntergeladen...'
        }).then((res) => {
            res.present();
        });
        // this.presentLoading('Wird heruntergeladen...', 90000);
        // REST Authentication
        this.http.useBasicAuth('mail@example.de', 'Raute123');
        this.http.get('http://api.jankoll.de/rest/updated', {}, {})
            .then(data => {
            this.nativeStorage.setItem('lastupdated', JSON.parse(data.data))
                .then((data) => {
                console.log(data);
            }, error => console.error('Error storing item', error));
        })
            .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        // save main
        this.http.get('http://api.jankoll.de/rest/download', {}, {})
            .then(data => {
            this.nativeStorage.setItem('database', JSON.parse(data.data))
                .then((data) => {
                // console.log(data);
                window.location.reload();
            }, error => console.error('Error storing item', error));
        })
            .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    // Offload Data
    deleteData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Gespeicherte Inhalte Löschen',
                message: 'Möchtest du alle gespeicherten Inhalte Löschen?',
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Löschen',
                        handler: () => {
                            this.nativeStorage.clear()
                                .then(data => {
                                this.presentLoading('Daten werden gelöscht...', 3000);
                                console.log(data);
                            }, error => console.error(error));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Es sind neue Inhalte verfügbar',
                message: 'Möchtest du die Inhalte aktualisieren?',
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        handler: () => {
                            this.localGET();
                        }
                    }, {
                        text: 'Aktualisieren',
                        handler: () => {
                            this.downloadData();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
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