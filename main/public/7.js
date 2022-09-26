(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/users/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/content/users/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        success: false,
        message: '',
        data: []
      },
      is_admin: localStorage.getItem('is_admin')
    };
  },
  mounted: function mounted() {
    this.loaddata();
  },
  methods: {
    loaddata: function loaddata() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenStr, url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenStr = localStorage.getItem('token');
                url = "/api/user/index";
                _context.next = 4;
                return _this.axios.get(url, {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this.data = response.data.data;
                  _this.success = response.data.success;
                  _this.message = response.data.message;
                })["catch"](function (error) {
                  alert(error.data.message);
                  _this.data = [];
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirmdelete: function confirmdelete(id, title, row) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                document.getElementById('judulmodal').innerHTML = title;
                document.getElementById('iddata').value = id;
                document.getElementById('rowsdata').value = row;

              case 3:
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
        var rows, id, urllink, tokenStr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                rows = document.getElementById('rowsdata').value;
                id = document.getElementById('iddata').value;
                urllink = "/api/user/delete/" + id;
                tokenStr = localStorage.getItem('token');
                _context3.next = 6;
                return _this2.axios.patch(urllink, '', {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this2.success = response.data.success;
                  _this2.message = response.data.message;

                  _this2.data.splice(rows, 1); //location.replace('/');
                  //location.reload();


                  //location.replace('/');
                  //location.reload();
                  return false;
                })["catch"](function (error) {
                  alert(error.data.message);
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "m-4 font-semibold text-3xl" }, [
      _vm._v("\n            Users\n        "),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "rounded-md border-black" }, [
      _c("table", { attrs: { id: "Table" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.data, function (loopdata, key) {
            return _c("tr", { key: key, attrs: { id: "rows_" + key } }, [
              _c("td", { staticClass: "sm:hidden md:inline-block " }, [
                _vm._v(_vm._s(key + 1)),
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(loopdata.name))]),
              _vm._v(" "),
              _c("td", { staticClass: "sm:hidden md:inline-block " }, [
                _vm._v(_vm._s(loopdata.telephone)),
              ]),
              _vm._v(" "),
              loopdata.is_active === true
                ? _c("td", { staticClass: "sm:hidden md:inline-block " }, [
                    _vm._v("\n\t\t\t\t\t\t\tActive\n\t\t\t\t\t\t"),
                  ])
                : _c("td", { staticClass: "sm:hidden md:inline-block " }, [
                    _vm._v("\n\t\t\t\t\t\t\tNot Active\n\t\t\t\t\t\t"),
                  ]),
              _vm._v(" "),
              loopdata.id != null
                ? _c(
                    "td",
                    {
                      staticClass:
                        "sm:hidden md:inline-block flex justify-between",
                    },
                    [
                      _c("div", [
                        _vm._v("\n\t\t\t\t\t\t\t\ttes\n\t\t\t\t\t\t\t"),
                      ]),
                    ]
                  )
                : _vm._e(),
            ])
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { col: "10%" } }, [_vm._v("No")]),
        _vm._v(" "),
        _c("th", { attrs: { col: "40%" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { col: "20%" } }, [_vm._v("Telephone")]),
        _vm._v(" "),
        _c("th", { attrs: { col: "10%" } }, [_vm._v("Active Status")]),
        _vm._v(" "),
        _c("th", { attrs: { col: "30%" } }, [_vm._v("Pilihan")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/content/users/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/content/users/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2d493cfa& */ "./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/content/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/content/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/content/users/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/content/users/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2d493cfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/content/users/index.vue?vue&type=template&id=2d493cfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2d493cfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);