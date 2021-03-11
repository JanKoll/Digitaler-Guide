(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"], {
    /***/
    "7Hwp":
    /*!*****************************************!*\
      !*** ./src/app/article/article.page.ts ***!
      \*****************************************/

    /*! exports provided: ArticlePage */

    /***/
    function Hwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePage", function () {
        return ArticlePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./article.page.html */
      "vfyL");
      /* harmony import */


      var _article_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./article.page.scss */
      "M5xG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "M2ZX");

      var ArticlePage = /*#__PURE__*/function () {
        function ArticlePage(activatedRoute, sanitizer, navCtrl, http, nativeStorage) {
          var _this = this;

          _classCallCheck(this, ArticlePage);

          this.activatedRoute = activatedRoute;
          this.sanitizer = sanitizer;
          this.navCtrl = navCtrl;
          this.http = http;
          this.nativeStorage = nativeStorage; // Check / Get Current Language

          this.nativeStorage.getItem('language').then(function (data) {
            _this.lang = data;

            if (data == 'de') {
              _this.learn = 'Mehr erleben im';
            } else {
              _this.learn = 'Experience more at';
            }
          }, function (error) {
            return console.log(error);
          }); // Check for Offline Mode

          this.nativeStorage.getItem('isOffline').then(function (data) {
            _this.localGET();
          }, function (error) {
            return _this.restGET();
          });
        } // Get Local Data


        _createClass(ArticlePage, [{
          key: "localGET",
          value: function localGET() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              var path = params['articleId'].split("/");

              _this2.nativeStorage.getItem('database').then(function (data) {
                // If page has Children (Is Locatoin)
                if (path.length > 1) {
                  data.main.forEach(function (element) {
                    if (element.id == path[0]) {
                      element.children.forEach(function (child) {
                        if (child.id == params.articleId) {
                          _this2.content = child;
                          _this2.template = 'article';
                          _this2.title = child.title;
                        }
                      });
                    }
                  });
                } else {
                  data.meta.forEach(function (element) {
                    if (element.id == params.articleId) {
                      _this2.content = element;
                      _this2.template = 'default';

                      if (!element.children) {
                        _this2.title = element.title;
                      } else {
                        var title = "Geschichte";

                        if (_this2.lang == 'en') {
                          title = "Story";
                        }

                        _this2.title = title;
                      }
                    }
                  });
                }
              }, function (error) {
                var errTitle = "Fehler";
                var errText = "Fehler: Ups! Da ist etwas schiefgelaufen. Versuche bitte die Inhalte noch einmal herunterzuladen.";

                if (_this2.lang == 'en') {
                  errTitle = "Error";
                  errText = "Ups! Something went wrong. Please try to download the content again.";
                }

                _this2.content = {
                  "id": "error",
                  "title": errTitle,
                  "template": "default",
                  "content": [{
                    "content": {
                      "level": "h2",
                      "text": errText
                    }
                  }]
                };
                _this2.title = errTitle;
                console.log(error);
              });
            });
          } // Get Rest Data

        }, {
          key: "restGET",
          value: function restGET() {
            var _this3 = this;

            this.activatedRoute.params.subscribe(function (params) {
              var path = params['articleId'].split("/");
              var url = undefined;

              if (path.length > 1) {
                url = "https://api.jankoll.de/rest/".concat(_this3.lang, "/article/").concat(path[0], "/").concat(path[path.length - 1]);
                _this3.template = 'article';
              } else {
                url = "https://api.jankoll.de/rest/".concat(_this3.lang, "/article/").concat(path[path.length - 1]);
                _this3.template = 'default';
              } // HTTP Request


              _this3.http.useBasicAuth('mail@example.de', 'Raute123');

              _this3.http.get(url, {}, {}).then(function (data) {
                _this3.content = JSON.parse(data.data); // data received by server

                if (!_this3.content.children) {
                  _this3.title = _this3.content.title;
                } else {
                  var title = "Geschichte";

                  if (_this3.lang == 'en') {
                    title = "Story";
                  }

                  _this3.title = title;
                }
              })["catch"](function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string

                console.log(error.headers);
              });
            });
          }
        }, {
          key: "updateVideoUrl",
          value: function updateVideoUrl(id) {
            // Appending an ID to a YouTube URL is safe.
            // Always make sure to construct SafeValue objects as
            // close as possible to the input data, so
            // that it's easier to check if the value is safe.
            var dangerousVideoUrl = 'https://www.youtube.com/embed/' + id.split('watch?v=')[id.split('watch?v=').length - 1] + '?rel=0&showinfo=0';
            return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
          }
        }, {
          key: "saveURL",
          value: function saveURL(type, id) {
            var saveurl = 'data:' + type + ';base64,' + id;
            return this.sanitizer.bypassSecurityTrustResourceUrl(saveurl);
          }
        }]);

        return ArticlePage;
      }();

      ArticlePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
        }, {
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeStorage"]
        }];
      };

      ArticlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-article',
        template: _raw_loader_article_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_article_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ArticlePage);
      /***/
    },

    /***/
    "AT9Q":
    /*!***************************************************!*\
      !*** ./src/app/article/article-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ArticlePageRoutingModule */

    /***/
    function AT9Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePageRoutingModule", function () {
        return ArticlePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _article_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./article.page */
      "7Hwp");

      var routes = [{
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_3__["ArticlePage"]
      }];

      var ArticlePageRoutingModule = function ArticlePageRoutingModule() {
        _classCallCheck(this, ArticlePageRoutingModule);
      };

      ArticlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ArticlePageRoutingModule);
      /***/
    },

    /***/
    "M5xG":
    /*!*******************************************!*\
      !*** ./src/app/article/article.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function M5xG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rZHr":
    /*!*******************************************!*\
      !*** ./src/app/article/article.module.ts ***!
      \*******************************************/

    /*! exports provided: ArticlePageModule */

    /***/
    function rZHr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function () {
        return ArticlePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _article_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./article-routing.module */
      "AT9Q");
      /* harmony import */


      var _article_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./article.page */
      "7Hwp");

      var ArticlePageModule = function ArticlePageModule() {
        _classCallCheck(this, ArticlePageModule);
      };

      ArticlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _article_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlePageRoutingModule"]],
        declarations: [_article_page__WEBPACK_IMPORTED_MODULE_6__["ArticlePage"]]
      })], ArticlePageModule);
      /***/
    },

    /***/
    "vfyL":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function vfyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"location\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ title }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"article\" *ngIf=\"content\">\n\n\n    <!-- intro section -->\n\n    <div class=\"icon-header\" *ngIf=\"template == 'article'\">\n      <div class=\"icon\">\n        <img [src]=\"saveURL('image/png', content.icon)\" alt=\"{{ content.title }} Icon\">\n      </div>\n\n      <p>{{ learn }}</p>\n      <h2>{{ content.title }}</h2>\n    </div>\n\n    <ion-text color=\"light\" *ngIf=\"template == 'article'\">\n      <p>{{ content.teasertext }}</p>\n\n      <div *ngIf=\"content.hastime\" [innerHTML]=\"content.time\"></div>\n    </ion-text>\n\n\n    <!-- content section -->\n\n    <div *ngFor=\"let item of content.content; index as i;\">\n      <div [ngSwitch]=\"item.type\" class=\"section-wrap\">\n\n        <!-- Heading -->\n        <div *ngSwitchCase=\"'heading'\">\n          <div [ngSwitch]=\"item.content.level\">\n            <h1 *ngSwitchCase=\"'h1'\">{{ item.content.text }}</h1>\n            <h2 *ngSwitchCase=\"'h2'\">{{ item.content.text }}</h2>\n            <h3 *ngSwitchCase=\"'h3'\">{{ item.content.text }}</h3>\n            <h4 *ngSwitchCase=\"'h4'\">{{ item.content.text }}</h4>\n            <h5 *ngSwitchCase=\"'h5'\">{{ item.content.text }}</h5>\n            <h6 *ngSwitchCase=\"'h6'\">{{ item.content.text }}</h6>\n          </div>\n        </div>\n\n        <!-- Text -->\n        <div *ngSwitchCase=\"'text'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- List -->\n        <div *ngSwitchCase=\"'list'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- img -->\n        <div *ngSwitchCase=\"'img'\">\n          <ion-img src=\"data:image/jpeg;base64,{{ item.content.image }}\" alt=\"{{ item.content.alt }}\"></ion-img>\n        </div>\n\n        <!-- slider -->\n        <div *ngSwitchCase=\"'img-slider'\">\n         <ion-slides pager=\"true\">\n            <ion-slide *ngFor=\"let img of item.content.image\">\n              <ion-img src=\"data:image/jpeg;base64,{{ img }}\" alt=\"{{ content.title }} Artikel Bild\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <!-- video -->\n        <div *ngSwitchCase=\"'youtube'\">\n          <iframe [src]=\"updateVideoUrl(item.content.url)\" allowfullscreen>Ups, da ist etwas schief gelaufen!</iframe>\n        </div>\n\n        <!-- audio -->\n        <div *ngSwitchCase=\"'audio'\">\n          <audio controls>\n            <source [src]=\"saveURL('audio/wav', item.content.audio)\">\n\n            Ups, da ist etwas schief gelaufen!\n          </audio>\n        </div>\n\n        <!-- quote -->\n        <div *ngSwitchCase=\"'quotes'\">\n           <ion-slides pager=\"true\">\n              <ion-slide *ngFor=\"let quote of item.content\">\n                <div class=\"quote\">\n                  <p>\"{{ quote.content.text }}\"</p>\n                  <p class=\"cite\">- {{ quote.content.citation }} </p>\n                </div>\n              </ion-slide>\n            </ion-slides>\n        </div>\n\n        <!-- default -->\n        <div *ngSwitchDefault>\n          <p>Error!</p>\n          <div [innerHTML]=\"item.content\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=article-article-module-es5.js.map