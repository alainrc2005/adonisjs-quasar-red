(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/entities_ne.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/entities_ne.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources */ "./resources/js/resources.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./resources/js/helpers.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




function initEntity() {
  return {
    id: null,
    name: null,
    address: null,
    workstations: 0,
    users: 0,
    link_type: 1,
    link_speed: null,
    rlan: '0',
    rlan_permissions: null,
    vpn: '0',
    vpn_permissions: null,
    plc: '0',
    plc_permissions: null,
    voip: '0',
    voip_permissions: null,
    link_provider: 1,
    resource_type: null,
    province: null,
    municipality: null,
    email_domain: null,
    email_server: null,
    proxy_server: null,
    phone_anchor: null,
    cac: null,
    entity_date: null
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "entities_ne",
  data: function data() {
    return {
      action: 'store',
      entity: initEntity(),
      links_type: [{
        label: 'Arrendado',
        value: 1
      }, {
        label: 'Conmutado',
        value: 2
      }],
      links_provider: [{
        label: 'ETECSA',
        value: 1
      }, {
        label: 'GET Oficina Central',
        value: 2
      }, {
        label: 'GET Varadero',
        value: 3
      }],
      provinces: [],
      municipalities: [],
      oMunicipalities: [],
      speeds: [],
      resources: []
    };
  },
  validations: {
    entity: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3)
      },
      address: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3)
      },
      workstations: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        integer: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["integer"]
      },
      users: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        integer: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["integer"]
      },
      link_speed: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      },
      province: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      },
      municipality: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      }
    }
  },
  watch: {
    'entity.province': function entityProvince(nv) {
      this.entity.municipality = null;

      if (nv == null) {
        this.municipalities = [];
        return;
      }

      this.municipalities = this.$ld.filter(this.oMunicipalities, {
        province: nv
      });
    }
  },
  computed: {
    caption: function caption() {
      return this.action === 'store' ? 'Crear Entidad' : 'Editar Entidad';
    }
  },
  methods: {
    getEntity: function getEntity(id) {
      var _this = this;

      this.$axios.post('/api/entity/get', {
        id: id
      }).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetEntity"]);
        var mun = r.data.entity.municipality;
        Object.assign(_this.entity, r.data.entity);

        _this.$nextTick(function (_) {
          _this.entity.municipality = mun;
        });
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetEntity"]);
      });
    },
    getForSelect: function getForSelect() {
      var _this2 = this;

      return this.$axios.post('/api/entities/forselect').then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetData"]);
        _this2.provinces = r.data.provinces;
        _this2.oMunicipalities = r.data.municipalities;
        _this2.speeds = r.data.speeds;
        _this2.resources = r.data.resources;
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this2, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetData"]);
      });
    },
    initAction: function initAction(action) {
      this.action = action;

      switch (this.action) {
        case 'store':
          this.entity = initEntity();
          break;

        case 'update':
          this.getEntity(this.$route.query.owl);
          break;

        default:
          this.$router.push('/');
      }
    },
    save: function save() {
      var _this3 = this;

      var urlAction = '/api/entity/' + this.action,
          msg = this.action === 'store' ? [_resources__WEBPACK_IMPORTED_MODULE_1__["eStoreEntity"], _resources__WEBPACK_IMPORTED_MODULE_1__["sStoreEntity"]] : [_resources__WEBPACK_IMPORTED_MODULE_1__["eUpdateEntity"], _resources__WEBPACK_IMPORTED_MODULE_1__["sUpdateEntity"]];
      this.$axios.post(urlAction, _objectSpread({}, this.entity)).then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, msg[0]);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Success"].call(_this3, msg[1]);

        _this3.$router.push('/entities');
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this3, msg[0]);
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this4.getForSelect();

            case 2:
              _this4.initAction(_this4.$route.params.action);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774& ***!
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
                  _c("q-icon", {
                    attrs: { name: "mdi-alpha-p-circle", size: "md" }
                  }),
                  _vm._v(" "),
                  _c("q-toolbar-title", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.caption) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("q-space"),
                  _vm._v(" "),
                  _c(
                    "q-btn",
                    {
                      attrs: {
                        round: "",
                        flat: "",
                        icon: "mdi-content-save",
                        disable: _vm.$v.$invalid
                      },
                      on: { click: _vm.save }
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
                            "\n                        Guardar Entidad\n                    "
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
          _c("q-card-section", [
            _c("div", { staticClass: "row q-col-gutter-sm justify-center" }, [
              _c(
                "div",
                { staticClass: "col-md-8 col-xs-12 col-sm-12" },
                [
                  _c("q-input", {
                    attrs: {
                      dense: "",
                      label: "Nombre de la Entidad",
                      error: _vm.$v.entity.name.$invalid,
                      "hide-bottom-space": ""
                    },
                    model: {
                      value: _vm.$v.entity.name.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.entity.name, "$model", $$v)
                      },
                      expression: "$v.entity.name.$model"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8 col-xs-12 col-sm-12" },
                [
                  _c("q-input", {
                    attrs: {
                      dense: "",
                      label: "Dirección",
                      error: _vm.$v.entity.address.$invalid,
                      "hide-bottom-space": ""
                    },
                    model: {
                      value: _vm.$v.entity.address.$model,
                      callback: function($$v) {
                        _vm.$set(_vm.$v.entity.address, "$model", $$v)
                      },
                      expression: "$v.entity.address.$model"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Cantidad de Estaciones",
                            error: _vm.$v.entity.workstations.$invalid,
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.$v.entity.workstations.$model,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$v.entity.workstations,
                                "$model",
                                $$v
                              )
                            },
                            expression: "$v.entity.workstations.$model"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Cantidad de Usuarios",
                            error: _vm.$v.entity.users.$invalid,
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.$v.entity.users.$model,
                            callback: function($$v) {
                              _vm.$set(_vm.$v.entity.users, "$model", $$v)
                            },
                            expression: "$v.entity.users.$model"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.links_type,
                            dense: "",
                            label: "Tipo de Enlace",
                            "emit-value": "",
                            "options-dense": "",
                            "map-options": ""
                          },
                          model: {
                            value: _vm.entity.link_type,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "link_type", $$v)
                            },
                            expression: "entity.link_type"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.speeds,
                            dense: "",
                            error: _vm.$v.entity.link_speed.$invalid,
                            label: "Velocidad del Enlace",
                            "emit-value": "",
                            "map-options": "",
                            "option-value": "id",
                            "option-label": "description",
                            "options-dense": "",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.$v.entity.link_speed.$model,
                            callback: function($$v) {
                              _vm.$set(_vm.$v.entity.link_speed, "$model", $$v)
                            },
                            expression: "$v.entity.link_speed.$model"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Dominio de Correo",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.email_domain,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "email_domain", $$v)
                            },
                            expression: "entity.email_domain"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Servidor de Correo",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.email_server,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "email_server", $$v)
                            },
                            expression: "entity.email_server"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Servidor Proxy",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.proxy_server,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "proxy_server", $$v)
                            },
                            expression: "entity.proxy_server"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Teléfono de Anclaje",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.phone_anchor,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "phone_anchor", $$v)
                            },
                            expression: "entity.phone_anchor"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Orden CAC",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.cac,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "cac", $$v)
                            },
                            expression: "entity.cac"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            dense: "",
                            label: "Fecha de la Entidad",
                            "hide-bottom-space": ""
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function() {
                                return [
                                  _c(
                                    "q-menu",
                                    {
                                      ref: "qstartProxy",
                                      attrs: {
                                        anchor: "top left",
                                        self: "top left",
                                        "transition-show": "scale",
                                        "transition-hide": "scale"
                                      }
                                    },
                                    [
                                      _c("q-date", {
                                        attrs: {
                                          minimal: "",
                                          mask: "DD/MM/YYYY"
                                        },
                                        on: {
                                          input: function() {
                                            return _vm.$refs.qstartProxy.hide()
                                          }
                                        },
                                        model: {
                                          value: _vm.entity.entity_date,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.entity,
                                              "entity_date",
                                              $$v
                                            )
                                          },
                                          expression: "entity.entity_date"
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
                            value: _vm.entity.entity_date,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "entity_date", $$v)
                            },
                            expression: "entity.entity_date"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.links_provider,
                            dense: "",
                            label: "Proveedor del Enlace",
                            "emit-value": "",
                            "map-options": "",
                            "options-dense": "",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.link_provider,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "link_provider", $$v)
                            },
                            expression: "entity.link_provider"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.resources,
                            dense: "",
                            label: "Tipo de Recurso",
                            "emit-value": "",
                            "option-value": "id",
                            "option-label": "description",
                            "map-options": "",
                            "options-dense": "",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.entity.resource_type,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "resource_type", $$v)
                            },
                            expression: "entity.resource_type"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.provinces,
                            dense: "",
                            label: "Provincia",
                            error: _vm.$v.entity.province.$invalid,
                            "emit-value": "",
                            "option-value": "id",
                            "option-label": "description",
                            "map-options": "",
                            "options-dense": "",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.$v.entity.province.$model,
                            callback: function($$v) {
                              _vm.$set(_vm.$v.entity.province, "$model", $$v)
                            },
                            expression: "$v.entity.province.$model"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 col-xs-12 col-sm-12" },
                      [
                        _c("q-select", {
                          attrs: {
                            options: _vm.municipalities,
                            dense: "",
                            error: _vm.$v.entity.municipality.$invalid,
                            label: "Municipio",
                            "emit-value": "",
                            "option-value": "id",
                            "option-label": "description",
                            "map-options": "",
                            "options-dense": "",
                            "hide-bottom-space": ""
                          },
                          model: {
                            value: _vm.$v.entity.municipality.$model,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.$v.entity.municipality,
                                "$model",
                                $$v
                              )
                            },
                            expression: "$v.entity.municipality.$model"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8 col-xs-12 col-sm-12 bg-grey-11" },
                [
                  _c(
                    "div",
                    { staticClass: "row q-col-gutter-sm justify-center" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-3 col-xs-12 col-sm-12 flex flex-center"
                        },
                        [
                          _c("q-checkbox", {
                            attrs: {
                              "true-value": "1",
                              "false-value": "0",
                              dense: "",
                              label: "RLAN"
                            },
                            model: {
                              value: _vm.entity.rlan,
                              callback: function($$v) {
                                _vm.$set(_vm.entity, "rlan", $$v)
                              },
                              expression: "entity.rlan"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-9 col-xs-12 col-sm-12" },
                        [
                          _c("q-input", {
                            attrs: {
                              type: "textarea",
                              dense: "",
                              label: "Autorizos RLAN"
                            },
                            model: {
                              value: _vm.entity.rlan_permissions,
                              callback: function($$v) {
                                _vm.$set(_vm.entity, "rlan_permissions", $$v)
                              },
                              expression: "entity.rlan_permissions"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-3 col-xs-12 col-sm-12 flex flex-center"
                      },
                      [
                        _c("q-checkbox", {
                          attrs: {
                            "true-value": "1",
                            "false-value": "0",
                            dense: "",
                            label: "VPN"
                          },
                          model: {
                            value: _vm.entity.vpn,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "vpn", $$v)
                            },
                            expression: "entity.vpn"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            type: "textarea",
                            dense: "",
                            label: "Autorizos VPN"
                          },
                          model: {
                            value: _vm.entity.vpn_permissions,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "vpn_permissions", $$v)
                            },
                            expression: "entity.vpn_permissions"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-8 col-xs-12 col-sm-12 bg-grey-11" },
                [
                  _c(
                    "div",
                    { staticClass: "row q-col-gutter-sm justify-center" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-md-3 col-xs-12 col-sm-12 flex flex-center"
                        },
                        [
                          _c("q-checkbox", {
                            attrs: {
                              "true-value": "1",
                              "false-value": "0",
                              dense: "",
                              label: "PLC"
                            },
                            model: {
                              value: _vm.entity.plc,
                              callback: function($$v) {
                                _vm.$set(_vm.entity, "plc", $$v)
                              },
                              expression: "entity.plc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-9 col-xs-12 col-sm-12" },
                        [
                          _c("q-input", {
                            attrs: {
                              type: "textarea",
                              dense: "",
                              label: "Autorizos PLC"
                            },
                            model: {
                              value: _vm.entity.plc_permissions,
                              callback: function($$v) {
                                _vm.$set(_vm.entity, "plc_permissions", $$v)
                              },
                              expression: "entity.plc_permissions"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8 col-xs-12 col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row q-col-gutter-sm justify-center" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-md-3 col-xs-12 col-sm-12 flex flex-center"
                      },
                      [
                        _c("q-checkbox", {
                          attrs: {
                            "true-value": "1",
                            "false-value": "0",
                            dense: "",
                            label: "VoIP"
                          },
                          model: {
                            value: _vm.entity.voip,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "voip", $$v)
                            },
                            expression: "entity.voip"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9 col-xs-12 col-sm-12" },
                      [
                        _c("q-input", {
                          attrs: {
                            type: "textarea",
                            dense: "",
                            label: "Autorizos VoIP"
                          },
                          model: {
                            value: _vm.entity.voip_permissions,
                            callback: function($$v) {
                              _vm.$set(_vm.entity, "voip_permissions", $$v)
                            },
                            expression: "entity.voip_permissions"
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          ])
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

/***/ "./resources/js/views/entities_ne.vue":
/*!********************************************!*\
  !*** ./resources/js/views/entities_ne.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities_ne.vue?vue&type=template&id=6b012774& */ "./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774&");
/* harmony import */ var _entities_ne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities_ne.vue?vue&type=script&lang=js& */ "./resources/js/views/entities_ne.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _entities_ne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__["render"],
  _entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/entities_ne.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/entities_ne.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/entities_ne.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entities_ne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./entities_ne.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/entities_ne.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entities_ne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./entities_ne.vue?vue&type=template&id=6b012774& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/entities_ne.vue?vue&type=template&id=6b012774&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entities_ne_vue_vue_type_template_id_6b012774___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);