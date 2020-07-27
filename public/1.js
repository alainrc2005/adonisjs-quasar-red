(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action_json.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action_json.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "action_json",
  data: function data() {
    return {
      json: null
    };
  },
  methods: {
    show: function show(details) {
      if (details == null) {
        this.json = 'La acción no requiere detalles';
        return this.$refs.d_json.show();
      }

      this.json = JSON.parse(details);
      if (this.json === null) this.json = details;
      this.$refs.d_json.show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/statlogs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "statlogs",
  props: ['classes', 'icon', 'count', 'caption', 'link']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/logs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/logs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_statlogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/statlogs */ "./resources/js/components/statlogs.vue");
/* harmony import */ var _components_action_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action_json */ "./resources/js/components/action_json.vue");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources */ "./resources/js/resources.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);


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
  name: 'logs',
  components: {
    stats: _components_statlogs__WEBPACK_IMPORTED_MODULE_1__["default"],
    json: _components_action_json__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      details: null,
      startdate: null,
      enddate: null,
      stats: {
        day: 0,
        week: 0,
        month: 0,
        year: 0
      },
      users: [],
      actions_codes: [],
      filters: {
        user: null,
        action: null,
        startdate: null,
        enddate: null,
        machine: null
      },
      actions: [],
      pagination: {
        sortBy: 'datetime',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0
      },
      columns: [{
        name: 'user',
        required: true,
        label: 'Usuario',
        align: 'left',
        field: 'user',
        sortable: true
      }, {
        name: 'action',
        required: true,
        label: 'Acción',
        align: 'left',
        field: 'action',
        sortable: true
      }, {
        name: 'machine',
        required: true,
        label: 'Estación',
        align: 'center',
        field: 'machine',
        sortable: true
      }, {
        name: 'datetime',
        required: true,
        label: 'Fecha',
        align: 'center',
        field: 'datetime',
        sortable: true
      }, {
        align: 'center',
        sortable: false
      }]
    };
  },
  watch: {
    'filters.user': function filtersUser() {
      this.onRequest({
        pagination: this.pagination
      });
    },
    'filters.action': function filtersAction() {
      this.onRequest({
        pagination: this.pagination
      });
    },
    'filters.startdate': function filtersStartdate() {
      this.onRequest({
        pagination: this.pagination
      });
    },
    'filters.enddate': function filtersEnddate() {
      this.onRequest({
        pagination: this.pagination
      });
    },
    'filters.machine': function filtersMachine() {
      this.onRequest({
        pagination: this.pagination
      });
    }
  },
  methods: {
    onRequest: function onRequest(props) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _props$pagination, page, rowsPerPage, sortBy, descending, startRow;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$pagination = props.pagination, page = _props$pagination.page, rowsPerPage = _props$pagination.rowsPerPage, sortBy = _props$pagination.sortBy, descending = _props$pagination.descending;
                startRow = (page - 1) * rowsPerPage;
                _context.next = 4;
                return _this.$axios.post('/api/admin/logs/list', {
                  startRow: startRow,
                  rowsPerPage: rowsPerPage,
                  sortBy: sortBy,
                  descending: descending,
                  filters: _this.filters
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetLogs"]);
                  _this.actions = r.data.dt.rows;
                  _this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                  _this.pagination.page = page;
                  _this.pagination.rowsPerPage = rowsPerPage;
                  _this.pagination.sortBy = sortBy;
                  _this.pagination.descending = descending;
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetLogs"]);
                  console.error(e);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getData: function getData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$axios.post('/api/admin/logs/getData').then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDataLogs"]);
                  _this2.users = r.data.users;
                  _this2.actions_codes = r.data.actions_codes;
                  Object.assign(_this2.stats, r.data.stats);
                })["catch"](function (e) {
                  console.log(e);
                  _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDataLogs"]);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getDetails: function getDetails(id) {
      var _this3 = this;

      this.$axios.post('/api/admin/logs/getDetails', {
        id: id
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDetailsLog"]);

        _this3.$refs.s_json.show(r.data.details);
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDetailsLog"]);
      });
    },
    validStartDate: function validStartDate(date) {
      return this.filters.enddate === null || date <= moment__WEBPACK_IMPORTED_MODULE_5___default()(this.filters.enddate, 'DD/MM/YYYY').format('YYYY/MM/DD');
    },
    validEndDate: function validEndDate(date) {
      return this.filters.startdate === null || date >= moment__WEBPACK_IMPORTED_MODULE_5___default()(this.filters.startdate, 'DD/MM/YYYY').format('YYYY/MM/DD');
    },
    showDetails: function showDetails(id) {
      var _this4 = this;

      this.$axios.post('/api/admin/logs/getDetails', {
        id: id
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDetailsLog"]);

        _this4.$refs.s_json.show(r.data.details);
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_4__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetDetailsLog"]);
      });
    },
    cardFilter: function cardFilter(type) {
      var ds = moment__WEBPACK_IMPORTED_MODULE_5___default()(),
          de = moment__WEBPACK_IMPORTED_MODULE_5___default()();

      switch (type) {
        case 'day':
          this.filters.startdate = this.filters.enddate = ds.format('DD/MM/YYYY');
          break;

        case 'week':
          this.filters.startdate = ds.startOf('week').format('DD/MM/YYYY');
          this.filters.enddate = de.endOf('week').format('DD/MM/YYYY');
          break;

        case 'month':
          this.filters.startdate = ds.startOf('month').format('DD/MM/YYYY');
          this.filters.enddate = de.endOf('month').format('DD/MM/YYYY');
          break;

        case 'year':
          this.filters.startdate = ds.startOf('year').format('DD/MM/YYYY');
          this.filters.enddate = de.endOf('year').format('DD/MM/YYYY');
          break;
      }
    }
  },
  beforeMount: function beforeMount() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this5.getData();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  mounted: function mounted() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this6.onRequest({
                pagination: _this6.pagination
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icon-font[data-v-34ba89ce] {\n    font-size: 4.4em\n}\n.count-font[data-v-34ba89ce] {\n    font-size: 2.5em\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action_json.vue?vue&type=template&id=46da6854&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action_json.vue?vue&type=template&id=46da6854& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-dialog",
    { ref: "d_json" },
    [
      _c(
        "q-card",
        { staticClass: "q-dialog-plugin" },
        [
          _c(
            "q-card-section",
            { staticClass: "row no-padding" },
            [
              _c(
                "q-toolbar",
                { staticClass: "bg-primary text-white" },
                [
                  _c("q-toolbar-title", [_vm._v("Detalle de la Acción")]),
                  _vm._v(" "),
                  _c(
                    "q-btn",
                    {
                      directives: [
                        { name: "close-popup", rawName: "v-close-popup" }
                      ],
                      attrs: { round: "", dense: "", flat: "", icon: "close" }
                    },
                    [_c("q-tooltip", [_vm._v("Cerrar")])],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("q-card-section", [_c("pre", [_vm._v(_vm._s(_vm.json))])])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-card",
    { staticClass: "text-white", class: _vm.classes, attrs: { inline: "" } },
    [
      _c("q-card-section", { staticClass: "q-py-xs" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col q-py-xs" },
            [
              _c("q-btn", {
                staticClass: "shadow-24 icon-font",
                attrs: { size: "lg", round: "", icon: _vm.icon },
                on: {
                  click: function($event) {
                    return _vm.send()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col text-right" }, [
            _c("div", { staticClass: "count-font" }, [
              _vm._v(_vm._s(_vm.count))
            ]),
            _vm._v(
              "\n                " + _vm._s(_vm.caption) + "\n            "
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("q-separator"),
      _vm._v(" "),
      _c(
        "q-card-actions",
        { staticClass: "q-py-none" },
        [
          _c(
            "q-btn",
            {
              attrs: { flat: "" },
              on: {
                click: function($event) {
                  return _vm.$emit("clickedFilter")
                }
              }
            },
            [_vm._v("Filtrar")]
          ),
          _vm._v(" "),
          _c("q-space"),
          _vm._v(" "),
          _c("q-btn", {
            attrs: { round: "", flat: "", icon: "arrow_forward" },
            on: {
              click: function($event) {
                return _vm.send()
              }
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-page",
    { staticClass: "q-ma-md", attrs: { padding: "" } },
    [
      _c("div", { staticClass: "row q-gutter-lg justify-center" }, [
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-2" },
          [
            _c("stats", {
              attrs: {
                classes: "bg-blue-6 text-white",
                icon: "mdi-alpha-d-box",
                caption: "Día",
                count: _vm.stats.day
              },
              on: {
                clickedFilter: function($event) {
                  return _vm.cardFilter("day")
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-2" },
          [
            _c("stats", {
              attrs: {
                classes: "bg-red-6",
                icon: "mdi-alpha-s-box",
                caption: "Semana",
                count: _vm.stats.week
              },
              on: {
                clickedFilter: function($event) {
                  return _vm.cardFilter("week")
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-2" },
          [
            _c("stats", {
              attrs: {
                classes: "bg-brown-6",
                icon: "mdi-alpha-m-box",
                caption: "Mes",
                count: _vm.stats.month
              },
              on: {
                clickedFilter: function($event) {
                  return _vm.cardFilter("month")
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-2" },
          [
            _c("stats", {
              attrs: {
                classes: "bg-purple-6",
                icon: "mdi-alpha-a-box",
                caption: "Año",
                count: _vm.stats.year
              },
              on: {
                clickedFilter: function($event) {
                  return _vm.cardFilter("year")
                }
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("q-table", {
        attrs: {
          grid: _vm.$q.screen.xs,
          columns: _vm.columns,
          data: _vm.actions,
          pagination: _vm.pagination,
          "row-key": "id",
          "rows-per-page-options": [10, 25, 50],
          "binary-state-sort": "",
          dense: ""
        },
        on: {
          "update:pagination": function($event) {
            _vm.pagination = $event
          },
          request: _vm.onRequest
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "div",
                  { staticClass: "col-md-12 text-center" },
                  [
                    _c("label", { staticClass: "text-h6" }, [
                      _vm._v("Acciones Realizadas al Sistema")
                    ]),
                    _vm._v(" "),
                    _c("q-badge", {
                      attrs: {
                        color: "green",
                        align: "top",
                        label: _vm.pagination.rowsNumber
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-md-12 q-px-sm" },
                  [
                    _c("q-select", {
                      attrs: {
                        "option-label": "username",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": "",
                        dense: "",
                        "options-dense": "",
                        options: _vm.users,
                        clearable: "",
                        label: "Usuario"
                      },
                      model: {
                        value: _vm.filters.user,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "user", $$v)
                        },
                        expression: "filters.user"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-md-12 q-px-sm" },
                  [
                    _c("q-select", {
                      attrs: {
                        "option-label": "description",
                        "option-value": "code",
                        dense: "",
                        "options-dense": "",
                        options: _vm.actions_codes,
                        clearable: "",
                        label: "Acción"
                      },
                      model: {
                        value: _vm.filters.action,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "action", $$v)
                        },
                        expression: "filters.action"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-md-4 q-px-sm" },
                  [
                    _c(
                      "q-input",
                      {
                        attrs: {
                          clearable: "",
                          dense: "",
                          placeholder: "Fecha Inicial"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "append",
                            fn: function() {
                              return [
                                _c("q-icon", { attrs: { name: "event" } })
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.filters.startdate,
                          callback: function($$v) {
                            _vm.$set(_vm.filters, "startdate", $$v)
                          },
                          expression: "filters.startdate"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "q-menu",
                          {
                            ref: "startDateProxy",
                            attrs: { anchor: "top left", self: "top left" }
                          },
                          [
                            _c("q-date", {
                              attrs: {
                                minimal: "",
                                options: _vm.validStartDate,
                                mask: "DD/MM/YYYY"
                              },
                              on: {
                                input: function() {
                                  return _vm.$refs.startDateProxy.hide()
                                }
                              },
                              model: {
                                value: _vm.filters.startdate,
                                callback: function($$v) {
                                  _vm.$set(_vm.filters, "startdate", $$v)
                                },
                                expression: "filters.startdate"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-md-4 q-px-sm" },
                  [
                    _c("q-input", {
                      attrs: {
                        clearable: "",
                        dense: "",
                        placeholder: "Fecha Final"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "append",
                          fn: function() {
                            return [_c("q-icon", { attrs: { name: "event" } })]
                          },
                          proxy: true
                        },
                        {
                          key: "default",
                          fn: function() {
                            return [
                              _c(
                                "q-menu",
                                {
                                  ref: "endDateProxy",
                                  attrs: {
                                    anchor: "top left",
                                    self: "top left"
                                  }
                                },
                                [
                                  _c("q-date", {
                                    attrs: {
                                      minimal: "",
                                      options: _vm.validEndDate,
                                      mask: "DD/MM/YYYY"
                                    },
                                    on: {
                                      input: function() {
                                        return _vm.$refs.endDateProxy.hide()
                                      }
                                    },
                                    model: {
                                      value: _vm.filters.enddate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filters, "enddate", $$v)
                                      },
                                      expression: "filters.enddate"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.filters.enddate,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "enddate", $$v)
                        },
                        expression: "filters.enddate"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-md-4 q-px-sm" },
                  [
                    _c("q-input", {
                      attrs: {
                        debounce: "500",
                        clearable: "",
                        dense: "",
                        label: "Estación"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "append",
                          fn: function() {
                            return [
                              _c("q-icon", {
                                attrs: { name: "mdi-desktop-tower-monitor" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.filters.machine,
                        callback: function($$v) {
                          _vm.$set(_vm.filters, "machine", $$v)
                        },
                        expression: "filters.machine"
                      }
                    })
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "div",
                  {
                    staticClass:
                      "full-width row flex-center text-primary q-gutter-sm"
                  },
                  [
                    _c("q-icon", {
                      attrs: { size: "2em", name: "sentiment_dissatisfied" }
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("No existen acciones que mostrar")]),
                    _vm._v(" "),
                    _c("q-icon", {
                      attrs: { size: "2em", name: "sentiment_dissatisfied" }
                    })
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "body",
            fn: function(props) {
              return [
                _c(
                  "q-tr",
                  { attrs: { props: props } },
                  [
                    _c("q-td", { key: "user" }, [
                      _vm._v(_vm._s(props.row.user))
                    ]),
                    _vm._v(" "),
                    _c("q-td", { key: "action" }, [
                      _vm._v(_vm._s(props.row.action))
                    ]),
                    _vm._v(" "),
                    _c("q-td", { key: "machine", staticClass: "text-center" }, [
                      _vm._v(_vm._s(props.row.machine))
                    ]),
                    _vm._v(" "),
                    _c(
                      "q-td",
                      { key: "datetime", staticClass: "text-center" },
                      [
                        _vm._v(
                          _vm._s(_vm._f("formatDateTime")(props.row.datetime))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "q-td",
                      { key: "act", staticClass: "text-center" },
                      [
                        _c(
                          "q-btn",
                          {
                            attrs: {
                              color: "primary",
                              round: "",
                              size: "xs",
                              icon: "visibility"
                            },
                            on: {
                              click: function($event) {
                                return _vm.showDetails(props.row.id)
                              }
                            }
                          },
                          [
                            _c(
                              "q-tooltip",
                              {
                                attrs: {
                                  "content-class":
                                    "bg-yellow-12 text-black shadow-4"
                                }
                              },
                              [_vm._v("Visualizar Detalle")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item",
            fn: function(props) {
              return [
                _c(
                  "div",
                  {
                    staticClass:
                      "q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                  },
                  [
                    _c(
                      "q-card",
                      [
                        _c("q-card-section", [
                          _vm._v(
                            "\n                        " +
                              _vm._s(props.row.action) +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("q-separator"),
                        _vm._v(" "),
                        _c(
                          "q-list",
                          { attrs: { dense: "" } },
                          [
                            _c(
                              "q-item",
                              [
                                _c(
                                  "q-item-section",
                                  [_c("q-item-label", [_vm._v("Usuario")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    _c(
                                      "q-item-label",
                                      { attrs: { caption: "" } },
                                      [_vm._v(_vm._s(props.row.user))]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "q-item",
                              [
                                _c(
                                  "q-item-section",
                                  [_c("q-item-label", [_vm._v("Estación")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    _c(
                                      "q-item-label",
                                      { attrs: { caption: "" } },
                                      [_vm._v(_vm._s(props.row.machine))]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "q-item",
                              [
                                _c(
                                  "q-item-section",
                                  [_c("q-item-label", [_vm._v("Fecha")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "q-item-section",
                                  { attrs: { side: "" } },
                                  [
                                    _c(
                                      "q-item-label",
                                      { attrs: { caption: "" } },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatDateTime")(
                                              props.row.datetime
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("q-separator"),
                        _vm._v(" "),
                        _c(
                          "q-card-actions",
                          { attrs: { align: "center" } },
                          [
                            _c("q-btn", {
                              attrs: {
                                color: "primary",
                                rounded: "",
                                size: "xs",
                                icon: "visibility",
                                label: "Visualizar Detalle"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.showDetails(props.row.id)
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("json", { ref: "s_json" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/action_json.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/action_json.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_json.vue?vue&type=template&id=46da6854& */ "./resources/js/components/action_json.vue?vue&type=template&id=46da6854&");
/* harmony import */ var _action_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_json.vue?vue&type=script&lang=js& */ "./resources/js/components/action_json.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _action_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/action_json.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/action_json.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/action_json.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./action_json.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action_json.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_action_json_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/action_json.vue?vue&type=template&id=46da6854&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/action_json.vue?vue&type=template&id=46da6854& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./action_json.vue?vue&type=template&id=46da6854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action_json.vue?vue&type=template&id=46da6854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_action_json_vue_vue_type_template_id_46da6854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/statlogs.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/statlogs.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statlogs.vue?vue&type=template&id=34ba89ce&scoped=true& */ "./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true&");
/* harmony import */ var _statlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statlogs.vue?vue&type=script&lang=js& */ "./resources/js/components/statlogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& */ "./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _statlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34ba89ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/statlogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/statlogs.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/statlogs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./statlogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=style&index=0&id=34ba89ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_style_index_0_id_34ba89ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./statlogs.vue?vue&type=template&id=34ba89ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/statlogs.vue?vue&type=template&id=34ba89ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statlogs_vue_vue_type_template_id_34ba89ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/logs.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/logs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.vue?vue&type=template&id=239cef2e& */ "./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e&");
/* harmony import */ var _logs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logs.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/logs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _logs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/logs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/logs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/logs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./logs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/logs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./logs.vue?vue&type=template&id=239cef2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/logs.vue?vue&type=template&id=239cef2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logs_vue_vue_type_template_id_239cef2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);