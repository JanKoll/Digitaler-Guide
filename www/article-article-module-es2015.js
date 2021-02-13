(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"],{

/***/ "7Hwp":
/*!*****************************************!*\
  !*** ./src/app/article/article.page.ts ***!
  \*****************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePage", function() { return ArticlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./article.page.html */ "vfyL");
/* harmony import */ var _article_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article.page.scss */ "M5xG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");








let ArticlePage = class ArticlePage {
    constructor(route, sanitizer, navCtrl, http) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.http = http;
        this.route.params.subscribe(params => {
            let path = params['articleId'].split("/");
            let url = undefined;
            if (path.length > 1) {
                url = `http://api.jankoll.de/rest/pages/${path[0]}+${path[path.length - 1]}`;
            }
            else {
                url = `http://api.jankoll.de/rest/pages/${path[path.length - 1]}`;
            }
            // HTTP Request
            this.http.useBasicAuth('mail@example.de', 'Raute123');
            this.http.get(url, {}, {})
                .then(data => {
                this.content = JSON.parse(data.data).data.content; // data received by server
                this.title = this.content.title;
                this.template = JSON.parse(data.data).data.template;
            })
                .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        });
    }
    updateVideoUrl(id) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data, so
        // that it's easier to check if the value is safe.
        let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id.split('watch?v=')[id.split('watch?v=').length - 1] + '?rel=0&showinfo=0';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }
};
ArticlePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] }
];
ArticlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-article',
        template: _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_article_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArticlePage);



/***/ }),

/***/ "AT9Q":
/*!***************************************************!*\
  !*** ./src/app/article/article-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArticlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageRoutingModule", function() { return ArticlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.page */ "7Hwp");




const routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_3__["ArticlePage"]
    }
];
let ArticlePageRoutingModule = class ArticlePageRoutingModule {
};
ArticlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArticlePageRoutingModule);



/***/ }),

/***/ "M5xG":
/*!*******************************************!*\
  !*** ./src/app/article/article.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rZHr":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function() { return ArticlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _article_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-routing.module */ "AT9Q");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.page */ "7Hwp");







let ArticlePageModule = class ArticlePageModule {
};
ArticlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _article_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlePageRoutingModule"]
        ],
        declarations: [_article_page__WEBPACK_IMPORTED_MODULE_6__["ArticlePage"]]
    })
], ArticlePageModule);



/***/ }),

/***/ "vfyL":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"location\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ title }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"article\" *ngIf=\"content\">\n\n    <!-- intro section -->\n\n    <div class=\"icon-header\" *ngIf=\"template !== 'default'\">\n      <div class=\"icon\">\n        <img src=\"{{ content.icon[0].icon.url }}\" alt=\"{{ content.title }} Icon\">\n      </div>\n\n      <p>Mehr erleben im</p>\n      <h2>{{ content.title }}</h2>\n    </div>\n\n    <ion-text color=\"light\" *ngIf=\"template !== 'default'\">\n      <p>{{ content.teasertext }}</p>\n    </ion-text>\n\n\n    <!-- content section -->\n\n    <div *ngFor=\"let item of content.content; index as i;\">\n      <div [ngSwitch]=\"item.type\" class=\"section-wrap\">\n\n        <!-- Heading -->\n        <div *ngSwitchCase=\"'heading'\">\n          <div [ngSwitch]=\"item.content.level\">\n            <h1 *ngSwitchCase=\"'h1'\">{{ item.content.text }}</h1>\n            <h2 *ngSwitchCase=\"'h2'\">{{ item.content.text }}</h2>\n            <h3 *ngSwitchCase=\"'h3'\">{{ item.content.text }}</h3>\n            <h4 *ngSwitchCase=\"'h4'\">{{ item.content.text }}</h4>\n            <h5 *ngSwitchCase=\"'h5'\">{{ item.content.text }}</h5>\n            <h6 *ngSwitchCase=\"'h6'\">{{ item.content.text }}</h6>\n          </div>\n        </div>\n\n        <!-- Text -->\n        <div *ngSwitchCase=\"'text'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- List -->\n        <div *ngSwitchCase=\"'list'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- img -->\n        <div *ngSwitchCase=\"'img'\">\n          <ion-img src=\"{{ item.content.image[0].icon.url }}\" alt=\"{{ item.content.image[0].alt }}\"></ion-img>\n        </div>\n\n        <!-- slider -->\n        <div *ngSwitchCase=\"'img-slider'\">\n         <ion-slides pager=\"true\">\n            <ion-slide *ngFor=\"let img of item.content.images\">\n              <ion-img src=\"{{ img.icon.url }}\" alt=\"{{ content.title }} Artikel Bild\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <!-- video -->\n        <div *ngSwitchCase=\"'youtube'\">\n          <iframe [src]=\"updateVideoUrl(item.content.url)\" allowfullscreen>Ups, da ist etwas schief gelaufen!</iframe>\n        </div>\n\n        <!-- audio -->\n        <div *ngSwitchCase=\"'audio'\">\n          <audio controls preload autobuffer>\n            {{ item.content.audio[0].url }}\n            <source src=\"{{ item.content.audio[0].url }}\">\n            Ups, da ist etwas schief gelaufen!\n          </audio>\n        </div>\n\n        <!-- default -->\n        <div *ngSwitchDefault>\n          <p>Error!</p>\n          <p>{{ item.content }}</p>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=article-article-module-es2015.js.map