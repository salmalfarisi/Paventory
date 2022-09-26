"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_content_item_form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_form_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elements/form.vue */ "./resources/js/components/elements/form.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ItemForm",
  data: function data() {
    return {
      data: {
        success: '',
        message: '',
        name: '',
        kategori_id: '',
        satuan: '',
        photo: '',
        jumlah_barang: 0,
        harga_barang: 0,
        is_promo: 0,
        type_discount: 'kosong',
        discount: 0,
        is_opname_op: 0
      },
      option: {
        data: []
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var tokenStr;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.status = "".concat(_this.$route.params.status);
                tokenStr = localStorage.getItem('token');
                _context.next = 4;
                return _this.axios.get("/api/kategori/index", {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this.option = response.data.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this.option = {};
                });

              case 4:
                if (!(_this.status == 'create')) {
                  _context.next = 8;
                  break;
                }

                _this.titles = 'Create new Item';
                _context.next = 10;
                break;

              case 8:
                _context.next = 10;
                return _this.axios.get("/api/barang/detail/".concat(_this.$route.params.id), {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this.data = response.data.data;
                  _this.success = response.data.success;
                  _this.message = response.data.message;

                  if (_this.status == 'show') {
                    _this.titles = 'Detail data : ' + _this.data.name;
                  } else {
                    _this.titles = 'Edit data : ' + _this.data.name;
                  }
                })["catch"](function (error) {
                  console.log(error);
                  _this.data = {};
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    submitdata: function submitdata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var urllink, subForm, tokenStr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.status == 'create') {
                  urllink = "/api/barang/store";
                } else {
                  urllink = "/api/barang/update/".concat(_this2.$route.params.id);
                }

                document.getElementById('error_name').innerHTML = '';
                document.getElementById('error_kategori_id').innerHTML = '';
                document.getElementById('error_satuan').innerHTML = '';
                document.getElementById('error_jumlah_barang').innerHTML = '';
                document.getElementById('error_harga_barang').innerHTML = '';
                document.getElementById('error_type_discount').innerHTML = '';
                document.getElementById('error_discount').innerHTML = '';
                document.getElementById('error_photo').innerHTML = '';
                subForm = new FormData();
                subForm.append("name", _this2.data.name);
                subForm.append("kategori_id", _this2.data.kategori_id);
                subForm.append("satuan", _this2.data.satuan);
                subForm.append("jumlah_barang", _this2.data.jumlah_barang);
                subForm.append("harga_barang", _this2.data.harga_barang);
                subForm.append("is_promo", _this2.data.is_promo);
                subForm.append("type_discount", _this2.data.type_discount);
                subForm.append("discount", _this2.data.discount);

                if (_this2.status == 'edit') {
                  subForm.append("is_opname_op", _this2.data.is_opname_op);
                }

                if (_this2.newfile != null) {
                  subForm.append("photo", _this2.newfile);
                }

                tokenStr = localStorage.getItem('token');
                _context2.next = 23;
                return _this2.axios.post(urllink, subForm, {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this2.success = response.data.success;

                  if (_this2.success == true) {
                    _this2.$router.push({
                      name: "ItemIndex"
                    });
                  } else {
                    console.log(_this2.message);
                  }
                })["catch"](function (error) {
                  var message = error.response;
                  var geterror = message.data.data;

                  if (geterror !== null) {
                    alert(message.data.message);
                  }

                  if (geterror != []) {
                    for (var _i = 0, _Object$keys = Object.keys(geterror); _i < _Object$keys.length; _i++) {
                      var key = _Object$keys[_i];
                      var setvar = 'error_' + key;
                      var sethtml = geterror[key];
                      document.getElementById(setvar).innerHTML = sethtml;
                    }
                  }
                });

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  components: {
    Forms: _elements_form_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "m-4 font-semibold flex justify-between"
  }, [_c("div", {
    staticClass: "text-3xl"
  }, [_vm._v("\r\n\t\t\t\t" + _vm._s(_vm.titles) + "\r\n\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitdata.apply(null, arguments);
      }
    }
  }, [_c("Forms", {
    attrs: {
      value: _vm.data.name,
      type: "text",
      labels: "Name",
      setid: "name",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.name,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "name", $$v);
      },
      expression: "data.name"
    }
  }), _vm._v(" "), _c("Forms", {
    attrs: {
      value: _vm.data.kategori_id,
      type: "select",
      labels: "Category",
      setid: "kategori_id",
      option: this.option,
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.kategori_id,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "kategori_id", $$v);
      },
      expression: "data.kategori_id"
    }
  }), _vm._v(" "), _c("Forms", {
    attrs: {
      value: _vm.data.satuan,
      type: "text",
      labels: "Unit",
      setid: "satuan",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.satuan,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "satuan", $$v);
      },
      expression: "data.satuan"
    }
  }), _vm._v(" "), _c("Forms", {
    attrs: {
      value: _vm.data.jumlah_barang,
      type: "number",
      labels: "Quantity",
      setid: "jumlah_barang",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.jumlah_barang,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "jumlah_barang", $$v);
      },
      expression: "data.jumlah_barang"
    }
  }), _vm._v(" "), _c("Forms", {
    attrs: {
      value: _vm.data.harga_barang,
      type: "number",
      labels: "Price",
      setid: "harga_barang",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.harga_barang,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "harga_barang", $$v);
      },
      expression: "data.harga_barang"
    }
  }), _vm._v(" "), this.status == "show" ? _c("div", [_c("div", {
    staticClass: "flex flex-col gap-2"
  }, [_c("label", {
    staticClass: "flex justify-start text-base font-medium"
  }, [_vm._v("Promo Status")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.data.is_promo == false ? "No" : "Yes"))])])]) : _c("div", [_c("Forms", {
    attrs: {
      value: _vm.data.is_promo,
      type: "checkbox",
      labels: "Promo Status",
      setid: "is_promo",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.is_promo,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "is_promo", $$v);
      },
      expression: "data.is_promo"
    }
  })], 1), _vm._v(" "), _c("div", {
    attrs: {
      hidden: _vm.data.is_promo == false ? true : false
    }
  }, [_c("Forms", {
    attrs: {
      value: _vm.data.type_discount,
      type: "select",
      labels: "Type of discount",
      setid: "type_discount",
      option: [["persen", "Percent"], ["cash", "Cash"]],
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.type_discount,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "type_discount", $$v);
      },
      expression: "data.type_discount"
    }
  }), _vm._v(" "), _c("Forms", {
    attrs: {
      value: _vm.data.discount,
      type: "number",
      labels: "Total of Discount",
      setid: "discount",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.discount,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "discount", $$v);
      },
      expression: "data.discount"
    }
  })], 1), _vm._v(" "), _vm.status === "edit" ? _c("div", [_c("Forms", {
    attrs: {
      value: _vm.data.is_opname_op,
      type: "checkbox",
      labels: "Edit data for Stock Opname",
      setid: "is_opname_op",
      setattribute: "".concat(this.$route.params.status) === "show" ? "disabled" : ""
    },
    model: {
      value: _vm.data.is_opname_op,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "is_opname_op", $$v);
      },
      expression: "data.is_opname_op"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.status === "show" ? _c("div", [_c("center", [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: "/barang/" + _vm.data.photo,
      alt: "Responsive image"
    }
  })])], 1) : _c("div", [_c("Forms", {
    attrs: {
      type: "file",
      labels: "Upload Photo",
      setid: "photo",
      setattribute: ""
    },
    model: {
      value: _vm.newfile,
      callback: function callback($$v) {
        _vm.newfile = $$v;
      },
      expression: "newfile"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between pt-2"
  }, [_c("div", [_c("router-link", {
    staticClass: "float-left btn-danger btn-md",
    attrs: {
      to: {
        name: "ItemIndex"
      }
    }
  }, [_vm._v("Back")])], 1), _vm._v(" "), _c("div", [this.status != "show" ? _c("div", [_c("button", {
    staticClass: "btn-md btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v(_vm._s(this.status == "create" ? "Create" : "Update"))])]) : _vm._e()])])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/content/item/form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/content/item/form.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=e8b4b722& */ "./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/components/content/item/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__.render,
  _form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/content/item/form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/content/item/form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/content/item/form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_e8b4b722___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form.vue?vue&type=template&id=e8b4b722& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/item/form.vue?vue&type=template&id=e8b4b722&");


/***/ })

}]);