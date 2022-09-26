(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Formdata",
  data: function data() {
    return {
      warna: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'red', 'secondary-black-light', 'secondary-black-default', 'secondary-red-light', 'secondary-red-default', 'secondary-red-dark', 'secondary-yellow-light', 'secondary-yellow-default', 'secondary-yellow-dark'],
      angka: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      setwarna: []
    };
  },
  mounted: function mounted() {
    this.loadColor();
  },
  methods: {
    loadColor: function loadColor() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var i, j, setcolor;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (i = 0; i < _this.warna.length; i++) {
                  for (j = 0; j < _this.angka.length; j++) {
                    setcolor = 'bg-' + _this.warna[i] + '-' + _this.angka[j];

                    _this.setwarna.push(setcolor);
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "w-full text-center" }, [
      _vm._v("\n            Colors\n        "),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid sm:grid-cols-1 md:grid-cols-3 gap-4" },
      _vm._l(_vm.warna, function (index2, j) {
        return _c(
          "div",
          {
            staticClass: "border-solid border-4 text-center border-black",
            attrs: { set: (_vm.setJ = j * 10) },
          },
          [
            _c("div", { staticClass: "p-4" }, [
              _vm._v(
                "\n                    bg-" +
                  _vm._s(index2) +
                  "\n                "
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { set: (_vm.setL = (j + 1) * 10) } },
              _vm._l(
                _vm.setwarna.slice(_vm.setJ, _vm.setL),
                function (index1, i) {
                  return _c("div", [
                    _c("div", [
                      _c("div", { class: index1 }, [
                        i >= 4
                          ? _c("div", [
                              _c("div", { staticClass: "text-white p-4" }, [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(index1) +
                                    "\n                                    "
                                ),
                              ]),
                            ])
                          : _c("div", [
                              _c("div", { staticClass: "p-4" }, [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(index1) +
                                    "\n                                    "
                                ),
                              ]),
                            ]),
                      ]),
                    ]),
                  ])
                }
              ),
              0
            ),
          ]
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/content/dashboard/colors.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/content/dashboard/colors.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.vue?vue&type=template&id=9bb95228& */ "./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228&");
/* harmony import */ var _colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors.vue?vue&type=script&lang=js& */ "./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__["render"],
  _colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/content/dashboard/colors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./colors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/dashboard/colors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_colors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./colors.vue?vue&type=template&id=9bb95228& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/dashboard/colors.vue?vue&type=template&id=9bb95228&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_colors_vue_vue_type_template_id_9bb95228___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);