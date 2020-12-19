(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTestTestPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Test\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <p>Hallo Welt! Ich bin eine Unterseite!</p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/test/test-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/test/test-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TestPageRoutingModule */

    /***/
    function srcAppTestTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function () {
        return TestPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test.page */
      "./src/app/test/test.page.ts");

      var routes = [{
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
      }];

      var TestPageRoutingModule = function TestPageRoutingModule() {
        _classCallCheck(this, TestPageRoutingModule);
      };

      TestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TestPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/test/test.module.ts":
    /*!*************************************!*\
      !*** ./src/app/test/test.module.ts ***!
      \*************************************/

    /*! exports provided: TestPageModule */

    /***/
    function srcAppTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
        return TestPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test-routing.module */
      "./src/app/test/test-routing.module.ts");
      /* harmony import */


      var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test.page */
      "./src/app/test/test.page.ts");

      var TestPageModule = function TestPageModule() {
        _classCallCheck(this, TestPageModule);
      };

      TestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"]],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
      })], TestPageModule);
      /***/
    },

    /***/
    "./src/app/test/test.page.scss":
    /*!*************************************!*\
      !*** ./src/app/test/test.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTestTestPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/test/test.page.ts":
    /*!***********************************!*\
      !*** ./src/app/test/test.page.ts ***!
      \***********************************/

    /*! exports provided: TestPage */

    /***/
    function srcAppTestTestPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestPage", function () {
        return TestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TestPage = /*#__PURE__*/function () {
        function TestPage() {
          _classCallCheck(this, TestPage);
        }

        _createClass(TestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestPage;
      }();

      TestPage.ctorParameters = function () {
        return [];
      };

      TestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./test.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./test.page.scss */
        "./src/app/test/test.page.scss"))["default"]]
      })], TestPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=test-test-module-es5.js.map