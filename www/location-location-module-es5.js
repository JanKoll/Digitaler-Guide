(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"], {
    /***/
    "8AGy":
    /*!*********************************************************!*\
      !*** ./node_modules/@ionic-native/geolocation/index.js ***!
      \*********************************************************/

    /*! exports provided: Geolocation */

    /***/
    function AGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geolocation", function () {
        return Geolocation;
      });
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/core */
      "C6fG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __extends = undefined && undefined.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var GeolocationOriginal =
      /** @class */
      function (_super) {
        __extends(GeolocationOriginal, _super);

        function GeolocationOriginal() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        GeolocationOriginal.prototype.getCurrentPosition = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "getCurrentPosition", {
            "callbackOrder": "reverse"
          }, arguments);
        };
        /**
         * Watch the current device's position.  Clear the watch by unsubscribing from
         * Observable changes.
         *
         * ```typescript
         * const subscription = this.geolocation.watchPosition()
         *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
         *                               .subscribe(position => {
         *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
         * });
         *
         * // To stop notifications
         * subscription.unsubscribe();
         * ```
         *
         * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
         * @returns {Observable<Geoposition | PositionError>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
         */


        GeolocationOriginal.prototype.watchPosition = function (options) {
          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () {
              return navigator.geolocation.clearWatch(watchId);
            };
          });
        };

        GeolocationOriginal.pluginName = "Geolocation";
        GeolocationOriginal.plugin = "cordova-plugin-geolocation";
        GeolocationOriginal.pluginRef = "navigator.geolocation";
        GeolocationOriginal.repo = "https://github.com/apache/cordova-plugin-geolocation";
        GeolocationOriginal.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
        GeolocationOriginal.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
        GeolocationOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
        return GeolocationOriginal;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]);

      var Geolocation = new GeolocationOriginal(); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBa0tELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBOEIsVUFBQyxRQUFhO1lBQy9ELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzVCLE9BQU8sQ0FDUixDQUFDO1lBQ0YsT0FBTyxjQUFNLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztzQkE3TUg7RUFvS2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgY29uc3QgbmF2aWdhdG9yOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAvKipcbiAgICogYSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBwb3NpdGlvbidzIGxhdGl0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxhdGl0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsb25naXR1ZGUgaW4gZGVjaW1hbCBkZWdyZWVzLlxuICAgKi9cbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgYWNjdXJhY3kgb2YgdGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgcHJvcGVydGllcyxcbiAgICogZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICovXG4gIGFjY3VyYWN5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBhbHRpdHVkZSBpbiBtZXRyZXMsIHJlbGF0aXZlIHRvIHNlYVxuICAgKiBsZXZlbC4gVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbCBpZiB0aGUgaW1wbGVtZW50YXRpb24gY2Fubm90IHByb3ZpZGUgdGhlIGRhdGEuXG4gICAqL1xuICBhbHRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBhbHRpdHVkZSBleHByZXNzZWQgaW4gbWV0ZXJzLlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBudWxsLlxuICAgKi9cbiAgYWx0aXR1ZGVBY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgZGV2aWNlIGlzIHRyYXZlbGluZy4gVGhpc1xuICAgKiB2YWx1ZSwgc3BlY2lmaWVkIGluIGRlZ3JlZXMsIGluZGljYXRlcyBob3cgZmFyIG9mZiBmcm9tIGhlYWRpbmcgdHJ1ZSBub3J0aFxuICAgKiB0aGUgZGV2aWNlIGlzLiAwIGRlZ3JlZXMgcmVwcmVzZW50cyB0cnVlIG5vcnRoLCBhbmQgdGhlIGRpcmVjdGlvbiBpc1xuICAgKiBkZXRlcm1pbmVkIGNsb2Nrd2lzZSAod2hpY2ggbWVhbnMgdGhhdCBlYXN0IGlzIDkwIGRlZ3JlZXMgYW5kIHdlc3QgaXMgMjcwXG4gICAqIGRlZ3JlZXMpLiBJZiBzcGVlZCBpcyAwLCBoZWFkaW5nIGlzIE5hTi4gSWYgdGhlIGRldmljZSBpcyB1bmFibGUgdG8gcHJvdmlkZVxuICAgKiBoZWFkaW5nIGluZm9ybWF0aW9uLCB0aGlzIHZhbHVlIGlzIG51bGwuXG4gICAqL1xuICBoZWFkaW5nOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgdmVsb2NpdHkgb2YgdGhlIGRldmljZSBpbiBtZXRlcnMgcGVyIHNlY29uZC5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIHNwZWVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvcG9zaXRpb24ge1xuICAvKipcbiAgICogQSBDb29yZGluYXRlcyBvYmplY3QgZGVmaW5pbmcgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICovXG4gIGNvb3JkczogQ29vcmRpbmF0ZXM7XG5cbiAgLyoqXG4gICAqIEEgdGltZXN0YW1wIHJlcHJlc2VudGluZyB0aGUgdGltZSBhdCB3aGljaCB0aGUgbG9jYXRpb24gd2FzIHJldHJpZXZlZC5cbiAgICovXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uRXJyb3Ige1xuICAvKipcbiAgICogQSBjb2RlIHRoYXQgaW5kaWNhdGVzIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkXG4gICAqL1xuICBjb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbWVzc2FnZSB0aGF0IGNhbiBkZXNjcmliZSB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2xvY2F0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgaW5kaWNhdGluZyB0aGUgbWF4aW11bSBhZ2UgaW4gbWlsbGlzZWNvbmRzIG9mIGFcbiAgICogcG9zc2libGUgY2FjaGVkIHBvc2l0aW9uIHRoYXQgaXMgYWNjZXB0YWJsZSB0byByZXR1cm4uIElmIHNldCB0byAwLCBpdFxuICAgKiBtZWFucyB0aGF0IHRoZSBkZXZpY2UgY2Fubm90IHVzZSBhIGNhY2hlZCBwb3NpdGlvbiBhbmQgbXVzdCBhdHRlbXB0IHRvXG4gICAqIHJldHJpZXZlIHRoZSByZWFsIGN1cnJlbnQgcG9zaXRpb24uIElmIHNldCB0byBJbmZpbml0eSB0aGUgZGV2aWNlIG11c3RcbiAgICogcmV0dXJuIGEgY2FjaGVkIHBvc2l0aW9uIHJlZ2FyZGxlc3Mgb2YgaXRzIGFnZS4gRGVmYXVsdDogMC5cbiAgICovXG4gIG1heGltdW1BZ2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIElzIGEgcG9zaXRpdmUgbG9uZyB2YWx1ZSByZXByZXNlbnRpbmcgdGhlIG1heGltdW0gbGVuZ3RoIG9mIHRpbWVcbiAgICogKGluIG1pbGxpc2Vjb25kcykgdGhlIGRldmljZSBpcyBhbGxvd2VkIHRvIHRha2UgaW4gb3JkZXIgdG8gcmV0dXJuIGFcbiAgICogcG9zaXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIEluZmluaXR5LCBtZWFuaW5nIHRoYXQgZ2V0Q3VycmVudFBvc2l0aW9uKClcbiAgICogd29uJ3QgcmV0dXJuIHVudGlsIHRoZSBwb3NpdGlvbiBpcyBhdmFpbGFibGUuXG4gICAqL1xuICB0aW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGFwcGxpY2F0aW9uIHdvdWxkIGxpa2UgdG8gcmVjZWl2ZSB0aGUgYmVzdCBwb3NzaWJsZSByZXN1bHRzLlxuICAgKiBJZiB0cnVlIGFuZCBpZiB0aGUgZGV2aWNlIGlzIGFibGUgdG8gcHJvdmlkZSBhIG1vcmUgYWNjdXJhdGUgcG9zaXRpb24sIGl0XG4gICAqIHdpbGwgZG8gc28uIE5vdGUgdGhhdCB0aGlzIGNhbiByZXN1bHQgaW4gc2xvd2VyIHJlc3BvbnNlIHRpbWVzIG9yIGluY3JlYXNlZFxuICAgKiBwb3dlciBjb25zdW1wdGlvbiAod2l0aCBhIEdQUyBjaGlwIG9uIGEgbW9iaWxlIGRldmljZSBmb3IgZXhhbXBsZSkuIE9uIHRoZVxuICAgKiBvdGhlciBoYW5kLCBpZiBmYWxzZSwgdGhlIGRldmljZSBjYW4gdGFrZSB0aGUgbGliZXJ0eSB0byBzYXZlIHJlc291cmNlcyBieVxuICAgKiByZXNwb25kaW5nIG1vcmUgcXVpY2tseSBhbmQvb3IgdXNpbmcgbGVzcyBwb3dlci4gRGVmYXVsdDogZmFsc2UuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAbmFtZSBHZW9sb2NhdGlvblxuICogQHByZW1pZXIgZ2VvbG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRldmljZSdzIGxvY2F0aW9uLCBzdWNoIGFzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuIENvbW1vbiBzb3VyY2VzIG9mIGxvY2F0aW9uIGluZm9ybWF0aW9uIGluY2x1ZGUgR2xvYmFsIFBvc2l0aW9uaW5nIFN5c3RlbSAoR1BTKSBhbmQgbG9jYXRpb24gaW5mZXJyZWQgZnJvbSBuZXR3b3JrIHNpZ25hbHMgc3VjaCBhcyBJUCBhZGRyZXNzLCBSRklELCBXaUZpIGFuZCBCbHVldG9vdGggTUFDIGFkZHJlc3NlcywgYW5kIEdTTS9DRE1BIGNlbGwgSURzLlxuICpcbiAqICBUaGlzIEFQSSBpcyBiYXNlZCBvbiB0aGUgVzNDIEdlb2xvY2F0aW9uIEFQSSBTcGVjaWZpY2F0aW9uLCBhbmQgb25seSBleGVjdXRlcyBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgYWxyZWFkeSBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEZvciBpT1MgeW91IGhhdmUgdG8gYWRkIHRoaXMgY29uZmlndXJhdGlvbiB0byB5b3VyIGNvbmZpZ3VyYXRpb24ueG1sIGZpbGVcbiAqIGBgYHhtbFxuICogPGVkaXQtY29uZmlnIGZpbGU9XCIqLUluZm8ucGxpc3RcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCJOU0xvY2F0aW9uV2hlbkluVXNlVXNhZ2VEZXNjcmlwdGlvblwiPlxuICogICAgPHN0cmluZz5XZSB1c2UgeW91ciBsb2NhdGlvbiBmb3IgZnVsbCBmdW5jdGlvbmFsaXR5IG9mIGNlcnRhaW4gYXBwIGZlYXR1cmVzLjwvc3RyaW5nPlxuICogPC9lZGl0LWNvbmZpZz5cbiAqIGBgYFxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2VvbG9jYXRpb24vbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAqICAvLyByZXNwLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIHJlc3AuY29vcmRzLmxvbmdpdHVkZVxuICogfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uJywgZXJyb3IpO1xuICogfSk7XG4gKlxuICogbGV0IHdhdGNoID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKCk7XG4gKiB3YXRjaC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICAvLyBkYXRhIGNhbiBiZSBhIHNldCBvZiBjb29yZGluYXRlcywgb3IgYW4gZXJyb3IgKGlmIGFuIGVycm9yIG9jY3VycmVkKS5cbiAqICAvLyBkYXRhLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDb29yZGluYXRlc1xuICogR2VvcG9zaXRpb25cbiAqIFBvc2l0aW9uRXJyb3JcbiAqIEdlb2xvY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlb2xvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2VvbG9jYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gbG9jYXRlIHlvdVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBkZXZpY2UncyBjdXJyZW50IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0dlb2xvY2F0aW9uT3B0aW9uc30gb3B0aW9ucyAgVGhlIFtnZW9sb2NhdGlvbiBvcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb25PcHRpb25zKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8R2VvcG9zaXRpb24+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRDdXJyZW50UG9zaXRpb24ob3B0aW9ucz86IEdlb2xvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8R2VvcG9zaXRpb24+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV2F0Y2ggdGhlIGN1cnJlbnQgZGV2aWNlJ3MgcG9zaXRpb24uICBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tXG4gICAqIE9ic2VydmFibGUgY2hhbmdlcy5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChwKSA9PiBwLmNvb3JkcyAhPT0gdW5kZWZpbmVkKSAvL0ZpbHRlciBPdXQgRXJyb3JzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocG9zaXRpb24gPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUgKyAnICcgKyBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpO1xuICAgKiB9KTtcbiAgICpcbiAgICogLy8gVG8gc3RvcCBub3RpZmljYXRpb25zXG4gICAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtHZW9sb2NhdGlvbk9wdGlvbnN9IG9wdGlvbnMgIFRoZSBbZ2VvbG9jYXRpb24gb3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uT3B0aW9ucykuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uIHwgUG9zaXRpb25FcnJvcj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxHZW9wb3NpdGlvbiB8IFBvc2l0aW9uRXJyb3I+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBjb25zdCB3YXRjaElkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT4gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

      /***/
    },

    /***/
    "JGET":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JGET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content\" *ngIf=\"data\">\n    <div class=\"icon-header\">\n      <div class=\"icon\">\n        <img src=\"{{ data.icon }}\" alt=\"{{ data.title }} Icon\">\n      </div>\n\n      <h2>{{ data.title }}</h2>\n    </div>\n\n    <div class=\"text\">\n      <div class=\"close\" (click)=\"close()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" style=\"height: .75rem; width: .75rem; overflow: hidden\">\n          <defs>\n            <style>\n              .closedark {\n                fill: #000000;\n              }\n            </style>\n          </defs>\n          <g id=\"Layer_2\" data-name=\"Layer 2\">\n            <g id=\"Layer_1-2\" data-name=\"Layer 1\"><polygon class=\"closedark\" points=\"100 9.83 90.17 0 50 40.17 9.83 0 0 9.83 40.17 50 0 90.17 9.83 100 50 59.83 90.17 100 100 90.17 59.83 50 100 9.83\"/></g>\n          </g>\n        </svg>\n      </div>\n      <p>{{ data.teasertext }}</p>\n\n      <ion-img src=\"{{ data.teaserimg }}\" alt=\"{{ data.title }} Vorschaubild\"></ion-img>\n\n      <div [innerHTML]=\"data.time\"></div>\n\n      <div class=\"routerbtn\">\n        <ion-button (click)=\"route(data.id)\">\n          Mehr erfahren\n        </ion-button>\n      </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "KCm/":
    /*!*********************************************************!*\
      !*** ./src/app/components/legend/legend.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function KCm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWdlbmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "U7C4":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/legend/legend.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function U7C4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"text\">\n      <div class=\"close\" (click)=\"close()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" style=\"height: .75rem; width: .75rem; overflow: hidden\">\n          <defs>\n            <style>\n              .closedark {\n                fill: #000000;\n              }\n            </style>\n          </defs>\n          <g id=\"Layer_2\" data-name=\"Layer 2\">\n            <g id=\"Layer_1-2\" data-name=\"Layer 1\"><polygon class=\"closedark\" points=\"100 9.83 90.17 0 50 40.17 9.83 0 0 9.83 40.17 50 0 90.17 9.83 100 50 59.83 90.17 100 100 90.17 59.83 50 100 9.83\"/></g>\n          </g>\n        </svg>\n      </div>\n\n      <p><b>Legende:</b></p>\n\n      <div class=\"leg\">\n        <div class=\"location\"></div>\n        <p>Aktueller Standort</p>\n      </div>\n\n      <div class=\"leg\">\n        <div class=\"station\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 39.62 34.31\"><defs><style>.cls-1{fill:#006c66;stroke-width:4px;}.cls-1,.cls-2{stroke:#eee;stroke-miterlimit:10;}.cls-2{fill:#eee;}</style></defs><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Hintergrund\"><polygon class=\"cls-1\" points=\"28.56 2 11.06 2 2.31 17.16 11.06 32.31 28.56 32.31 37.31 17.16 28.56 2\"/><path class=\"cls-2\" d=\"M18.32,24.24a1.47,1.47,0,0,1,1.49-1.56,1.45,1.45,0,0,1,1.49,1.56,1.49,1.49,0,1,1-3,0ZM19,20.63,18.6,8.5H21l-.35,12.13Z\"/></g></g></svg>\n        </div>\n        <p>Station</p>\n      </div>\n\n      <div class=\"leg\">\n        <div class=\"park\">P</div>\n        <p>Parkplatz</p>\n      </div>\n\n      <div class=\"leg\">\n        <div class=\"qr\"><img src=\"../assets/qr-icon.png\" /></div>\n        <p>QR-Code Scanner</p>\n      </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Z0OH":
    /*!*******************************************************!*\
      !*** ./src/app/components/legend/legend.component.ts ***!
      \*******************************************************/

    /*! exports provided: LegendComponent */

    /***/
    function Z0OH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendComponent", function () {
        return LegendComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend.component.html */
      "U7C4");
      /* harmony import */


      var _legend_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./legend.component.scss */
      "KCm/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LegendComponent = /*#__PURE__*/function () {
        function LegendComponent(modalCtrl) {
          _classCallCheck(this, LegendComponent);

          this.modalCtrl = modalCtrl;
        }

        _createClass(LegendComponent, [{
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LegendComponent;
      }();

      LegendComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      LegendComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legend',
        template: _raw_loader_legend_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legend_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LegendComponent);
      /***/
    },

    /***/
    "bW9M":
    /*!*************************************************************************!*\
      !*** ./src/app/components/article-preview/article-preview.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ArticlePreviewComponent */

    /***/
    function bW9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () {
        return ArticlePreviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_article_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./article-preview.component.html */
      "JGET");
      /* harmony import */


      var _article_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./article-preview.component.scss */
      "tF3b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ArticlePreviewComponent = /*#__PURE__*/function () {
        function ArticlePreviewComponent(modalCtrl, router) {
          _classCallCheck(this, ArticlePreviewComponent);

          this.modalCtrl = modalCtrl;
          this.router = router;
          console.log(this.data);
        }

        _createClass(ArticlePreviewComponent, [{
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "route",
          value: function route(id) {
            this.router.navigate(['/article/', id]);
            this.modalCtrl.dismiss();
          }
        }]);

        return ArticlePreviewComponent;
      }();

      ArticlePreviewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ArticlePreviewComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ArticlePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-article-preview',
        template: _raw_loader_article_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_article_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ArticlePreviewComponent);
      /***/
    },

    /***/
    "cf3W":
    /*!*********************************************!*\
      !*** ./src/app/location/location.module.ts ***!
      \*********************************************/

    /*! exports provided: LocationPageModule */

    /***/
    function cf3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-routing.module */
      "pMSE");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "xNjN");

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    },

    /***/
    "eeDV":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function eeDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"solid-primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\" [fullscreen]=\"true\" *ngIf=\"content\">\n  <div class=\"map-wrapper\">\n    <div class=\"coord\"\n      style=\"{{ setObjectLocation(item.coords, i) }}\"\n      *ngFor=\"let item of content.children; let i = index\"\n      (click)=\"showModal(i)\"\n    >\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 39.62 34.31\">\n        <defs>\n          <style>.mapmarker{fill:#006c66;stroke-width:4px;}.mapmarker,.cls-2{stroke:#eee;stroke-miterlimit:10;}.cls-2{fill:#eee;}</style>\n        </defs>\n        <g id=\"Layer_2\" data-name=\"Layer 2\">\n          <g id=\"Hintergrund\"><polygon class=\"mapmarker\" points=\"28.56 2 11.06 2 2.31 17.16 11.06 32.31 28.56 32.31 37.31 17.16 28.56 2\"/>\n            <path class=\"cls-2\" d=\"M18.32,24.24a1.47,1.47,0,0,1,1.49-1.56,1.45,1.45,0,0,1,1.49,1.56,1.49,1.49,0,1,1-3,0ZM19,20.63,18.6,8.5H21l-.35,12.13Z\"/>\n          </g>\n        </g>\n      </svg>\n    </div>\n\n    <div class=\"location\" style=\"right: {{wp}}%; top: {{hp}}%\"></div>\n\n    <img src=\"{{ content.body.map }}\" />\n\n  </div>\n\n  <div class=\"info\" (click)=\"legend()\">i</div>\n  <div id=\"qropen\" class=\"info\" (click)=\"startScanning()\"><img src=\"../assets/qr-icon.png\" /></div>\n\n</ion-content>\n\n<div id=\"qrclose\" (click)=\"stopScanning()\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" style=\"height: 4rem; width: 4rem; overflow: hidden\">\n    <defs>\n      <style>\n        .closedark {\n          fill: #006C66;\n        }\n      </style>\n    </defs>\n    <g id=\"Layer_2\" data-name=\"Layer 2\">\n      <g id=\"Layer_1-2\" data-name=\"Layer 1\"><polygon class=\"closedark\" points=\"100 9.83 90.17 0 50 40.17 9.83 0 0 9.83 40.17 50 0 90.17 9.83 100 50 59.83 90.17 100 100 90.17 59.83 50 100 9.83\"/></g>\n    </g>\n  </svg>\n</div>\n";
      /***/
    },

    /***/
    "jluf":
    /*!*********************************************!*\
      !*** ./src/app/location/location.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function jluf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "pMSE":
    /*!*****************************************************!*\
      !*** ./src/app/location/location-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function pMSE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location.page */
      "xNjN");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPageRoutingModule);
      /***/
    },

    /***/
    "tF3b":
    /*!***************************************************************************!*\
      !*** ./src/app/components/article-preview/article-preview.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function tF3b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "xNjN":
    /*!*******************************************!*\
      !*** ./src/app/location/location.page.ts ***!
      \*******************************************/

    /*! exports provided: LocationPage */

    /***/
    function xNjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./location.page.html */
      "eeDV");
      /* harmony import */


      var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./location.page.scss */
      "jluf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation */
      "8AGy");
      /* harmony import */


      var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/qr-scanner/ngx */
      "BLr9");
      /* harmony import */


      var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/article-preview/article-preview.component */
      "bW9M");
      /* harmony import */


      var _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/legend/legend.component */
      "Z0OH");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc"); // Import Components


      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(modalCtrl, platform, alertController, qrScanner, route, activatedRoute, http) {
          var _this = this;

          _classCallCheck(this, LocationPage);

          this.modalCtrl = modalCtrl;
          this.platform = platform;
          this.alertController = alertController;
          this.qrScanner = qrScanner;
          this.route = route;
          this.activatedRoute = activatedRoute;
          this.http = http; // Call and Update geo Location

          this.getCurrentLocation(); // setInterval(() =>
          //   this.getCurrentLocation()
          // , 5000);
          // subscribe to cammera close

          this.platform.backButton.subscribeWithPriority(0, function () {
            // Android Physical Back Button???
            // document.getElementsByTagName('body')[0].style.opacity = '1';
            // Use Class to Toggle Backgound Visibility
            document.getElementsByTagName('body')[0].classList.toggle("qractive");

            _this.qrScanner.destroy();
          }); // GET Route and poll data

          this.activatedRoute.params.subscribe(function (params) {
            // REST Authentication
            _this.http.useBasicAuth('mail@example.de', 'Raute123'); //HTTP GET


            _this.http.get("http://api.jankoll.de/rest/map/".concat(params['locationId']), {}, {}).then(function (data) {
              _this.content = JSON.parse(data.data); // data received by server
            })["catch"](function (error) {
              console.log(error.status);
              console.log(error.error); // error message as string

              console.log(error.headers);
            });
          });
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCurrentLocation();
          } // Call and set current geo location

        }, {
          key: "getCurrentLocation",
          value: function getCurrentLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var position, height, width;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _ionic_native_geolocation__WEBPACK_IMPORTED_MODULE_6__["Geolocation"].getCurrentPosition();

                    case 2:
                      position = _context3.sent;
                      this.latitude = position.coords.latitude;
                      this.longitude = position.coords.longitude;
                      height = this.content.body.coords.leftTop.lat - this.content.body.coords.rightBot.lat;
                      width = this.content.body.coords.rightBot.lon - this.content.body.coords.leftTop.lon;
                      this.hp = (this.content.body.coords.leftTop.lat - this.latitude) * 100 / height;
                      this.wp = (this.content.body.coords.rightBot.lon - this.longitude) * 100 / width;

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Set artefact geo location

        }, {
          key: "setObjectLocation",
          value: function setObjectLocation(geoData, test) {
            var height = this.content.body.coords.leftTop.lat - this.content.body.coords.rightBot.lat;
            var width = this.content.body.coords.rightBot.lon - this.content.body.coords.leftTop.lon;
            var ycoord = (this.content.body.coords.leftTop.lat - geoData.lat) * 100 / height;
            var xcoord = (this.content.body.coords.rightBot.lon - geoData.lon) * 100 / width;
            return "right:" + xcoord + "%; top:" + ycoord + "%;";
          } // Modal controllers

        }, {
          key: "showModal",
          value: function showModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_8__["ArticlePreviewComponent"],
                        componentProps: {
                          data: this.content.children[id]
                        },
                        // backdropDismiss:false,
                        swipeToClose: true,
                        cssClass: 'articleprev'
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "legend",
          value: function legend() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalCtrl.create({
                        component: _components_legend_legend_component__WEBPACK_IMPORTED_MODULE_9__["LegendComponent"],
                        // backdropDismiss:false,
                        swipeToClose: true,
                        cssClass: 'legend'
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // QR-Code Functions

        }, {
          key: "accessCamera",
          value: function accessCamera() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Kamera deaktiviert',
                        message: 'Wenn du einen QR-Code Scannen möchtest, erlaube bitte den Kamera zugriff in den Einstellungen.',
                        buttons: [{
                          text: 'Abbrechen',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Einstellungen',
                          handler: function handler() {
                            _this2.qrScanner.openSettings();
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "undefinedQrCode",
          value: function undefinedQrCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Fehler',
                        message: 'Der QR-Code ist entweder nicht leserlich oder gehört nicht zur Tour.',
                        buttons: ['Okay']
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "startScanning",
          value: function startScanning() {
            var _this3 = this;

            // Optionally request the permission early
            this.qrScanner.prepare().then(function (status) {
              if (status.authorized) {
                _this3.qrScanner.show(); // Use Class to Toggle Backgound Visibility


                document.getElementsByTagName('body')[0].classList.toggle("qractive");
                console.log("AUTHORIZED "); // debugger

                var scanSub = _this3.qrScanner.scan().subscribe(function (textFound) {
                  console.log(textFound); // Use Class to Toggle Backgound Visibility

                  document.getElementsByTagName('body')[0].classList.toggle("qractive"); // Route to Page with textFound var
                  // Array contains all possible routings
                  // var routs = [];
                  // this.route.config.forEach(elements => {
                  //   routs.push(elements.path)
                  // });
                  // Check if QR-Code is valid

                  if (_this3.content.children.map(function (x) {
                    return x.id;
                  }).includes(textFound)) {
                    _this3.route.navigate(['/article/' + textFound]);

                    console.log(textFound);

                    _this3.qrScanner.destroy();
                  } else {
                    _this3.undefinedQrCode();

                    _this3.qrScanner.destroy();
                  }
                }, function (err) {
                  alert(JSON.stringify(err));
                });
              } else if (status.denied) {
                // The video preview will remain black, and scanning is disabled. We can
                // try to ask the user to change their mind, but we'll have to send them
                // to their device settings with `QRScanner.openSettings()`.
                console.log("ELSE IF");
              } else {
                // we didn't get permission, but we didn't get permanently denied. (On
                // Android, a denial isn't permanent unless the user checks the "Don't
                // ask again" box.) We can ask again at the next relevant opportunity.
                console.log("ELSE ");
              }
            })["catch"](function (e) {
              console.log('Error is', e);

              _this3.accessCamera();
            });
          }
        }, {
          key: "stopScanning",
          value: function stopScanning() {
            // Use Class to Toggle Backgound Visibility
            document.getElementsByTagName('body')[0].classList.toggle("qractive");
            this.qrScanner.destroy();
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]
        }];
      };

      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=location-location-module-es5.js.map