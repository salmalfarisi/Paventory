"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_content_category_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_table_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../elements/table.vue */ "./resources/js/components/elements/table.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: {
        success: false,
        message: '',
        data: []
      },
      loadtable: false,
      is_admin: localStorage.getItem('is_admin')
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loaddata(), this.$root.$on('commanddelete', function (objectdata) {
      _this.deleteData(objectdata);
    });
  },
  methods: {
    loaddata: function loaddata() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var tokenStr;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokenStr = localStorage.getItem('token');
                _context.next = 3;
                return _this2.axios.get("/api/kategori/index", {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this2.data = response.data.data;
                  _this2.success = response.data.success;
                  _this2.message = response.data.message;
                  _this2.loadtable = _this2.success;
                })["catch"](function (error) {
                  console.log(error);
                  _this2.data = {};
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirmdelete: function confirmdelete(id, title, row) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
    deleteData: function deleteData(command) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var urllink, tokenStr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(command.table == 'category')) {
                  _context3.next = 7;
                  break;
                }

                if (!confirm('are you sure want to delete this data')) {
                  _context3.next = 7;
                  break;
                }

                urllink = "/api/kategori/destroy/" + command.id;
                tokenStr = localStorage.getItem('token');
                _context3.next = 6;
                return _this3.axios.patch(urllink, '', {
                  headers: {
                    "Authorization": "Bearer ".concat(tokenStr)
                  }
                }).then(function (response) {
                  _this3.success = response.data.success;
                  _this3.message = response.data.message; //this.$router.push({name:"UserIndex"})
                  //location.replace('/');
                  //location.reload();

                  return false;
                })["catch"](function (error) {
                  alert(error.data.message);
                });

              case 6:
                if (_this3.success == true) {
                  _this3.loaddata();
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  components: {
    Tabletailwind: _elements_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  //pagination ?
  name: 'Tabletailwind',
  props: ['tableid', 'data', 'typefirstcol', 'dataPerPage', 'theaders', 'labels', 'option', 'baseurl', 'uniqueid'],
  data: function data() {
    return {
      toporder: '',
      bottomorder: '',
      defaultorder: '',
      temptheaders: [],
      templabel: [],
      temptotal: 'Total data : 0',
      tempdata: [],
      temptabledata: [],
      temporder: '',
      tempoption: [],
      tempfirstcolumn: '',
      temppage: 0,
      tempurl: false,
      tablecurrent: 0,
      tablefirstpage: 0,
      tablelastpage: 0,
      tablepreviouscurrent: 0,
      tablenextcurrent: 0,
      sorttable: 'default',
      targetorder: ''
    };
  },
  mounted: function mounted() {
    //setTimeout(function () { this.loaddata() }.bind(this), 20000)
    this.loaddata();
  },
  methods: {
    sortingdata: function sortingdata() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var i, tempid, tempobject, tempgetobject, key, j, setvalue, tempoptionbutton, k;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //set default sort datatable
                _this.tempdata = [];
                _this.temptabledata = [];

                for (i = 0; i < _this.data.length; i++) {
                  tempid = '';
                  tempobject = [];
                  tempgetobject = _this.data[i];
                  tempobject.push(i + 1);

                  for (key in tempgetobject) {
                    for (j = 0; j < _this.templabel.length; j++) {
                      if (_this.templabel[j] == key) {
                        setvalue = tempgetobject[key];
                        tempobject.push(setvalue.toString());
                      } else if (key == _this.uniqueid) {
                        tempid = tempgetobject[key];
                      }
                    }
                  }

                  ; //set format url disini caranya bagaimana ???

                  if (_this.tempoption !== []) {
                    _this.tempurl = true;
                    tempoptionbutton = {};

                    for (k = 0; k < _this.tempoption.length; k++) {
                      if (_this.tempoption[k] == 'delete') {
                        tempoptionbutton[_this.tempoption[k]] = tempid;
                      } else {
                        tempoptionbutton[_this.tempoption[k]] = {
                          name: _this.baseurl,
                          params: {
                            status: _this.tempoption[k],
                            id: tempid
                          }
                        };
                      }
                    }

                    tempobject.push(tempoptionbutton);
                  }

                  _this.tempdata.push(tempobject);

                  _this.temptabledata.push(tempobject);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    loaddata: function loaddata(props) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var loop, convert, firstcolumn, pecahdata, selectoption, i, getdataI, j, getdataJ;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /*
                	'data' : object 
                	'typefirstcol' : string
                	'dataPerPage' : string 
                	'theaders' : array (ambil header yang ingin dibuat sebagai title table header (kecuali nomor dan option)). urutan ngikutin label 
                	'labels' : array (untuk get data) 
                	'option' : array 
                	'baseurl' : string (nama route)
                */
                _this2.temptheaders = _this2.theaders.split("|");

                if (_this2.$slots["default"]) {
                  loop = 0;
                  convert = _this2.$slots["default"];
                  Object.entries(convert).forEach(function (_ref, index) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        value = _ref2[1];

                    loop++;
                  });
                  _this2.temptotal = "Total data : " + parseInt(loop);
                } else {
                  firstcolumn = _this2.typefirstcol === 'checkbox' ? 'checkbox' : _this2.typefirstcol === 'radio' ? 'radio' : 'number';

                  if (_this2.data === undefined) {
                    alert('load data before initialize table');
                  } else {
                    _this2.temptotal = "Total data : " + parseInt(_this2.data.length);

                    if (_this2.dataPerPage == null || _this2.dataPerPage.length == parseInt('0')) {
                      //belum tahu mau ngapain disini
                      _this2.tablecurrent = parseInt('0');
                    } else {
                      _this2.temppage = parseInt(_this2.dataPerPage);

                      if (parseInt(_this2.data.length) > _this2.dataPerPage) {
                        _this2.tablelastpage = Math.ceil(parseInt(_this2.data.length) / parseInt(_this2.dataPerPage));
                      }

                      if (parseInt(_this2.tablelastpage) != parseInt('0') && parseInt(_this2.data.length) > _this2.dataPerPage) {
                        _this2.tablenextcurrent = parseInt('2');
                      }

                      if (parseInt(_this2.data.length) != parseInt('0')) {
                        _this2.tablecurrent = parseInt('1');
                      }
                    }

                    _this2.templabel = _this2.labels.split("|");

                    if (_this2.baseurl != 'kosong' && _this2.option != 'kosong') {
                      pecahdata = _this2.option.split("|");
                      selectoption = ['show', 'edit', 'delete'];

                      for (i = 0; i < selectoption.length; i++) {
                        getdataI = selectoption[i];

                        for (j = 0; j < pecahdata.length; j++) {
                          getdataJ = pecahdata[j];
                          /* var convert = pecahdata[i];
                          let getdataJ = this.convert.toLowerCase(); */

                          if (getdataI == getdataJ) {
                            _this2.tempoption.push(getdataJ.toString());
                          }
                        }
                      }
                    }

                    _this2.sortingdata();
                  }
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changepage: function changepage(target) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var total, first, second, setname;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // masih belum bener!!
                total = 0;
                first = 0;
                second = 0;
                setname = document.getElementsByClassName(_this3.tableid);

                if (target == 'last') {
                  first = parseInt(_this3.data.length) - parseInt(_this3.dataPerPage);
                  second = parseInt(_this3.data.length);
                  _this3.tablecurrent = Math.ceil(parseInt(_this3.data.length) / parseInt(_this3.dataPerPage));
                  _this3.tablepreviouscurrent = _this3.tablecurrent - 1;
                  _this3.tablenextcurrent = _this3.tablecurrent;
                } else if (target == 'first') {
                  second = parseInt(_this3.dataPerPage);
                  _this3.tablepreviouscurrent = 0;
                  _this3.tablenextcurrent = 2;
                  _this3.tablecurrent = parseInt("1");
                } else if (target == 'next') {
                  if (_this3.tablenextcurrent > _this3.tablecurrent && _this3.tablecurrent != _this3.tablelastpage) {
                    total = _this3.tablecurrent;
                    first = _this3.tablecurrent * parseInt(_this3.dataPerPage);
                    second = (parseInt(_this3.tablecurrent) + 1) * parseInt(_this3.dataPerPage);
                    _this3.tablecurrent = parseInt(_this3.tablenextcurrent);
                    _this3.tablepreviouscurrent = parseInt(_this3.tablepreviouscurrent) + parseInt("1");
                    _this3.tablenextcurrent = parseInt(_this3.tablenextcurrent) + parseInt("1");

                    if (second > parseInt(_this3.data.length)) {
                      second = parseInt(_this3.data.length);
                    }
                  } else {
                    first = (parseInt(_this3.tablecurrent) - 1) * parseInt(_this3.dataPerPage);
                    second = _this3.tablecurrent * parseInt(_this3.dataPerPage);
                  }
                } else if (target == 'previous') {
                  if (_this3.tablecurrent != parseInt("1") && _this3.tablepreviouscurrent > parseInt("0")) {
                    total = _this3.tablecurrent;
                    first = (parseInt(_this3.tablecurrent) - 2) * parseInt(_this3.dataPerPage);
                    second = (parseInt(_this3.tablecurrent) - 1) * parseInt(_this3.dataPerPage);
                    _this3.tablecurrent = parseInt(_this3.tablepreviouscurrent);
                    _this3.tablepreviouscurrent = parseInt(_this3.tablepreviouscurrent) - parseInt("1");
                    _this3.tablenextcurrent = parseInt(_this3.tablenextcurrent) - parseInt("1");
                  }

                  if (first <= parseInt("0")) {
                    first = parseInt("0");
                    second = parseInt(_this3.dataPerPage);
                    _this3.tablenextcurrent = parseInt(_this3.data.length) > parseInt(_this3.dataPerPage) ? parseInt("2") : parseInt("1");
                  }
                }

                if (parseInt(second) <= parseInt(_this3.data.length) && parseInt(first) >= parseInt("0")) {
                  _this3.temptabledata = _this3.tempdata.slice(parseInt(first), parseInt(second));
                } else {
                  _this3.tablecurrent = total;
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    orderpage: function orderpage(target) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var seticon, setoldicon, createneworder, testing, i, getdata, loop;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                seticon = _this4.tableid + '-icon-' + target;

                if (_this4.targetorder != '') {
                  if (_this4.targetorder != target) {
                    if (target == '0') {
                      _this4.sortingdata();
                    }

                    setoldicon = _this4.tableid + '-icon-' + _this4.targetorder;
                    document.getElementById(setoldicon).className = 'absolute inset-x-0 bottom-0 h-5 fa-regular fa-square-caret-down';
                    _this4.sorttable = 'default';
                  }
                }

                _this4.targetorder = target;
                createneworder = [];

                if (_this4.temptabledata.length != parseInt("0")) {
                  testing = _this4.temptabledata[0][target];

                  if (typeof testing == 'number') {
                    _this4.temptabledata.sort(function (a, b) {
                      return a[target] - b[target];
                    });
                  } else {
                    _this4.temptabledata.sort(function (a, b) {
                      return a[target].localeCompare(b[target]);
                    });
                  }
                }

                if (_this4.sorttable != 'bottom') {
                  for (i = 0; i < _this4.temptabledata.length; i++) {
                    getdata = _this4.temptabledata[i];
                    getdata[0] = i + 1;
                    createneworder.push(getdata);
                  }

                  _this4.temptabledata = createneworder;
                  document.getElementById(seticon).className = 'absolute inset-x-0 bottom-0 h-5 fa-solid fa-square-caret-down';
                  _this4.sorttable = 'bottom';
                } else if (_this4.sorttable != 'top' && _this4.sorttable != 'default') {
                  loop = _this4.temptabledata.length + 1;

                  for (i = _this4.temptabledata.length - 1; i >= 0; i--) {
                    getdata = _this4.temptabledata[i];
                    getdata[0] = loop - 1;
                    createneworder.push(getdata);
                    loop = loop - 1;
                  }

                  document.getElementById(seticon).className = 'absolute inset-x-0 bottom-0 h-5 fa-solid fa-square-caret-up';
                  _this4.temptabledata = createneworder;
                  _this4.sorttable = 'top';
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    deleteData: function deleteData(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.$root.$emit('commanddelete', {
                  table: _this5.tableid,
                  id: id
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\r\n\t\t\t\tUsers\r\n\t\t\t")]), _vm._v(" "), _c("div", [_c("router-link", {
    staticClass: "btn-lg btn-primary",
    attrs: {
      to: {
        name: "CategoryForm",
        params: {
          status: "create",
          id: "0"
        }
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\tCreate new Data\r\n\t\t\t\t")])], 1)]), _vm._v(" "), _vm.loadtable === true ? _c("div", [_c("div", {
    staticClass: "card"
  }, [_c("Tabletailwind", {
    attrs: {
      tableid: "category",
      data: _vm.data,
      typefirstcol: "number",
      dataPerPage: "2",
      theaders: "Name",
      labels: "nama_kategori",
      option: "edit|delete",
      baseurl: "CategoryForm",
      uniqueid: "id"
    }
  })], 1)]) : _c("div", [_vm._v("\r\n\t\t\tData not found\r\n\t\t")])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {}, [_c("div", {
    "class": this.temptabledata.length == parseInt("0") ? "bg-gray-300 rounded-sm overflow-y-auto max-h-screen" : "bg-gray-300 rounded-sm"
  }, [_c("table", {
    "class": this.temptabledata.length == parseInt("0") ? "vuetable overflow-y-auto w-full" : "vuetable",
    attrs: {
      id: this.tableid
    }
  }, [_c("thead", {
    "class": this.temptabledata.length == parseInt("0") ? "sticky top-0 z-10" : ""
  }, [_c("tr", [_c("th", {
    attrs: {
      hidden: _vm.typefirstcol === "kosong" ? "hidden" : false
    }
  }, [_vm.typefirstcol === "number" ? _c("div", [_c("div", {
    staticClass: "flex justify-between gap-4"
  }, [_c("div", [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tNo\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "relative text-right font-semibold w-1/6",
    attrs: {
      hidden: _vm.temptabledata.length == parseInt("0") ? "hidden" : false
    },
    on: {
      click: function click($event) {
        return _vm.orderpage("0");
      }
    }
  }, [_c("i", {
    staticClass: "absolute inset-x-0 bottom-0 h-5 fa-regular fa-square-caret-down",
    staticStyle: {
      color: "#4B5563"
    },
    attrs: {
      id: _vm.tableid + "-icon-0"
    }
  })])])]) : _vm.typefirstcol === "string" ? _c("div", [_c("div", {
    staticClass: "flex justify-between gap-4"
  }, [_c("div", [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\tNama label\r\n\t\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "relative text-right font-semibold w-1/6",
    attrs: {
      hidden: _vm.temptabledata.length == parseInt("0") ? "hidden" : false
    },
    on: {
      click: function click($event) {
        return _vm.orderpage("0");
      }
    }
  }, [_c("i", {
    staticClass: "absolute inset-x-0 bottom-0 h-5 fa-regular fa-square-caret-down",
    staticStyle: {
      color: "#4B5563"
    },
    attrs: {
      id: _vm.tableid + "-icon-0"
    }
  })])])]) : _c("div", [_c("div", [_vm._v("\r\n\t\t\t\t\t\t\t\t\tYang pasti bukan NO\r\n\t\t\t\t\t\t\t\t")])])]), _vm._v(" "), _vm._l(_vm.temptheaders, function (theader, indexi) {
    return _c("th", {
      key: indexi
    }, [_c("div", {
      staticClass: "flex justify-between gap-4"
    }, [_c("div", [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(theader) + "\r\n\t\t\t\t\t\t\t\t")]), _vm._v(" "), _c("div", {
      staticClass: "relative text-right font-semibold w-1/6",
      attrs: {
        hidden: _vm.temptabledata.length == parseInt("0") ? "hidden" : false
      }
    }, _vm._l(_vm.templabel, function (tlabel, indexj) {
      return _c("div", {
        key: indexj
      }, [indexi == indexj ? _c("div", [_c("i", {
        staticClass: "absolute inset-x-0 bottom-0 h-5 fa-regular fa-square-caret-down",
        staticStyle: {
          color: "#4B5563"
        },
        attrs: {
          id: _vm.tableid + "-icon-" + (indexj + 1)
        },
        on: {
          click: function click($event) {
            _vm.orderpage(indexj + parseInt("1"));
          }
        }
      })]) : _vm._e()]);
    }), 0)])]);
  }), _vm._v(" "), _vm.tempoption !== [] && _vm.tempurl == true ? _c("th", {
    staticClass: "text-center"
  }, [_vm._v("\r\n\t\t\t\t\t\t\tOption\r\n\t\t\t\t\t\t")]) : _vm._e()], 2)]), _vm._v(" "), _c("tbody", {
    "class": this.temptabledata.length == parseInt("0") ? "bg-white overflow-y-scroll relative" : "bg-white",
    staticStyle: {
      width: "100%"
    }
  }, [_vm._t("default", function () {
    return _vm._l(_vm.temptabledata, function (loopdata, key) {
      return parseInt(key) < _vm.temppage ? _c("tr", {
        key: key
      }, _vm._l(loopdata, function (showdata, keyloop) {
        return _c("td", {
          key: keyloop
        }, [keyloop === 0 ? _c("div", [_c("center", [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(showdata) + "\r\n\t\t\t\t\t\t\t\t\t")])], 1) : typeof showdata == "string" ? _c("div", [_vm._v("\r\n\t\t\t\t\t\t\t\t\t" + _vm._s(showdata) + "\r\n\t\t\t\t\t\t\t\t")]) : _c("div", {
          staticClass: "flex flex-wrap justify-center gap-2"
        }, _vm._l(showdata, function (loopoption, keyshowoption) {
          return _c("div", {
            key: keyshowoption
          }, [keyshowoption == "show" ? _c("div", [_c("router-link", {
            staticClass: "btn-md btn-info",
            attrs: {
              to: loopoption
            }
          }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tDetail\r\n\t\t\t\t\t\t\t\t\t\t\t")])], 1) : keyshowoption == "edit" ? _c("div", [_c("router-link", {
            staticClass: "btn-md btn-warning",
            attrs: {
              to: loopoption
            }
          }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tEdit\r\n\t\t\t\t\t\t\t\t\t\t\t")])], 1) : keyshowoption == "delete" ? _c("div", [_c("button", {
            staticClass: "btn-md btn-danger",
            attrs: {
              type: "button"
            },
            on: {
              click: function click($event) {
                return _vm.deleteData(loopoption);
              }
            }
          }, [_vm._v("\r\n\t\t\t\t\t\t\t\t\t\t\t\tDelete\r\n\t\t\t\t\t\t\t\t\t\t\t")])]) : _vm._e()]);
        }), 0)]);
      }), 0) : _vm._e();
    });
  })], 2)]), _vm._v(" "), _c("div", {
    "class": this.temptabledata.length == parseInt("0") ? "vuetable-footer sticky bottom-0 z-10" : "vuetable-footer"
  }, [_c("div", {
    staticClass: "flex justify-between gap-4"
  }, [_c("div", {
    staticClass: "text-lg my-2",
    domProps: {
      innerHTML: _vm._s(_vm.temptotal)
    }
  }), _vm._v(" "), _vm.temptabledata != [] && parseInt(_vm.tempdata.length) >= parseInt(this.dataPerPage) ? _c("div", [_c("div", {
    staticClass: "pagination"
  }, [_c("div", {
    "class": this.tableid + " py-2 px-4 border-2 border-gray-500 rounded-l-lg pagehover",
    attrs: {
      value: _vm.tablefirstpage
    },
    on: {
      click: function click($event) {
        return _vm.changepage("first");
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-angles-left"
  })]), _vm._v(" "), _c("div", {
    "class": this.tableid + " py-2 px-4 border-2 border-gray-500 pagehover",
    attrs: {
      value: _vm.tablepreviouscurrent
    },
    on: {
      click: function click($event) {
        return _vm.changepage("previous");
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-angle-left"
  })]), _vm._v(" "), _c("div", {
    staticClass: "py-2 px-4 border-2 border-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.tablecurrent)
    }
  }), _vm._v(" "), _c("div", {
    "class": this.tableid + " py-2 px-4 border-2 border-gray-500 pagehover",
    attrs: {
      value: _vm.tablenextcurrent
    },
    on: {
      click: function click($event) {
        return _vm.changepage("next");
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-angle-right"
  })]), _vm._v(" "), _c("div", {
    "class": this.tableid + " py-2 px-4 border-2 border-gray-500 rounded-r-lg pagehover",
    attrs: {
      value: _vm.tablelastpage
    },
    on: {
      click: function click($event) {
        return _vm.changepage("last");
      }
    }
  }, [_c("i", {
    staticClass: "fa-solid fa-angles-right"
  })])])]) : _vm._e()])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/content/category/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/content/category/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d1b72d3c& */ "./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/content/category/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/content/category/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/elements/table.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/elements/table.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=2be95e7e& */ "./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/js/components/elements/table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/elements/table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/content/category/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/content/category/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/elements/table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/elements/table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d1b72d3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=d1b72d3c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/content/category/index.vue?vue&type=template&id=d1b72d3c&");


/***/ }),

/***/ "./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_2be95e7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./table.vue?vue&type=template&id=2be95e7e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/elements/table.vue?vue&type=template&id=2be95e7e&");


/***/ })

}]);