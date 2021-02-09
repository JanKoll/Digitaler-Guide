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







let ArticlePage = class ArticlePage {
    constructor(route, sanitizer, navCtrl) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.articleId = params['articleId'];
        });
        fetch('./assets/data/guide.json').then(res => res.json())
            .then(json => {
            let data = json;
            this.result = data.find(data => data.name === this.articleId);
        });
    }
    updateVideoUrl(id) {
        // Appending an ID to a YouTube URL is safe.
        // Always make sure to construct SafeValue objects as
        // close as possible to the input data, so
        // that it's easier to check if the value is safe.
        let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }
};
ArticlePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"guide\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ articleId }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"article\" *ngIf=\"result\">\n\n\n    <!-- intro section -->\n\n    <div class=\"icon-header\">\n      <div class=\"icon\">\n        <img src=\"../assets/icon/{{ result.icon }}\" alt=\"{{ result.name }} Icon\">\n      </div>\n\n      <p>Mehr erleben im</p>\n      <h2>{{ result.name }}</h2>\n    </div>\n\n    <ion-text color=\"light\">\n      <p>{{ result.intro }}</p>\n    </ion-text>\n\n\n    <!-- content section -->\n\n    <div *ngFor=\"let item of result.body; index as i;\">\n\n      <div [ngSwitch]=\"item.type\" class=\"section-wrap\">\n\n        <!-- Text -->\n        <div *ngSwitchCase=\"'text'\">\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n          <p>{{ item.content }}</p>\n        </div>\n\n        <!-- img -->\n        <div *ngSwitchCase=\"'img'\">\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n          <ion-img src=\"../assets/data/media/{{ result.name }}/{{ item.content }}\" alt=\"{{ result.name }} Artikel Bild\"></ion-img>\n        </div>\n\n        <!-- slider -->\n        <div *ngSwitchCase=\"'img-slider'\">\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n         <!-- <p>{{ item.content }}</p> -->\n\n         <ion-slides pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide *ngFor=\"let img of item.content\">\n              <ion-img src=\"../assets/data/media/{{ result.name }}/{{ img }}\" alt=\"{{ result.name }} Artikel Bild\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <!-- video -->\n        <div *ngSwitchCase=\"'video'\">\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n          <iframe [src]=\"updateVideoUrl(item.content)\" allowfullscreen>Ups, da ist etwas schief gelaufen!</iframe>\n        </div>\n\n        <!-- audio -->\n        <div *ngSwitchCase=\"'audio'\">\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n\n          <audio controls>\n            <source src=\"../assets/data/media/{{ result.name }}/{{ item.content }}\" srcset=\"../assets/data/media/Hennhouse/hennhouse.png\" type=\"audio/mpeg\">\n            Ups, da ist etwas schief gelaufen!\n          </audio>\n        </div>\n\n        <!-- default -->\n        <div *ngSwitchDefault>\n          <p>Error!</p>\n          <h4 *ngIf=\"item.hedding\">{{ item.hedding }}</h4>\n          <p>{{ item.content }}</p>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- <div [ngSwitch]=\"switch_expression\">\n       <some-element *ngSwitchCase=\"match_expression_1\">...</some-element>\n\n       <some-element *ngSwitchDefault>...</some-element>\n    </div> -->\n\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=article-article-module-es2015.js.map