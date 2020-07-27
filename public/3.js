(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cardstat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/cardstat */ "./resources/js/components/cardstat.vue");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources */ "./resources/js/resources.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./resources/js/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dashboard",
  components: {
    stats: _components_cardstat__WEBPACK_IMPORTED_MODULE_0__["default"],
    highcharts: highcharts_vue__WEBPACK_IMPORTED_MODULE_2__["Chart"]
  },
  data: function data() {
    return {
      stats: {
        users: 0,
        actions: 0,
        roles: 0
      },
      chartOptions: {
        credits: {
          enabled: false
        },
        chart: {
          type: 'line',
          events: {
            load: function load(event) {
              event.target.reflow();
            }
          }
        },
        title: {
          text: 'Acciones en los últimos 15 días'
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: '# de Acciones'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [{
          name: 'Acciones',
          data: []
        }]
      }
    };
  },
  methods: {
    getStats: function getStats() {
      var _this = this;

      this.$axios.post('/api/admin/stats').then(function (r) {
        if (r.data.code !== 'Ok') return _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetData"]);
        Object.assign(_this.stats, r.data.stats);
        _this.chartOptions.xAxis.categories = r.data.dates;
        _this.chartOptions.series[0].data = r.data.counts;

        _this.$nextTick(function (_) {
          window.dispatchEvent(new Event('resize'));
        });
      })["catch"](function (e) {
        console.error(e);
        _helpers__WEBPACK_IMPORTED_MODULE_3__["Error"].call(_this, _resources__WEBPACK_IMPORTED_MODULE_1__["eGetData"]);
      });
    }
  },
  beforeMount: function beforeMount() {
    this.getStats();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \*************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row q-gutter-lg justify-center" }, [
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-3" },
          [
            _c("stats", {
              attrs: {
                "icon-color": "blue-6",
                icon: "mdi-account-group",
                label: "Usuarios",
                counter: _vm.stats.users,
                url: "/admin/users"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-3" },
          [
            _c("stats", {
              attrs: {
                "icon-color": "red-6",
                icon: "mdi-format-list-bulleted-type",
                label: "Acciones",
                counter: _vm.stats.actions,
                url: "/admin/logs"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-10 col-sm-6 col-md-3" },
          [
            _c("stats", {
              attrs: {
                "icon-color": "brown-6",
                icon: "mdi-group",
                label: "Roles",
                counter: _vm.stats.roles,
                url: "/admin/roles"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c(
        "q-card",
        { staticClass: "fit full-width" },
        [
          _c(
            "q-card-section",
            [
              _c("highcharts", {
                ref: "hc",
                attrs: { options: _vm.chartOptions }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=822d95b6& */ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=822d95b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);