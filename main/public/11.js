(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dummy/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      data: {
        success: false,
        message: '',
        data: []
      },
      checktoken: localStorage.getItem('login')
    };
  },
  mounted: function mounted() {
    this.loaddata();
  },
  methods: {
    loaddata: function loaddata() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenStr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenStr = localStorage.getItem('token');
                _context.next = 3;
                return _this.axios.get("/api/index", {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this.data = response.data.data;
                  _this.success = response.data.success;
                  _this.message = response.data.message;
                })["catch"](function (error) {
                  console.log(error);
                  _this.data = [];
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirmdelete: function confirmdelete(id, title) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                document.getElementById('judulmodal').innerHTML = title;
                document.getElementById('iddata').value = id;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteData: function deleteData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var id, urllink, tokenStr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = document.getElementById('iddata').value;
                urllink = "/api/delete/" + id;
                tokenStr = localStorage.getItem('token');
                _context3.next = 5;
                return _this2.axios.patch(urllink, '', {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this2.data = response.data.data;
                  _this2.success = response.data.success;
                  _this2.message = response.data.message;
                  location.reload();
                  return false;
                })["catch"](function (error) {
                  console.log(error);
                  _this2.data = [];
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _vm.checktoken == "true"
    ? _c(
        "div",
        [
          _c(
            "router-link",
            {
              staticClass: "float-right btn btn-primary btn-sm my-2",
              attrs: {
                to: { name: "Formdata", params: { status: "create", id: "0" } },
              },
            },
            [_vm._v("Create new data")]
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table table-striped table-hover" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data, function (loopdata, key) {
                return _c("tr", { key: key }, [
                  _c("td", [_vm._v(_vm._s(key + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(loopdata.title))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(loopdata.description))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "d-flex justify-content-center" }, [
                    loopdata.id != null
                      ? _c(
                          "div",
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-info btn-sm mx-1",
                                attrs: {
                                  to: {
                                    name: "Formdata",
                                    params: { status: "show", id: loopdata.id },
                                  },
                                },
                              },
                              [_vm._v("Show")]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-warning btn-sm mx-1",
                                attrs: {
                                  to: {
                                    name: "Formdata",
                                    params: { status: "edit", id: loopdata.id },
                                  },
                                },
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger btn-sm mx-1",
                                attrs: {
                                  type: "button",
                                  "data-toggle": "modal",
                                  "data-target": "#exampleModal",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.confirmdelete(
                                      loopdata.id,
                                      loopdata.title
                                    )
                                  },
                                },
                              },
                              [_vm._v("Delete")]
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]),
                ])
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "exampleModal",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [_vm._v("No")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button", id: "iddata" },
                          on: { click: _vm.deleteData },
                        },
                        [_vm._v("Yes")]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Are you sure want to delete this data ?")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-body" }, [
      _c("div", { attrs: { id: "judulmodal" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dummy/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/dummy/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57faca30& */ "./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/dummy/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dummy/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dummy/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/dummy/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=57faca30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/index.vue?vue&type=template&id=57faca30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57faca30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);