(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/roles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources */ "./resources/js/resources.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers.js");


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




var mustBeGrants = function mustBeGrants(arr) {
  return _.reduce(arr, function (sum, n) {
    return sum + n;
  }, 0);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "roles",
  data: function data() {
    return {
      action: null,
      grants: [],
      roles: [],
      rol: {
        id: null,
        name: null
      },
      rol_grants: [],
      filter: '',
      pagination: {
        sortBy: 'name',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0
      },
      columns: [{
        name: 'name',
        required: true,
        label: 'Rol del Sistema',
        align: 'left',
        field: 'name',
        sortable: true
      }, {
        name: 'created_at',
        required: true,
        label: 'Creado',
        align: 'center',
        field: 'created_at',
        sortable: true
      }, {
        name: 'actions',
        required: true,
        label: 'Acciones',
        align: 'center',
        sortable: false
      }]
    };
  },
  computed: {
    caption: function caption() {
      return this.action === 'edit' ? 'Editar Rol' : 'Crear Rol';
    }
  },
  validations: {
    rol: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3),
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(40)
      }
    },
    rol_grants: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      mustBeGrants: mustBeGrants
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
                return _this.$axios.post('/api/roles/list', {
                  startRow: startRow,
                  rowsPerPage: rowsPerPage,
                  filter: filter,
                  sortBy: sortBy,
                  descending: descending
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
                  _this.roles = r.data.dt.rows;
                  _this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                  _this.pagination.page = page;
                  _this.pagination.rowsPerPage = rowsPerPage;
                  _this.pagination.sortBy = sortBy;
                  _this.pagination.descending = descending;
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
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
    getGrants: function getGrants() {
      var _this2 = this;

      this.$axios.post('/api/roles/grants').then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetGrants"]);
        _this2.grants = r.data.grants;
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetGrants"]);
      });
    },
    toggleGrant: function toggleGrant(idx, v) {
      this.$set(this.rol_grants, idx, this.rol_grants[idx] === 0 ? v : 0);
      this.$v.rol_grants.$touch();
    },
    create: function create() {
      this.action = 'create';
      this.rol.id = this.rol.name = null;
      this.rol_grants = [];
      this.rol_grants = this.$ld.fill(Array(this.grants.length), 0);
      this.$refs.dlg.show();
    },
    edit: function edit(row) {
      var _this3 = this;

      this.action = 'edit';
      this.$axios.post('/api/roles/rolgrants', {
        rol: row.id
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRolGrants"]);
        _this3.rol_grants = _this3.$ld.fill(Array(_this3.grants.length), 0);

        _this3.$ld.each(r.data.grants, function (el) {
          var pos = _this3.$ld.findIndex(_this3.grants, {
            id: el
          });

          if (pos !== -1) _this3.rol_grants[pos] = el;
        });

        Object.assign(_this3.rol, _this3.$ld.omit(row, ['created_at']));

        _this3.$refs.dlg.show();
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRolGrants"]);
      });
    },
    remove: function remove(id) {
      var _this4 = this;

      _helpers__WEBPACK_IMPORTED_MODULE_3__["AskForRemove"].call(this).onOk( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.$axios.post('/api/roles/destroy', {
                  id: id
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["eDestroyRol"]);

                  _this4.onRequest({
                    pagination: _this4.pagination,
                    filter: _this4.filter
                  });

                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["sDestroyRol"]);
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["eDestroyRol"]);
                  console.error(e);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    },
    filterGrants: function filterGrants() {
      return this.$ld.filter(this.rol_grants, function (el) {
        return el !== 0;
      });
    },
    save: function save() {
      var _this5 = this;

      var urlaction = this.action === 'create' ? '/api/roles/store' : '/api/roles/update',
          msg = this.action === 'create' ? [_resources__WEBPACK_IMPORTED_MODULE_1__["eStoreRol"], _resources__WEBPACK_IMPORTED_MODULE_1__["sStoreRol"]] : [_resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateRol"], _resources__WEBPACK_IMPORTED_MODULE_1__["sUpdateRol"]];
      this.$axios.post(urlaction, {
        rol: this.rol,
        grants: this.filterGrants()
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this5, msg[0]);

        _this5.onRequest({
          pagination: _this5.pagination,
          filter: _this5.filter
        });

        _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this5, msg[1]);

        _this5.$refs.dlg.hide();
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this5, msg[0]);
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this6.onRequest({
                pagination: _this6.pagination,
                filter: _this6.filter
              });

            case 2:
              _this6.getGrants();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64& ***!
  \*********************************************************************************************************************************************************************************************************/
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
      _c("q-table", {
        attrs: {
          grid: _vm.$q.screen.xs,
          columns: _vm.columns,
          data: _vm.roles,
          pagination: _vm.pagination,
          "row-key": "id",
          filter: _vm.filter,
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
                  { staticClass: "col-md-8 col-xs-12" },
                  [
                    _c("label", { staticClass: "text-h6" }, [
                      _vm._v("Roles del Sistema")
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
                  { staticClass: "col-md-4 col-xs-12" },
                  [
                    _c("q-input", {
                      attrs: {
                        "bottom-slots": "",
                        dense: "",
                        debounce: "300",
                        label: "Buscar"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "before",
                          fn: function() {
                            return [_c("q-icon", { attrs: { name: "search" } })]
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
            key: "body",
            fn: function(props) {
              return [
                _c(
                  "q-tr",
                  { attrs: { props: props } },
                  [
                    _c("q-td", { key: "name" }, [
                      _vm._v(_vm._s(props.row.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "q-td",
                      { key: "created_at", staticClass: "text-center" },
                      [
                        _vm._v(
                          _vm._s(_vm._f("formatDateTime")(props.row.created_at))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "q-td",
                      { key: "actions", staticClass: "text-center" },
                      [
                        _c(
                          "q-btn",
                          {
                            attrs: {
                              color: "positive",
                              round: "",
                              size: "xs",
                              icon: "mdi-square-edit-outline"
                            },
                            on: {
                              click: function($event) {
                                return _vm.edit(props.row)
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
                              [_vm._v("Editar Rol")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "q-btn",
                          {
                            attrs: {
                              color: "negative",
                              round: "",
                              size: "xs",
                              icon: "mdi-delete"
                            },
                            on: {
                              click: function($event) {
                                return _vm.remove(props.row.id)
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
                              [_vm._v("Eliminar Rol")]
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
                              _vm._s(props.row.name) +
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
                                  [_c("q-item-label", [_vm._v("Creado")])],
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
                                      [_vm._v(_vm._s(props.row.created_at))]
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
      !_vm.$q.loadingBar.onScreen
        ? _c(
            "q-page-sticky",
            { attrs: { position: "top", offset: [18, 15] } },
            [
              _c(
                "q-btn",
                {
                  attrs: { round: "", color: "accent", icon: "mdi-plus" },
                  on: { click: _vm.create }
                },
                [
                  _c(
                    "q-tooltip",
                    {
                      attrs: {
                        delay: 1000,
                        "content-class": "bg-yellow-12 text-black shadow-4",
                        anchor: "top middle",
                        self: "center middle"
                      }
                    },
                    [
                      _vm._v(
                        "\n                Agregar nuevo Rol\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
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
                    attrs: { dense: "", label: "Nombre del Rol" },
                    model: {
                      value: _vm.$v.rol.name.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.rol.name, "$model", $$v)
                      },
                      expression: "$v.rol.name.$model"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "q-scroll-area",
                    { staticStyle: { height: "250px" } },
                    [
                      _c(
                        "q-list",
                        { attrs: { dense: "" } },
                        _vm._l(_vm.grants, function(g, idx) {
                          return _c(
                            "q-item",
                            {
                              key: g.id,
                              attrs: { clickable: "" },
                              on: {
                                click: function($event) {
                                  return _vm.toggleGrant(idx, g.id)
                                }
                              }
                            },
                            [
                              _c("q-item-section", [_vm._v(_vm._s(g.grant))]),
                              _vm._v(" "),
                              _c(
                                "q-item-section",
                                { attrs: { side: "" } },
                                [
                                  _c("q-toggle", {
                                    attrs: { value: _vm.rol_grants[idx] !== 0 },
                                    on: {
                                      input: function(e) {
                                        return _vm.toggleGrant(idx, g.id)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
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

/***/ "./resources/js/views/admin/roles.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/roles.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.vue?vue&type=template&id=843afd64& */ "./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64&");
/* harmony import */ var _roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/roles.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/roles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./roles.vue?vue&type=template&id=843afd64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/roles.vue?vue&type=template&id=843afd64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_roles_vue_vue_type_template_id_843afd64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);