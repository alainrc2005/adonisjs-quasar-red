(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources */ "./resources/js/resources.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./resources/js/helpers.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grants */ "./resources/js/grants.js");
/* harmony import */ var vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-avatar-editor-improved */ "./node_modules/vue-avatar-editor-improved/src/index.js");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "profile",
  components: {
    VueAvatar: vue_avatar_editor_improved__WEBPACK_IMPORTED_MODULE_5__["VueAvatar"]
  },
  data: function data() {
    return {
      roles: [],
      areas: [],
      tab: 'profile',
      user: {
        id: null,
        name: null,
        email: null,
        roles: [],
        areas: []
      },
      passwords: {
        oldpassword: null,
        newpassword: null,
        renewpassword: null
      },
      ispwd: true,
      isnpwd: true,
      isrnpwd: true,
      rotation: 0,
      scale: 1,
      avatarReady: false,
      avatarTime: this.$ld.now()
    };
  },
  validations: {
    user: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(3)
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["email"]
      }
    },
    passwords: {
      oldpassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(5),
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(32)
      },
      newpassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(5),
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(32)
      },
      renewpassword: {
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["sameAs"])('newpassword')
      }
    }
  },
  computed: {
    isEmailManageable: function isEmailManageable() {
      return _.indexOf(this.$store.state.main.grants, _grants__WEBPACK_IMPORTED_MODULE_4__["gEmailProfile"]) !== -1;
    },
    avatar: function avatar() {
      return "/user/photo/".concat(this.user.id, "?").concat(this.avatarTime);
    }
  },
  methods: {
    getUser: function getUser() {
      var _this = this;

      this.$axios.post('/api/user/current').then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUser"]);
        if (r.data.user.photo === 'PHOTO') _this.avatarReady = true;
        delete r.data.user.photo;
        Object.assign(_this.user, r.data.user);
        _this.avatarTime = _this.$ld.now();

        _this.$refs.avatar.loadImage(_this.avatar);
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetUser"]);
      });
    },
    getRolesForSelect: function getRolesForSelect() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$axios.post('/api/roles/forselect').then(function (r) {
                  if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
                  _this2.roles = r.data.roles;
                })["catch"](function (e) {
                  console.log(e);
                  _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetRoles"]);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveProfile: function saveProfile() {
      var _this3 = this;

      this.user.photo = this.avatarReady ? this.$refs.avatar.getImageScaled().toDataURL() : null;
      this.$axios.post('/api/user/update', _objectSpread({}, this.user)).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateProfile"]);
        _helpers__WEBPACK_IMPORTED_MODULE_2__["Success"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["sUpdateProfile"]);
      })["catch"](function (e) {
        console.log(e);
        _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(_this3, _resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateProfile"]);
      });
    },
    validateSave: function validateSave(res, msgs) {
      switch (res) {
        case 'Ok':
          return _helpers__WEBPACK_IMPORTED_MODULE_2__["Success"].call(this, msgs[0]);

        case -3:
          return _helpers__WEBPACK_IMPORTED_MODULE_2__["Warning"].call(this, msgs[2]);

        default:
          _helpers__WEBPACK_IMPORTED_MODULE_2__["Error"].call(this, msgs[1]);
      }
    },
    chgPassword: function chgPassword() {
      var _this4 = this;

      this.$axios.post('/api/user/password', _objectSpread({}, this.passwords)).then(function (r) {
        _this4.validateSave(r.data.code, [_resources__WEBPACK_IMPORTED_MODULE_1__["sChangePassword"], _resources__WEBPACK_IMPORTED_MODULE_1__["ePasswordData"], _resources__WEBPACK_IMPORTED_MODULE_1__["eOldPassword"]]);
      })["catch"](function (e) {
        console.log(e);
      });
    },
    removeAvatar: function removeAvatar() {
      this.$refs.avatar.loadImage('/user/photo/0');
      this.avatarReady = false;
    }
  },
  beforeMount: function beforeMount() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this5.getUser();

            case 2:
              _context2.next = 4;
              return _this5.getRolesForSelect();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    { attrs: { padding: "" } },
    [
      _c(
        "q-tabs",
        {
          staticClass: "bg-primary text-white shadow-2",
          attrs: { "inline-label": "" },
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c("q-tab", {
            attrs: {
              name: "profile",
              icon: "mdi-account-check",
              label: "Perfil de Usuario"
            }
          }),
          _vm._v(" "),
          _c("q-tab", {
            attrs: {
              name: "password",
              icon: "mdi-account-key",
              label: "Cambiar Contraseña"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("q-separator"),
      _vm._v(" "),
      _c(
        "q-tab-panels",
        {
          attrs: { animated: "" },
          model: {
            value: _vm.tab,
            callback: function($$v) {
              _vm.tab = $$v
            },
            expression: "tab"
          }
        },
        [
          _c(
            "q-tab-panel",
            { attrs: { name: "profile" } },
            [
              _c(
                "q-card",
                [
                  _c("q-card-section", [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6 text-right" },
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
                            _c(
                              "div",
                              { staticClass: "q-gutter-lg" },
                              [
                                _vm.avatarReady
                                  ? _c("q-btn", {
                                      attrs: {
                                        color: "red",
                                        label: "Eliminar"
                                      },
                                      on: { click: _vm.removeAvatar }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("q-btn", {
                                  attrs: { color: "primary", label: "Cambiar" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.avatar.clicked()
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "q-gutter-y-md" },
                      [
                        _c("q-input", {
                          attrs: {
                            name: "name",
                            error: _vm.$v.user.name.$invalid,
                            square: "",
                            label: "Nombre y Apellidos",
                            dense: ""
                          },
                          model: {
                            value: _vm.user.name,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "name", $$v)
                            },
                            expression: "user.name"
                          }
                        }),
                        _vm._v(" "),
                        _c("q-input", {
                          attrs: {
                            error: _vm.$v.user.email.$invalid,
                            square: "",
                            label: "Correo Electrónico",
                            dense: "",
                            readonly: !_vm.isEmailManageable
                          },
                          model: {
                            value: _vm.user.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "email", $$v)
                            },
                            expression: "user.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("q-select", {
                          attrs: {
                            dense: "",
                            label: "Roles",
                            options: _vm.roles,
                            "option-value": "id",
                            "option-label": "name",
                            multiple: "",
                            readonly: "",
                            "emit-value": "",
                            "map-options": "",
                            "use-chips": ""
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
                    )
                  ]),
                  _vm._v(" "),
                  _c("q-separator"),
                  _vm._v(" "),
                  _c(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      _c("q-btn", {
                        attrs: {
                          flat: "",
                          label: "Cancelar",
                          color: "warning",
                          to: "/"
                        }
                      }),
                      _vm._v(" "),
                      _c("q-btn", {
                        attrs: {
                          disable: _vm.$v.user.$invalid,
                          flat: "",
                          label: "Guardar Perfil",
                          color: "primary"
                        },
                        on: { click: _vm.saveProfile }
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
            "q-tab-panel",
            { attrs: { name: "password" } },
            [
              _c(
                "q-card",
                [
                  _c("q-card-section", [
                    _c(
                      "div",
                      { staticClass: "q-gutter-y-md" },
                      [
                        _c("q-input", {
                          attrs: {
                            type: _vm.ispwd ? "password" : "text",
                            error: _vm.$v.passwords.oldpassword.$invalid,
                            name: "oldpassword",
                            square: "",
                            label: "Contraseña anterior",
                            dense: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "append",
                              fn: function() {
                                return [
                                  _c("q-icon", {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      name: _vm.ispwd
                                        ? "visibility_off"
                                        : "visibility"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.ispwd = !_vm.ispwd
                                      }
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.passwords.oldpassword,
                            callback: function($$v) {
                              _vm.$set(_vm.passwords, "oldpassword", $$v)
                            },
                            expression: "passwords.oldpassword"
                          }
                        }),
                        _vm._v(" "),
                        _c("q-input", {
                          ref: "newpassword",
                          attrs: {
                            type: _vm.isnpwd ? "password" : "text",
                            error: _vm.$v.passwords.newpassword.$invalid,
                            name: "newpassword",
                            square: "",
                            label: "Nueva Contraseña",
                            dense: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "append",
                              fn: function() {
                                return [
                                  _c("q-icon", {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      name: _vm.isnpwd
                                        ? "visibility_off"
                                        : "visibility"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.isnpwd = !_vm.isnpwd
                                      }
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.passwords.newpassword,
                            callback: function($$v) {
                              _vm.$set(_vm.passwords, "newpassword", $$v)
                            },
                            expression: "passwords.newpassword"
                          }
                        }),
                        _vm._v(" "),
                        _c("q-input", {
                          attrs: {
                            type: _vm.isrnpwd ? "password" : "text",
                            error: _vm.$v.passwords.renewpassword.$invalid,
                            name: "renewpassword",
                            square: "",
                            label: "Repetir Nueva Contraseña",
                            dense: ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "append",
                              fn: function() {
                                return [
                                  _c("q-icon", {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      name: _vm.isrnpwd
                                        ? "visibility_off"
                                        : "visibility"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.isrnpwd = !_vm.isrnpwd
                                      }
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ]),
                          model: {
                            value: _vm.passwords.renewpassword,
                            callback: function($$v) {
                              _vm.$set(_vm.passwords, "renewpassword", $$v)
                            },
                            expression: "passwords.renewpassword"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("q-separator"),
                  _vm._v(" "),
                  _c(
                    "q-card-actions",
                    { attrs: { align: "right" } },
                    [
                      _c("q-btn", {
                        attrs: {
                          flat: "",
                          label: "Cancelar",
                          color: "warning",
                          to: "/"
                        }
                      }),
                      _vm._v(" "),
                      _c("q-btn", {
                        attrs: {
                          disable: _vm.$v.passwords.$invalid,
                          flat: "",
                          label: "Cambiar Contraseña",
                          color: "primary"
                        },
                        on: { click: _vm.chgPassword }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/profile.vue":
/*!****************************************!*\
  !*** ./resources/js/views/profile.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=7b610d0c& */ "./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/views/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/profile.vue?vue&type=template&id=7b610d0c& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./profile.vue?vue&type=template&id=7b610d0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/profile.vue?vue&type=template&id=7b610d0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_7b610d0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);