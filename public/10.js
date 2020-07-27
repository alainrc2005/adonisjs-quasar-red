(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/resources.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/resources.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grants */ "./resources/js/grants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/helpers.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources */ "./resources/js/resources.js");
/* harmony import */ var _components_menu_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu_vert */ "./resources/js/components/menu_vert.vue");
/* harmony import */ var _components_backtotop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/backtotop */ "./resources/js/components/backtotop.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "resources",
  components: {
    menuVert: _components_menu_vert__WEBPACK_IMPORTED_MODULE_4__["default"],
    backtotop: _components_backtotop__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      action: 'store',
      resources: [],
      resource: {
        id: null,
        description: null
      },
      filter: '',
      pagination: {
        sortBy: 'description',
        descending: false,
        page: 1,
        rowsPerPage: 25,
        rowsNumber: 0
      },
      columns: [{
        align: 'center',
        sortable: false
      }, {
        name: 'description',
        required: true,
        label: 'Recurso',
        align: 'left',
        field: 'description',
        sortable: true
      }, {
        name: 'updated_at',
        required: true,
        label: 'Actualizado',
        align: 'center',
        field: 'updated_at',
        sortable: true
      }]
    };
  },
  validations: {
    resource: {
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["minLength"])(3)
      }
    }
  },
  computed: {
    isManageable: function isManageable() {
      return _.indexOf(this.$store.state.main.grants, _grants__WEBPACK_IMPORTED_MODULE_1__["gResources"]) !== -1;
    },
    caption: function caption() {
      return this.action === 'store' ? 'Crear Recurso' : 'Editar Recurso';
    }
  },
  methods: {
    onRequest: function onRequest(props) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _props$pagination, page, rowsPerPage, sortBy, descending, filter, startRow;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props$pagination = props.pagination, page = _props$pagination.page, rowsPerPage = _props$pagination.rowsPerPage, sortBy = _props$pagination.sortBy, descending = _props$pagination.descending;
                filter = props.filter;
                startRow = (page - 1) * rowsPerPage;
                _context.next = 5;
                return _this.$axios.post('/api/resources/list', {
                  startRow: startRow,
                  rowsPerPage: rowsPerPage,
                  filter: filter,
                  sortBy: sortBy,
                  descending: descending
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetResources"]);
                  _this.resources = r.data.dt.rows;
                  _this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                  _this.pagination.page = page;
                  _this.pagination.rowsPerPage = rowsPerPage;
                  _this.pagination.sortBy = sortBy;
                  _this.pagination.descending = descending;
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_3__["eGetResources"]);
                  console.error(e);
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    create: function create() {
      this.action = 'store';
      this.resource.id = this.resource.description = null;
      this.$refs.dlg.show();
    },
    edit: function edit(row) {
      this.action = 'update';
      this.resource.id = row.id;
      this.resource.description = row.description;
      this.$refs.dlg.show();
    },
    remove: function remove(id) {
      var _this2 = this;

      _helpers__WEBPACK_IMPORTED_MODULE_2__["AskForRemove"].call(this).onOk(function (_) {
        _this2.$axios.post('/api/resource/destroy', {
          id: id
        }).then(function (r) {
          if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_3__["eDestroyResource"]);

          _this2.onRequest({
            pagination: _this2.pagination,
            filter: _this2.filter
          });

          _helpers__WEBPACK_IMPORTED_MODULE_2__["Success"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_3__["sDestroyResource"]);
        })["catch"](function (e) {
          _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_3__["eDestroyResource"]);
          console.log(e);
        });
      });
    },
    save: function save() {
      var _this3 = this;

      var urlAction = '/api/resource/' + this.action,
          msg = this.action === 'store' ? [_resources__WEBPACK_IMPORTED_MODULE_3__["eStoreResource"], _resources__WEBPACK_IMPORTED_MODULE_3__["sStoreResource"]] : [_resources__WEBPACK_IMPORTED_MODULE_3__["eUpdateResource"], _resources__WEBPACK_IMPORTED_MODULE_3__["sUpdateResource"]];
      this.$axios.post(urlAction, _objectSpread({}, this.resource)).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this3, msg[0]);

        _this3.onRequest({
          pagination: _this3.pagination,
          filter: _this3.filter
        });

        _helpers__WEBPACK_IMPORTED_MODULE_2__["Success"].call(_this3, msg[1]);

        _this3.$refs.dlg.hide();
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this3, msg[0]);
      });
    }
  },
  mounted: function mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: this.filter
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/resources.vue?vue&type=template&id=25bf85b6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/resources.vue?vue&type=template&id=25bf85b6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "background-world" }),
      _vm._v(" "),
      _c(
        "q-card",
        [
          _c(
            "q-card-section",
            { staticClass: "row no-padding" },
            [
              _c(
                "q-toolbar",
                { staticClass: "bg-primary text-white rounded-borders" },
                [
                  _c("q-icon", { attrs: { name: "mdi-notebook", size: "md" } }),
                  _vm._v(" "),
                  _c(
                    "q-toolbar-title",
                    [
                      _vm._v(
                        "\n                    Gestión de Recursos\n                    "
                      ),
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
                  _c("q-space"),
                  _vm._v(" "),
                  _c(
                    "q-btn",
                    {
                      attrs: { round: "", flat: "", icon: "mdi-plus" },
                      on: { click: _vm.create }
                    },
                    [
                      _c(
                        "q-tooltip",
                        {
                          attrs: {
                            delay: 500,
                            "content-class": "bg-yellow-12 text-black shadow-4",
                            anchor: "top middle",
                            self: "center middle"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Agregar Recurso\n                    "
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
          _c("q-table", {
            attrs: {
              grid: _vm.$q.screen.xs,
              columns: _vm.columns,
              filter: _vm.filter,
              data: _vm.resources,
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
                      { staticClass: "col-md-12 col-xs-12 text-center" },
                      [
                        _c("q-input", {
                          attrs: {
                            "bottom-slots": "",
                            dense: "",
                            debounce: "500",
                            label: "Buscar"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "before",
                              fn: function() {
                                return [
                                  _c("q-icon", { attrs: { name: "search" } })
                                ]
                              },
                              proxy: true
                            },
                            {
                              key: "append",
                              fn: function() {
                                return [
                                  _vm.filter !== ""
                                    ? _c("q-icon", {
                                        staticClass: "cursor-pointer",
                                        attrs: { name: "close" },
                                        on: {
                                          click: function($event) {
                                            _vm.filter = ""
                                          }
                                        }
                                      })
                                    : _vm._e()
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.filter,
                            callback: function($$v) {
                              _vm.filter = $$v
                            },
                            expression: "filter"
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
                        _c("span", [
                          _vm._v("No existen Velocidades que mostrar")
                        ]),
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
                        _c(
                          "q-td",
                          { key: "action" },
                          [
                            _vm.isManageable
                              ? _c("menu-vert", {
                                  on: {
                                    clkedit: function($event) {
                                      return _vm.edit(props.row)
                                    },
                                    clkremove: function($event) {
                                      return _vm.remove(props.row.id)
                                    }
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("q-td", [_vm._v(_vm._s(props.row.description))]),
                        _vm._v(" "),
                        _c("q-td", { staticClass: "text-center" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatDateTime")(props.row.updated_at)
                            )
                          )
                        ])
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
                                "\n                            " +
                                  _vm._s(props.row.description) +
                                  "\n                        "
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
                                      [
                                        _c("q-item-label", [
                                          _vm._v("Actualizado")
                                        ])
                                      ],
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
                                                  props.row.updated_at
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
                            _vm.isManageable
                              ? _c(
                                  "q-card-actions",
                                  { attrs: { align: "center" } },
                                  [
                                    _c("q-btn", {
                                      attrs: {
                                        color: "positive",
                                        rounded: "",
                                        size: "xs",
                                        icon: "mdi-square-edit-outline",
                                        label: "Editar"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.edit(props.row)
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("q-btn", {
                                      attrs: {
                                        color: "negative",
                                        rounded: "",
                                        size: "xs",
                                        icon: "mdi-delete",
                                        label: "Eliminar"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.remove(props.row.id)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
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
          _c("q-card-section")
        ],
        1
      ),
      _vm._v(" "),
      _c("backtotop"),
      _vm._v(" "),
      _c(
        "q-dialog",
        { ref: "dlg" },
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
                      _c("q-toolbar-title", [_vm._v(_vm._s(_vm.caption))]),
                      _vm._v(" "),
                      _c(
                        "q-btn",
                        {
                          directives: [
                            { name: "close-popup", rawName: "v-close-popup" }
                          ],
                          attrs: {
                            round: "",
                            dense: "",
                            flat: "",
                            icon: "close"
                          }
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
              _c(
                "q-card-section",
                [
                  _c("q-input", {
                    attrs: {
                      label: "Descripción",
                      error: _vm.$v.resource.description.$invalid
                    },
                    model: {
                      value: _vm.$v.resource.description.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.resource.description, "$model", $$v)
                      },
                      expression: "$v.resource.description.$model"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "q-card-actions",
                { attrs: { align: "right" } },
                [
                  _c("q-btn", {
                    attrs: {
                      disable: _vm.$v.$invalid,
                      color: "positive",
                      label: "Guardar"
                    },
                    on: { click: _vm.save }
                  }),
                  _vm._v(" "),
                  _c("q-btn", {
                    directives: [
                      { name: "close-popup", rawName: "v-close-popup" }
                    ],
                    attrs: { color: "negative", label: "Cancelar" }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/resources.vue":
/*!******************************************!*\
  !*** ./resources/js/views/resources.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=25bf85b6& */ "./resources/js/views/resources.vue?vue&type=template&id=25bf85b6&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./resources/js/views/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/resources.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/resources.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/resources.vue?vue&type=template&id=25bf85b6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/resources.vue?vue&type=template&id=25bf85b6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=25bf85b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/resources.vue?vue&type=template&id=25bf85b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_25bf85b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);