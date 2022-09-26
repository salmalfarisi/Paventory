(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dummy/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/form.vue */ "./resources/js/components/elements/form.vue");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Formdata",
  data: function data() {
    return {
      data: {
        success: '',
        message: '',
        title: '',
        description: '',
        file: ''
      },
      submitbutton: '',
      titles: '',
      status: '',
      newfile: ''
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var tokenStr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.status = "".concat(_this.$route.params.status);

                if (!(_this.status == 'show' || _this.status == 'edit')) {
                  _context.next = 7;
                  break;
                }

                tokenStr = localStorage.getItem('token');
                _context.next = 5;
                return _this.axios.get("/api/detail/".concat(_this.$route.params.id), {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this.data = response.data.data;
                  _this.success = response.data.success;
                  _this.message = response.data.message;

                  if (_this.status == 'show') {
                    _this.titles = 'Detail data : ' + _this.data.title;
                  } else {
                    _this.titles = 'Edit data : ' + _this.data.title;
                    _this.submitbutton = "<button type=\"submit\" class=\"float-right btn btn-primary btn-sm mx-2\" value=\"update\">Save</button>";
                  }
                })["catch"](function (error) {
                  console.log(error);
                  _this.data = {};
                });

              case 5:
                _context.next = 9;
                break;

              case 7:
                _this.titles = 'Create new data';
                _this.submitbutton = "<button type=\"submit\" class=\"float-right btn btn-primary btn-sm mx-2\" value=\"create\">Save</button>";

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submitdata: function submitdata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var urllink, subForm, tokenStr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.status == 'edit') {
                  urllink = "/api/update/".concat(_this2.$route.params.id);
                } else {
                  urllink = "/api/store";
                }

                subForm = new FormData();
                subForm.append("title", _this2.data.title);
                subForm.append("description", _this2.data.description);

                if (_this2.newfile != null) {
                  subForm.append("file", _this2.newfile);
                }

                tokenStr = localStorage.getItem('token');
                _context2.next = 8;
                return _this2.axios.post(urllink, subForm, {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this2.success = response.data.success;

                  if (_this2.success == true) {
                    _this2.$router.push({
                      name: "Index"
                    });
                  } else {
                    console.log(_this2.message);
                  }
                })["catch"](function (error) {
                  var message = error.response;
                  var geterror = message.data.data;
                  var i = parseInt('0');

                  for (var _i = 0, _Object$keys = Object.keys(geterror); _i < _Object$keys.length; _i++) {
                    var key = _Object$keys[_i];
                    var setvar = 'error_' + key;
                    var j = parseInt('0');

                    for (var _i2 = 0, _Object$values = Object.values(geterror); _i2 < _Object$values.length; _i2++) {
                      var _message = _Object$values[_i2];

                      if (i == j) {
                        document.getElementById(setvar).innerHTML = _message;
                      }

                      j++;
                    }

                    i++;
                  }
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  components: {
    'Forms': _elements_form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", { staticClass: "h3 text-center" }, [
        _vm._v(_vm._s(_vm.titles)),
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { enctype: "multipart/form-data" },
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submitdata.apply(null, arguments)
            },
          },
        },
        [
          _c("Forms", {
            attrs: {
              value: _vm.data.title,
              type: "text",
              labels: "Title",
              setid: "title",
              setattribute:
                "" + this.$route.params.status === "show" ? "disabled" : "",
            },
            model: {
              value: _vm.data.title,
              callback: function ($$v) {
                _vm.$set(_vm.data, "title", $$v)
              },
              expression: "data.title",
            },
          }),
          _vm._v(" "),
          _c("Forms", {
            attrs: {
              value: _vm.data.description,
              type: "textarea",
              labels: "Description",
              setid: "description",
              setattribute:
                "" + this.$route.params.status === "show" ? "disabled" : "",
            },
            model: {
              value: _vm.data.description,
              callback: function ($$v) {
                _vm.$set(_vm.data, "description", $$v)
              },
              expression: "data.description",
            },
          }),
          _vm._v(" "),
          _vm.status === "edit" || _vm.status === "create"
            ? _c(
                "div",
                [
                  _c("Forms", {
                    attrs: {
                      type: "file",
                      labels: "Upload File",
                      setid: "file",
                      setattribute: "",
                    },
                    model: {
                      value: _vm.newfile,
                      callback: function ($$v) {
                        _vm.newfile = $$v
                      },
                      expression: "newfile",
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.submitbutton) },
                  }),
                ],
                1
              )
            : _c(
                "div",
                [
                  _c("center", [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: "/file/" + _vm.data.file,
                        alt: "Responsive image",
                      },
                    }),
                  ]),
                ],
                1
              ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "float-left btn btn-danger btn-sm",
          attrs: { to: { name: "Index" } },
        },
        [_vm._v("Back")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dummy/form.vue":
/*!************************************************!*\
  !*** ./resources/js/components/dummy/form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7b6604d6& */ "./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/dummy/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dummy/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dummy/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/dummy/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=7b6604d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dummy/form.vue?vue&type=template&id=7b6604d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7b6604d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);