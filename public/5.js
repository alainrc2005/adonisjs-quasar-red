(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-avatar-editor-improved */ "./node_modules/vue-avatar-editor-improved/src/index.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "users",
  components: {
    VueAvatar: vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_4__["VueAvatar"]
  },
  data: function data() {
    return {
      action: null,
      users: [],
      user: {
        id: null,
        username: null,
        email: null,
        roles: []
      },
      rotation: 0,
      scale: 1,
      avatarReady: false,
      avatarTime: this.$ld.now(),
      roles: [],
      filter: '',
      pagination: {
        sortBy: 'username',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0
      },
      columns: [{
        name: 'username',
        required: true,
        label: 'Nombre y Apellidos',
        align: 'left',
        field: 'username',
        sortable: true
      }, {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
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
  validations: {
    user: {
      username: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3)
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["email"]
      },
      roles: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      }
    }
  },
  computed: {
    caption: function caption() {
      return this.action === 'edit' ? 'Editar Usuario' : 'Crear Usuario';
    },
    avatar: function avatar() {
      return "/user/photo/".concat(this.user.id, "?").concat(this.avatarTime);
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
                return _this.$axios.post('/api/users/list', {
                  startRow: startRow,
                  rowsPerPage: rowsPerPage,
                  filter: filter,
                  sortBy: sortBy,
                  descending: descending
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUsers"]);
                  _this.users = r.data.dt.rows;
                  _this.pagination.rowsNumber = r.data.dt.recordsFiltered;
                  _this.pagination.page = page;
                  _this.pagination.rowsPerPage = rowsPerPage;
                  _this.pagination.sortBy = sortBy;
                  _this.pagination.descending = descending;
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUsers"]);
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
    getRolesAreasForSelect: function getRolesAreasForSelect() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$axios.post('/api/roles/forselect').then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
                  _this2.roles = r.data.roles;
                })["catch"](function (e) {
                  console.log(e);
                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    create: function create() {
      this.action = 'create';
      this.user.id = this.user.username = this.user.email = null;
      this.user.roles = [];
      this.$refs.dlg.show();
    },
    edit: function edit(id) {
      var _this3 = this;

      this.$axios.post('/api/user/get', {
        id: id
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUser"]);
        if (r.data.user.photo === 'PHOTO') _this3.avatarReady = true;
        delete r.data.user.photo;
        Object.assign(_this3.user, r.data.user);
        _this3.action = 'edit';
        _this3.avatarTime = _this3.$ld.now();

        _this3.$refs.dlg.show();
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUser"]);
      });
    },
    remove: function remove(id) {
      var _this4 = this;

      _helpers__WEBPACK_IMPORTED_MODULE_3__["AskForRemove"].call(this).onOk( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.$axios.post('/api/user/destroy', {
                  id: id
                }).then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["eDestroyUser"]);

                  _this4.onRequest({
                    pagination: _this4.pagination,
                    filter: _this4.filter
                  });

                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["sDestroyUser"]);
                })["catch"](function (e) {
                  _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this4, _resources__WEBPACK_IMPORTED_MODULE_1__["eDestroyUser"]);
                  console.log(e);
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    },
    banned: function banned(v, row) {
      var _this5 = this;

      var rv = (row.banned ^ '1') + '';
      this.$axios.post('/api/user/banned', {
        id: row.id,
        banned: rv
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this5, _resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateUser"]);
        row.banned = rv;
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this5, _resources__WEBPACK_IMPORTED_MODULE_1__["sUpdateUser"]);
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this5, _resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateUser"]);
      });
    },
    save: function save() {
      var _this6 = this;

      var urlaction = this.action === 'create' ? '/api/user/store' : '/api/user/update',
          msg = this.action === 'create' ? [_resources__WEBPACK_IMPORTED_MODULE_1__["eStoreUser"], _resources__WEBPACK_IMPORTED_MODULE_1__["sStoreUser"]] : [_resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateUser"], _resources__WEBPACK_IMPORTED_MODULE_1__["sUpdateUser"]];
      this.user.photo = this.avatarReady ? this.$refs.avatar.getImageScaled().toDataURL() : null;
      this.$axios.post(urlaction, _objectSpread({}, this.user)).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this6, msg[0]);

        _this6.onRequest({
          pagination: _this6.pagination,
          filter: _this6.filter
        });

        _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this6, msg[1]);

        _this6.$refs.dlg.hide();
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this6, msg[0]);
      });
    },
    removeAvatar: function removeAvatar() {
      this.$refs.avatar.loadImage('/user/photo/0');
      this.avatarReady = false;
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this7.onRequest({
                pagination: _this7.pagination,
                filter: _this7.filter
              });

            case 2:
              _context4.next = 4;
              return _this7.getRolesAreasForSelect();

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce& ***!
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
          data: _vm.users,
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
                      _vm._v("Usuarios del Sistema")
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
                      _vm._v(_vm._s(props.row.username))
                    ]),
                    _vm._v(" "),
                    _c("q-td", { key: "email" }, [
                      _vm._v(_vm._s(props.row.email))
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
                              icon: "mdi-account-edit"
                            },
                            on: {
                              click: function($event) {
                                return _vm.edit(props.row.id)
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
                              [_vm._v("Editar Usuario")]
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
                              icon: "mdi-account-minus"
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
                              [_vm._v("Eliminar Usuario")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "q-toggle",
                          {
                            attrs: {
                              "keep-color": "",
                              color: "warning",
                              value: props.row.banned === "1"
                            },
                            on: {
                              input: function(e) {
                                return _vm.banned(e, props.row)
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
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      props.row.banned === "1"
                                        ? "Desactivar"
                                        : "Activar"
                                    ) +
                                    "\n                        "
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
                        _c(
                          "q-card-section",
                          [
                            _c(
                              "q-toggle",
                              {
                                attrs: {
                                  label: props.row.username,
                                  "keep-color": "",
                                  color: "warning",
                                  value: props.row.banned === "1"
                                },
                                on: {
                                  input: function(e) {
                                    return _vm.banned(e, props.row)
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
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          props.row.banned === "1"
                                            ? "Desactivar"
                                            : "Activar"
                                        ) +
                                        "\n                            "
                                    )
                                  ]
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
                          "q-list",
                          { attrs: { dense: "" } },
                          [
                            _c(
                              "q-item",
                              [
                                _c(
                                  "q-item-section",
                                  [_c("q-item-label", [_vm._v("Email")])],
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
                                      [_vm._v(_vm._s(props.row.email))]
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
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatDateTime")(
                                              props.row.created_at
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
                                color: "positive",
                                rounded: "",
                                size: "xs",
                                icon: "mdi-account-edit",
                                label: "Editar"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.edit(props.row.id)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("q-btn", {
                              attrs: {
                                color: "negative",
                                rounded: "",
                                size: "xs",
                                icon: "mdi-account-minus",
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
                        "\n                Agregar nuevo Usuario\n            "
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
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c("vue-avatar", {
                          ref: "avatar",
                          attrs: {
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            image: _vm.avatar,
                            scale: _vm.scale,
                            rotation: _vm.rotation,
                            color: [255, 255, 255, 1]
                          },
                          on: {
                            "select-file": function($event) {
                              _vm.avatarReady = true
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "fit full-width row wrap justify-center items-start content-center"
                        },
                        [
                          _vm.avatarReady
                            ? _c("q-slider", {
                                attrs: {
                                  min: 1,
                                  max: 3,
                                  step: 0.02,
                                  label: "",
                                  "label-value": "Zoom: " + _vm.scale,
                                  color: "purple"
                                },
                                model: {
                                  value: _vm.scale,
                                  callback: function($$v) {
                                    _vm.scale = $$v
                                  },
                                  expression: "scale"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.avatarReady
                            ? _c("q-slider", {
                                attrs: {
                                  min: 0,
                                  max: 360,
                                  step: 1,
                                  label: "",
                                  "label-value": "Rotación: " + _vm.rotation,
                                  color: "light-green"
                                },
                                model: {
                                  value: _vm.rotation,
                                  callback: function($$v) {
                                    _vm.rotation = $$v
                                  },
                                  expression: "rotation"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.avatarReady
                            ? _c("q-btn", {
                                attrs: {
                                  color: "red",
                                  size: "xs",
                                  label: "Eliminar"
                                },
                                on: { click: _vm.removeAvatar }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("q-btn", {
                            attrs: {
                              size: "xs",
                              color: "primary",
                              label: "Cambiar"
                            },
                            on: {
                              click: function($event) {
                                return _vm.$refs.avatar.clicked()
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("q-input", {
                    attrs: {
                      dense: "",
                      label: "Nombre y Apellidos",
                      error: _vm.$v.user.username.$invalid,
                      "hide-bottom-space": ""
                    },
                    model: {
                      value: _vm.$v.user.username.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.user.username, "$model", $$v)
                      },
                      expression: "$v.user.username.$model"
                    }
                  }),
                  _vm._v(" "),
                  _c("q-input", {
                    attrs: {
                      dense: "",
                      label: "Correo Electrónico",
                      error: _vm.$v.user.email.$invalid,
                      "hide-bottom-space": ""
                    },
                    model: {
                      value: _vm.$v.user.email.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.user.email, "$model", $$v)
                      },
                      expression: "$v.user.email.$model"
                    }
                  }),
                  _vm._v(" "),
                  _c("q-select", {
                    attrs: {
                      dense: "",
                      label: "Roles",
                      options: _vm.roles,
                      "option-value": "id",
                      "options-dense": "",
                      "option-label": "name",
                      multiple: "",
                      "emit-value": "",
                      "map-options": "",
                      "use-chips": "",
                      "hide-bottom-space": "",
                      error: _vm.$v.user.roles.$invalid
                    },
                    model: {
                      value: _vm.user.roles,
                      callback: function($$v) {
                        _vm.$set(_vm.user, "roles", $$v)
                      },
                      expression: "user.roles"
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

/***/ "./resources/js/views/admin/users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=83d039ce& */ "./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce&");
/* harmony import */ var _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=template&id=83d039ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/users.vue?vue&type=template&id=83d039ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_83d039ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);