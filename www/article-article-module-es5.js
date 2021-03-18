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
        function ArticlePage(activatedRoute, sanitizer, platform, alertController, router, navCtrl, http, loadingController, nativeStorage) {
          var _this = this;

          _classCallCheck(this, ArticlePage);

          this.activatedRoute = activatedRoute;
          this.sanitizer = sanitizer;
          this.platform = platform;
          this.alertController = alertController;
          this.router = router;
          this.navCtrl = navCtrl;
          this.http = http;
          this.loadingController = loadingController;
          this.nativeStorage = nativeStorage; // Check / Get Current Language

          this.nativeStorage.getItem('language').then(function (data) {
            _this.lang = data;

            if (data == 'de') {
              _this.learn = 'Mehr erleben im';
            } else {
              _this.learn = 'Experience more at';
            } // Check for Offline Mode


            _this.nativeStorage.getItem('isOffline').then(function (res) {
              _this.localGET();
            }, function (error) {
              return _this.restGET();
            });
          }, function (error) {
            return console.log(error);
          }); // Android go Back

          this.platform.backButton.subscribeWithPriority(10, function () {
            _this.goBack();
          }); // check if youtube is allowed

          this.nativeStorage.getItem('youtube').then(function (data) {
            _this.youtube = data;
            var msg = "Um ein YouTube Video direkt in der App zu schauen, musst du es erst erlauben.";
            var btn = "Erlauben";

            if (_this.lang == 'en') {
              msg = "To watch the YouTube video directly on your app, you have to allow it first.";
              btn = "Allow";
            }

            if (data == 'true') {
              _this.youtube = {
                'allowed': true
              };
            } else {
              _this.youtube = {
                'allowed': false,
                'msg': msg,
                'btn': btn
              };
            }
          }, function (error) {
            console.log(error);
          });
        }

        _createClass(ArticlePage, [{
          key: "goBack",
          value: function goBack() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              var path = params['articleId'].split("/");

              if (path.length > 1 || _this2.content.children) {
                _this2.router.navigate(['location', path[0]]);
              } else {
                _this2.router.navigate(['..']);
              }
            });
          } // Get Local Data

        }, {
          key: "localGET",
          value: function localGET() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'spinner'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      this.activatedRoute.params.subscribe(function (params) {
                        console.log(params);
                        console.log("Hallo?!");
                        var path = params['articleId'].split("/");

                        _this3.nativeStorage.getItem('database').then(function (data) {
                          // If page has Children (Is Locatoin)
                          if (path.length > 1) {
                            data.main.forEach(function (element) {
                              if (element.id == path[0]) {
                                element.children.forEach(function (child) {
                                  if (child.id == params.articleId) {
                                    _this3.content = child;
                                    _this3.template = 'article';
                                    _this3.title = child.title;
                                  }
                                });
                              }
                            });
                          } else {
                            data.meta.forEach(function (element) {
                              if (element.id == params.articleId) {
                                _this3.content = element;
                                _this3.template = 'default';

                                if (!element.children) {
                                  _this3.title = element.title;
                                } else {
                                  var title = "Geschichte";

                                  if (_this3.lang == 'en') {
                                    title = "Story";
                                  }

                                  _this3.title = title;
                                }
                              }
                            });
                            data.main.forEach(function (element) {
                              if (element.id == params.articleId) {
                                _this3.content = element;
                                _this3.template = 'default';

                                if (!element.children) {
                                  _this3.title = element.title;
                                } else {
                                  var title = "Geschichte";

                                  if (_this3.lang == 'en') {
                                    title = "Story";
                                  }

                                  _this3.title = title;
                                }
                              }
                            });
                          }

                          loading.dismiss();
                        }, function (error) {
                          var errTitle = "Fehler";
                          var errText = "Fehler: Ups! Da ist etwas schiefgelaufen. Versuche bitte die Inhalte noch einmal herunterzuladen.";

                          if (_this3.lang == 'en') {
                            errTitle = "Error";
                            errText = "Ups! Something went wrong. Please try to download the content again.";
                          }

                          _this3.content = {
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
                          _this3.title = errTitle;
                          loading.dismiss();
                          console.log(error);
                        });
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Get Rest Data

        }, {
          key: "restGET",
          value: function restGET() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'spinner'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.activatedRoute.params.subscribe(function (params) {
                        var path = params['articleId'].split("/");
                        var url = undefined;

                        if (path.length > 1) {
                          url = "https://api.jankoll.de/rest/".concat(_this4.lang, "/article/").concat(path[0], "/").concat(path[path.length - 1]);
                          _this4.template = 'article';
                        } else {
                          url = "https://api.jankoll.de/rest/".concat(_this4.lang, "/article/").concat(path[path.length - 1]);
                          _this4.template = 'default';
                        } // HTTP Request


                        _this4.http.useBasicAuth('mail@example.de', 'Raute123');

                        _this4.http.get(url, {}, {}).then(function (data) {
                          _this4.content = JSON.parse(data.data); // data received by server

                          if (!_this4.content.children) {
                            _this4.title = _this4.content.title;
                          } else {
                            var title = "Geschichte";

                            if (_this4.lang == 'en') {
                              title = "Story";
                            }

                            _this4.title = title;
                          }

                          loading.dismiss();
                        })["catch"](function (error) {
                          console.log(error.status);
                          console.log(error.error); // error message as string

                          console.log(error.headers);
                          loading.dismiss();
                        });
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Allow YouTube

        }, {
          key: "allowYoutube",
          value: function allowYoutube() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var title, msg, cancel, allow, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      title = 'YouTube erlauben';
                      msg = 'Möchtest du das YouTube Video in der App schauen? Dabei werden möglicherweise Geräteinformationen an YouTube übermittelt.';
                      cancel = 'Abbrechen';
                      allow = 'Erlauben';

                      if (this.lang == 'en') {
                        title = 'Allow YouTube';
                        msg = 'Do you want to watch the YouTube video in the app? This might send device information to YouTube.';
                        cancel = 'Cancel';
                        allow = 'Allow';
                      }

                      _context3.next = 7;
                      return this.alertController.create({
                        header: title,
                        message: msg,
                        buttons: [{
                          text: cancel,
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: allow,
                          handler: function handler() {
                            // this.nativeStorage.clear()
                            //   .then(
                            //     data => {
                            //       console.log(data);
                            //     },
                            //     error => console.error(error)
                            //   );
                            _this5.nativeStorage.setItem('youtube', 'true').then(function (data) {
                              console.log(data);
                              window.location.reload();
                            }, function (error) {
                              return console.error('Error storing item', error);
                            });
                          }
                        }]
                      });

                    case 7:
                      alert = _context3.sent;
                      _context3.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
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


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"..\" (click)=\"goBack()\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ title }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"article\" *ngIf=\"content\">\n\n\n    <!-- intro section -->\n\n    <div class=\"icon-header\" *ngIf=\"template == 'article'\">\n      <div class=\"icon\">\n        <img [src]=\"saveURL('image/png', content.icon)\" alt=\"{{ content.title }} Icon\">\n      </div>\n\n      <p>{{ learn }}</p>\n      <h2>{{ content.title }}</h2>\n    </div>\n\n    <ion-text color=\"light\" *ngIf=\"template == 'article'\">\n      <p>{{ content.teasertext }}</p>\n\n      <div *ngIf=\"content.hastime\" [innerHTML]=\"content.time\"></div>\n    </ion-text>\n\n\n    <!-- content section -->\n\n    <div *ngFor=\"let item of content.content; index as i;\">\n      <div [ngSwitch]=\"item.type\" class=\"section-wrap\">\n\n        <!-- Heading -->\n        <div *ngSwitchCase=\"'heading'\">\n          <div [ngSwitch]=\"item.content.level\">\n            <h1 *ngSwitchCase=\"'h1'\">{{ item.content.text }}</h1>\n            <h2 *ngSwitchCase=\"'h2'\">{{ item.content.text }}</h2>\n            <h3 *ngSwitchCase=\"'h3'\">{{ item.content.text }}</h3>\n            <h4 *ngSwitchCase=\"'h4'\">{{ item.content.text }}</h4>\n            <h5 *ngSwitchCase=\"'h5'\">{{ item.content.text }}</h5>\n            <h6 *ngSwitchCase=\"'h6'\">{{ item.content.text }}</h6>\n          </div>\n        </div>\n\n        <!-- Text -->\n        <div *ngSwitchCase=\"'text'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- List -->\n        <div *ngSwitchCase=\"'list'\" [innerHTML]=\"item.content.text\"></div>\n\n        <!-- img -->\n        <div *ngSwitchCase=\"'img'\">\n          <ion-img src=\"data:image/jpeg;base64,{{ item.content.image }}\" alt=\"{{ item.content.alt }}\"></ion-img>\n        </div>\n\n        <!-- slider -->\n        <div *ngSwitchCase=\"'img-slider'\">\n         <ion-slides pager=\"true\">\n            <ion-slide *ngFor=\"let img of item.content.image\">\n              <ion-img src=\"data:image/jpeg;base64,{{ img }}\" alt=\"{{ content.title }} Artikel Bild\"></ion-img>\n            </ion-slide>\n          </ion-slides>\n        </div>\n\n        <!-- video -->\n        <div *ngSwitchCase=\"'youtube'\">\n          <div *ngIf=\"youtube.allowed; else elseBlock\">\n            <iframe [src]=\"updateVideoUrl(item.content.url)\" allowfullscreen>Ups, da ist etwas schief gelaufen!</iframe>\n          </div>\n          <ng-template #elseBlock>\n            <p>{{ youtube.msg }}</p>\n            <p><a href=\"{{ item.content.url }}\" style=\"color: #ffffff\">YouTube Link</a></p>\n\n            <ion-button color=\"light\" expand=\"full\" (click)=\"allowYoutube()\">{{ youtube.btn }}</ion-button>\n          </ng-template>\n\n          <!-- <iframe [src]=\"updateVideoUrl(item.content.url)\" allowfullscreen>Ups, da ist etwas schief gelaufen!</iframe> -->\n        </div>\n\n        <!-- audio -->\n        <div *ngSwitchCase=\"'audio'\">\n          <audio controls>\n            <source [src]=\"saveURL('audio/wav', item.content.audio)\">\n\n            Ups, da ist etwas schief gelaufen!\n          </audio>\n        </div>\n\n        <!-- quote -->\n        <div *ngSwitchCase=\"'quotes'\">\n           <ion-slides pager=\"true\">\n              <ion-slide *ngFor=\"let quote of item.content\">\n                <div class=\"quote\">\n                  <p>\"{{ quote.content.text }}\"</p>\n                  <p class=\"cite\">- {{ quote.content.citation }} </p>\n                </div>\n              </ion-slide>\n            </ion-slides>\n        </div>\n\n        <!-- default -->\n        <div *ngSwitchDefault>\n          <p>Error!</p>\n          <div [innerHTML]=\"item.content\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=article-article-module-es5.js.map