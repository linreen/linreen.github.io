(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n<main id=\"content\">  \n            <app-header></app-header>           \n            <app-vision></app-vision>\n            <app-market></app-market>\n            <app-product></app-product>\n            <app-team></app-team>  \n            <app-partners></app-partners>  \n            <app-footer></app-footer>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StratumWebsite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @thisissoon/angular-inviewport */ "./node_modules/@thisissoon/angular-inviewport/fesm5/thisissoon-angular-inviewport.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _vision_vision_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vision/vision.component */ "./src/app/vision/vision.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partners/partners.component */ "./src/app/partners/partners.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./market/market.component */ "./src/app/market/market.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _vision_vision_component__WEBPACK_IMPORTED_MODULE_11__["VisionComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"],
                _partners_partners_component__WEBPACK_IMPORTED_MODULE_14__["PartnersComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _market_market_component__WEBPACK_IMPORTED_MODULE_16__["MarketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _thisissoon_angular_inviewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var Config = /** @class */ (function () {
    function Config(http) {
        var _this = this;
        this.http = http;
        this.team = _config__WEBPACK_IMPORTED_MODULE_1__["currentTeam"];
        this.partners = _config__WEBPACK_IMPORTED_MODULE_1__["currentPartners"];
        this.navMenuChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.navMenuActive = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.modelChart = _config__WEBPACK_IMPORTED_MODULE_1__["modelChart"];
        this.marketChart2007 = _config__WEBPACK_IMPORTED_MODULE_1__["marketChart2007"];
        this.marketChart2017 = _config__WEBPACK_IMPORTED_MODULE_1__["marketChart2017"];
        this.apiUrl = 'api/posts';
        this.showNavMenu = false;
        this.menuActive = [false, false, false, false, false];
        this.navMenuChanges.subscribe(function (value) {
            _this.showNavMenu = value;
        });
        this.navMenuActive.subscribe(function (value) {
            _this.menuActive = [false, false, false, false, false];
            switch (value) {
                case 'Vision':
                    _this.menuActive[0] = true;
                    break;
                case 'Market':
                    _this.menuActive[1] = true;
                    break;
                case 'Product':
                    _this.menuActive[2] = true;
                    break;
                case 'Team':
                    _this.menuActive[3] = true;
                    break;
                case 'Partners':
                    _this.menuActive[4] = true;
                    break;
                default:
            }
        });
    }
    Config.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    Config.prototype.getTeam = function () {
        return this.team;
    };
    Config.prototype.getPartners = function () {
        return this.partners;
    };
    Config.prototype.getChart = function () {
        return this.modelChart;
    };
    Config.prototype.getMarketChart2007 = function () {
        return this.marketChart2007;
    };
    Config.prototype.getMarketChart2017 = function () {
        return this.marketChart2017;
    };
    Config.prototype.getNavMenu = function () {
        return this.showNavMenu;
    };
    Config.prototype.getMenuActive = function () {
        return this.menuActive;
    };
    Config.prototype.toggleNavMenu = function (inView) {
        this.navMenuChanges.next(inView);
    };
    Config.prototype.changeNavMenuActive = function (value) {
        this.navMenuActive.next(value);
    };
    Config = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: currentTeam, currentPartners, modelChart, marketChart2007, marketChart2017 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTeam", function() { return currentTeam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentPartners", function() { return currentPartners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelChart", function() { return modelChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketChart2007", function() { return marketChart2007; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketChart2017", function() { return marketChart2017; });
var currentTeam = [
    {
        name: 'Daniel Mogilny',
        posiion: 'Co-Founder',
        bio: ['Founder of Turnout (exit 2.18)', 'AI Specialist at rMarkBio, Sysomos']
    },
    {
        name: 'Farzi Yusufali',
        posiion: 'Co-Founder',
        bio: ['Quantum Hardware Engineer at UTokyo', 'Data Scientist at Statflo Inc.']
    },
    {
        name: 'Kamran Esmaeili',
        posiion: 'Research Partner',
        bio: ['Professor at UofT Mining Engineering', 'Head of Mine Modelling Lab']
    },
    {
        name: 'Gharan Bawa',
        posiion: 'Business Development',
        bio: ['Consultant at Hatch for M&M, O&G', 'Production Engineer at Nsolv']
    },
    {
        name: 'Danial Hasan',
        posiion: 'Data Scientist',
        bio: ['Data Scientist at Beacon', 'BaAS in Machine Intelligence']
    }
];
var currentPartners = [
    {
        name: 'Bloomberg BETA'
    },
    {
        name: 'DCVC'
    },
    {
        name: 'Creative Destruction Lab'
    },
    {
        name: 'Sa8'
    }
];
var modelChart = {
    chart: {
        backgroundColor: '#181818',
        type: 'column',
        plotShadow: false
    },
    title: {
        text: 'Gold Orebody Modelling',
        style: { "color": "white", "fontSize": "1.8em", "font-weight": "500", "font-family": "'Montserrat', sans-serif" }
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: 'Geostatistics (Kriging)',
            data: [0.131, 0.20],
            color: '#3e3e3e'
        },
        {
            name: 'Stratum AI',
            data: [0.09, 0.15],
            color: '#fcca60'
        }
    ],
    xAxis: {
        categories: ['Accuracy (MSE)', 'Consistency (std MSE)'],
        style: { 'color': 'white', "font-family": "'Montserrat', sans-serif" }
    },
    yAxis: {
        title: {
            text: 'Normalized Error',
            style: { 'color': 'white', "font-family": "'Montserrat', sans-serif" }
        }
    },
    legend: {
        itemStyle: { 'color': 'white',
            "font-family": "'Montserrat', sans-serif",
            "font-weight": "400",
            '-webkit-transition': 'all .2s linear',
            '-moz-transition': 'all .2s linear',
            'transition': 'all .2s linear' },
        itemHoverStyle: { 'color': '#ffeb91' }
    }
};
var marketChart2007 = {
    chart: {
        backgroundColor: '#161616',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2007',
        style: { "color": "#fcca60", "fontSize": "25px", "font-weight": "700", "font-family": "'Montserrat', sans-serif" }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<b>{point.percentage:.1f}%</b> of {series.name}'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
            name: 'Annural Revenue',
            showInLegend: true,
            data: [{
                    name: 'Net Profit',
                    sliced: true,
                    y: 25,
                    color: '#fcca60'
                }, {
                    name: 'Expenditures',
                    y: 75,
                    color: '#3e3e3e'
                }]
        }],
    legend: {
        style: { "color": "white", "fontSize": "14px", "font-weight": "500", "font-family": "'Montserrat', sans-serif" },
    }
};
var marketChart2017 = {
    chart: {
        backgroundColor: '#161616',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2017',
        style: { "color": "#fcca60", "fontSize": "25px", "font-weight": "700", "font-family": "'Montserrat', sans-serif" }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<b>{point.percentage:.1f}%</b> of {series.name}'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
            name: 'Annural Revenue',
            data: [{
                    name: 'Net Profit',
                    sliced: true,
                    y: 10,
                    color: '#fcca60'
                }, {
                    name: 'Expenditures',
                    y: 90,
                    color: '#3e3e3e'
                }]
        }]
};


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer{\n    margin-top: 60px;\n}\n\n#footer-text{\n    text-align: center;\n    font-size: 0.7em;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"clearfix\">\n        <p id=\"footer-text\">Stratum AI   2018</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\n    background-size: cover;\n    height:100vh;\n}\n\n#logo {\n  padding-top: 35vh;\n  text-align: center;\n}\n\n#logo-graphic{\n    width: 15%;\n    -webkit-transform: translateX(-10%);\n            transform: translateX(-10%);\n}\n\n#logo-text{\n    margin-top: 5vh;\n    width: 35%;\n}\n\n@media only screen and (min-width: 1980px) {\n    #logo-text{\n        margin-top: 8vh;\n    }\n}\n\n@media only screen and (max-width: 880px) {\n    #logo-text{\n        margin-top: 2.5vh;\n    }\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n  <div>\n      <div id=\"logo\">\n        <img src=\"../../assets/logo-graphic-icon.png\" id=\"logo-graphic\" [@logoAnimation]/>\n        <img src=\"../../assets/logo-txt.png\" id=\"logo-text\" [@fadeInText]/>\n      </div>\n      <div id=\"nav-trigger\"><span></span></div>\n      <nav id=\"nav-mobile\"></nav>\n\n  </div>\n\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInText', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('over', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.8s 2600ms ease-in')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInSlogan', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('over', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s 3600ms ease-in')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('logoAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('over', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        transform: 'translateX(0px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s 500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s 400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/market/market.component.css":
/*!*********************************************!*\
  !*** ./src/app/market/market.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".market-wrap{\n    padding: 10px;\n    margin-left:12%;\n    padding-left:5%;\n    margin-right: 12%;\n}\n\n#problem-wrap{\n    margin-top: 5px;\n}\n\n#toggle-wrap{\n    margin: 50px;\n    margin-top: 100px;\n    margin-right: 200px;\n}\n\n#market{\n    background-color: #161616;\n    padding-top: 120px;\n    padding-bottom: 10vh;\n}\n\n#subtitle{\n    font-weight: 400;\n    font-size: 0.9em;\n    margin: 10px;\n    line-height: 1.5;\n}\n\n#toggle-text{\n    font-weight: 400;\n    font-size: 1.2em;\n    line-height: 1.5;\n    margin: 10px;\n    margin-bottom: 40px;\n}\n\n#market-chart07-before{\n    margin-top: 20px;\n    height: 380px;\n    width: 40%;\n    padding-right: 100px;\n    float: left;\n}\n\n#market-chart07-after{\n    margin-top: 20px;\n    height: 380px;\n    width: 40%;\n    float: left;\n}\n\n#market-chart17{\n    width: 40%;\n    height: 420px;\n    padding-right: 20%;\n    float: left;\n}\n\n@media only screen and (max-width: 1400px) {\n    #market-chart07-before{\n    width: 45%;\n    }\n    #market-chart17{\n        width: 34%;\n    }\n    #toggle-wrap{\n        margin-right: 150px;\n    }\n}\n\n@media only screen and (max-width: 1220px) {\n    #market-chart07-before{\n    width: 50%;\n    }\n    #market-chart07-after{\n        height: 320px;\n        width: 48%;\n    }\n    #market-chart17{\n        width: 40%;\n        height: 400px;\n        padding-right: 6%;\n\n    }\n\n}\n\n@media only screen and (max-width: 1080px) {\n    #market-chart07-before{\n    width: 60%;\n    }\n    #market-chart17{\n        width: 45%;\n        padding-right: 2%;\n    }\n    #market-chart07-after{\n        height: 300px;\n        width: 52%;\n        margin-top: 40px;\n    }\n    #toggle-wrap{\n        margin-right: 0px;\n    }\n}\n\n@media only screen and (max-width: 945px) {\n    #market {\n        height: auto;\n        padding-top: 80px;\n    }\n\n    #market-chart07-before{\n    width: 70%;\n    height: 300px;\n    padding-right: 15px;\n    }\n\n    .market-wrap{\n        margin-right: 5%;\n    }\n\n    #market-chart17{\n        width: 85%;\n        height: 350px;\n        margin-bottom: 40px;\n        float: none;\n    }\n\n    #market-chart07-after{\n        margin-left: 8%;\n        height: 250px;\n        width: 72%;\n        float: none;\n    }\n    #toggle-wrap{\n        margin-right: 0px;\n    }\n    #toggle-text{\n        font-size: 0.9em;\n    }\n    #problem-wrap {\n        margin-top: 20px;\n        margin-bottom: 80px;\n    }\n\n}\n\n@media only screen and (max-width: 750px) {\n    #toggle-wrap{\n        margin-right: 0px;\n        margin: 10px;\n        margin-top: 130px;\n    }\n\n    #toggle-text{\n        margin-bottom: 10px;\n        font-size: 0.75em;\n    }\n\n    #market {\n        height: auto;\n        padding-top: 80px;\n    }\n\n    #market-chart07-before{\n    width: 70%;\n    padding-right: 10px;\n    }\n\n    #market-chart17{\n        width: 85%;\n        height: 350px;\n        margin-bottom: 40px;\n        float: none;\n    }\n\n    #market-chart07-after{\n        margin-left: 6%;\n        height: 250px;\n        width: 70%;\n        float: none;\n    }\n    #toggle-text{\n        font-size: 0.9em;\n    }\n    #problem-wrap {\n        margin-top: 20px;\n        margin-bottom: 80px;\n    }\n\n}\n\n@media only screen and (max-width: 600px) {\n    #toggle-wrap{\n        margin-right: 100px;\n        margin-top: 50px;\n    }\n\n    #toggle-text{\n        margin-bottom: 40px;\n    }\n\n    #market-chart07-before{\n    width: 80%;\n    padding-right: 45px;\n    float: none;\n    }\n\n}\n\n@media only screen and (max-width: 380px) {\n    #toggle-wrap{\n        margin-right: 30px;\n        margin-top: 20px;\n    }\n\n    #market-chart07-before{\n    width: 80%;\n    padding-right: 45px;\n    float: none;\n    }\n    #market-chart17{\n        width: 90%;\n        height: 250px;\n    }\n\n    \n#subtitle{\n    font-size: 0.75em;\n    margin: 5px;\n}\n\n}\n\nbutton {\n    white-space: nowrap; \n    border: none;\n    cursor:pointer;\n    overflow: hidden;\n    outline:none;\n}\n\n#chart-btn{\n    padding: 10px;\n    background: #ffe676;\n    color:  #181818;\n    font-size: 0.8em;\n    font-weight: 700;\n    width: 100px;\n}\n\n#emphasize-text{\n    font-weight: 500;\n    color: #ffe676;\n}\n\n#problem-text{\n    font-weight: 700;\n    font-size: 1.7em;\n    color: #ffe676;\n}"

/***/ }),

/***/ "./src/app/market/market.component.html":
/*!**********************************************!*\
  !*** ./src/app/market/market.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"market\" class=\"scrollto clearfix\">\n  <div class=\"market-wrap\">\n  <div class=\"clearfix\">\n    <h2 id=\"section-title\">MARKET</h2>\n    <div>\n      <div id=\"subtitle\">The graph below represents the <span id=\"emphasize-text\">Annual Revenue</span> of the mining\n        market.</div>\n    </div>\n    <div *ngIf=\"showChart07 && scrolledTo\" id=\"market-chart07-before\" [chart]=\"chart07\"></div>\n    <div *ngIf=\"showChart07 && scrolledTo\" id=\"toggle-wrap\">\n      <div id=\"toggle-text\">From 2007 to 2017, the mining market has expanded from <span id=\"emphasize-text\">500 billion</span> to <span id=\"emphasize-text\">1 trillion</span>, but the margins have decreased. </div>\n      <button  id=\"chart-btn\" (click)=\"onClick()\">PROBLEM</button>\n    </div>\n\n    <div *ngIf=\"!showChart07\" id=\"market-chart07-after\" [chart]=\"chart07\"></div>\n    <div *ngIf=\"!showChart07\" id=\"market-chart17\" [chart]=\"chart17\"></div>\n    <div id=\"problem-wrap\" [@fadeInOut]='secondState'>\n      <span id=\"problem-text\">PROBLEM</span>\n      <li id=\"subtitle\">Growing industry but rising costs</li>\n      <li id=\"subtitle\">Need for more ore for less capital</li>\n    </div>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/market/market.component.ts":
/*!********************************************!*\
  !*** ./src/app/market/market.component.ts ***!
  \********************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketComponent = /** @class */ (function () {
    function MarketComponent(charts, el) {
        this.charts = charts;
        this.el = el;
        this.firstState = 'show';
        this.secondState = 'hide';
    }
    MarketComponent.prototype.ngOnInit = function () {
        this.chart07 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.getChart2007());
        this.chart17 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.getChart2017());
        this.showChart07 = true;
        this.scrolledTo = false;
    };
    MarketComponent.prototype.getChart2007 = function () {
        return this.charts.getMarketChart2007();
    };
    MarketComponent.prototype.getChart2017 = function () {
        return this.charts.getMarketChart2017();
    };
    MarketComponent.prototype.onClick = function () {
        this.showChart07 = !this.showChart07;
        this.firstState = 'hide';
        this.secondState = 'show';
    };
    MarketComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset + (window.screen.availHeight / 2);
        if (scrollPosition >= componentPosition) {
            this.scrolledTo = true;
            this.charts.changeNavMenuActive('Market');
        }
        else {
            this.scrolledTo = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MarketComponent.prototype, "checkScroll", null);
    MarketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market',
            template: __webpack_require__(/*! ./market.component.html */ "./src/app/market/market.component.html"),
            styles: [__webpack_require__(/*! ./market.component.css */ "./src/app/market/market.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s 2000ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s 2000ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["Config"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbutton {\n    white-space: nowrap; \n    border: none;\n    cursor:pointer;\n    overflow: hidden;\n    outline:none;\n    margin: 0;\n    padding: 0;\n    transition: all .2s linear;\n}\n\n#nav-main{\nmargin-top: 35vh;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n\n.nav-btn-active{\n    width: 5px;\n    height: 25px;\n    margin: 15px;\n    margin-left: 2vw;\n    border-radius: 20%;\n    cursor: pointer;\n    display: block;\n    background-color: rgb(255, 255, 255);\n    color: rgb(255, 255, 255);\n}\n\n.nav-btn-active:hover{\n    width: 80px;\n    height: 25px;\n    margin: 15px;\n    margin-left: 2vw;\n    border-radius: 0%;\n    color: rgb(41, 41, 41);\n}\n\n.nav-btn-inactive{\n    width: 5px;\n    height: 25px;\n    margin: 15px;\n    margin-left: 2vw;\n    border-radius: 20%;\n    cursor: pointer;\n    display: block;\n    background-color: rgb(41, 41, 41);\n    color: rgb(41, 41, 41);\n}\n\n.nav-btn-inactive:hover{\n    width: 80px;\n    height: 25px;\n    margin: 15px;\n    margin-left: 2vw;\n    border-radius: 0%;\n    background-color:white;\n}\n\n#sideNav {\n    position: fixed;\n    z-index: 1;\n}\n\n#sticky-logo{\n    position: fixed;\n    margin-right: 3vw;\n    margin-top: 5vh;\n    right: 0;\n    top: 0;\n    transition: all .2s linear;\n}\n\n#sticky-logo:hover{\n    position: fixed;\n    right: 0;\n    top: 0;\n    margin-right: 2.8vw;\n    margin-top: 4.8vh;\n}\n\n#sticky-logo img{\n    width: 50px;\n    height: auto;\n    transition: all .2s linear;\n}\n\n#sticky-logo img:hover{\n    width: 55px;\n    height: auto;\n}\n\n#logo-btn{\n    background-color: Transparent;\n    background-repeat:no-repeat;\n}\n\n@media only screen and (max-width: 700px) {\n    \n.nav-btn-active{\n    margin-left: 3vw;\n}\n.nav-btn-active:hover{\n    margin-left: 3vw;\n}\n.nav-btn-inactive{\n    margin-left: 3vw;\n}\n.nav-btn-inactive:hover{\n    margin-left: 3vw;\n}\n}\n\n@media only screen and (max-width: 430px) {\n    #sticky-logo{\n        display: none;\n    }\n    .nav-btn-active{\n        margin-left: 5vw;\n    }\n    .nav-btn-active:hover{\n        margin-left: 5vw;\n    }\n    .nav-btn-inactive{\n        margin-left: 5vw;\n    }\n    .nav-btn-inactive:hover{\n        margin-left: 5vw;\n    }\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sideNav\">\n    <div>\n            <div id=\"sticky-logo\" [@scrollAnimationLogo]='state'>\n                    <button id=\"logo-btn\"[ngx-scroll-to]=\"'#home'\">\n                <img src=\"../../assets/logo-graphic-icon.png\" id=\"navigation-logo\"/>\n                </button>\n            </div>\n        <div>\n            <div id=\"nav-main\" [@scrollAnimation]='state'>\n                    <button [ngClass]=\"{'nav-btn-active': showVision, 'nav-btn-inactive': !showVision}\"[ngx-scroll-to]=\"'#vision'\">\n                        <span (mouseenter)=\"mouseEnter('Vision')\">Vision</span>\n                    </button>\n                    <button [ngClass]=\"{'nav-btn-active': showMarket, 'nav-btn-inactive': !showMarket}\" [ngx-scroll-to]=\"'#market'\">\n                            <span (mouseenter)=\"mouseEnter('Market')\">Market</span>\n                        </button>\n                    <button [ngClass]=\"{'nav-btn-active': showProduct, 'nav-btn-inactive': !showProduct}\" [ngx-scroll-to]=\"'#product'\">\n                        <span (mouseenter)=\"mouseEnter('Product')\">Product</span>\n                    </button>\n                    <button [ngClass]=\"{'nav-btn-active': showTeam, 'nav-btn-inactive': !showTeam}\" [ngx-scroll-to]=\"'#team'\">\n                        <span (mouseenter)=\"mouseEnter('Team')\">Team</span>\n                    </button>\n                    <button [ngClass]=\"{'nav-btn-active': showPartners, 'nav-btn-inactive': !showPartners}\"[ngx-scroll-to]=\"'#partners'\">\n                        <span (mouseenter)=\"mouseEnter('Partners')\">Partners</span>\n                    </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(menu) {
        this.menu = menu;
        this.state = 'hide';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    NavigationComponent.prototype.onWindowScroll = function () {
        this.getMenu();
    };
    NavigationComponent.prototype.getMenu = function () {
        if (this.menu.getNavMenu()) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
        this.menuActive = this.menu.getMenuActive();
        this.showVision = this.menuActive[0];
        this.showMarket = this.menuActive[1];
        this.showProduct = this.menuActive[2];
        this.showTeam = this.menuActive[3];
        this.showPartners = this.menuActive[4];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigationComponent.prototype, "onWindowScroll", null);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: "translateX(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: "translateX(-40%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimationLogo', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: "translateX(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: "translateX(40%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/partners/partners.component.css":
/*!*************************************************!*\
  !*** ./src/app/partners/partners.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#partners{\n    margin-left:12%;\n    padding-left:5%;\n    margin-right: 12%;\n    margin-top: 50px;\n    padding-bottom: 10vh;\n}\n\n#partner-photo img{\n    width: 25vw;\n}\n\n#partner-photos-wrap{\n    margin-top: 30px;\n    margin-left: 30px;\n}\n\n#partner-wrap{\n    float: left;\n    display: inline-block;\n    margin: 5px;\n    padding: 10px;\n}\n\n@media only screen and (max-width: 440px) {\n    \n#partner-photo img{\n    width: 40vw;\n}\n}"

/***/ }),

/***/ "./src/app/partners/partners.component.html":
/*!**************************************************!*\
  !*** ./src/app/partners/partners.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"partners\" class=\"scrollto clearfix\">\n        <h2 id=\"section-title\">PARTNERS</h2>\n    <div id=\"partner-photos-wrap\">\n        <div id=\"partner-wrap\" *ngFor=\"let partner of partners\">\n            <div id=\"partner-photo\">\n                <img src=\"../../assets/{{partner.name}}.jpg\" />\n            </div>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/partners/partners.component.ts":
/*!************************************************!*\
  !*** ./src/app/partners/partners.component.ts ***!
  \************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartnersComponent = /** @class */ (function () {
    function PartnersComponent(team, el) {
        this.team = team;
        this.el = el;
        this.partners = [];
    }
    PartnersComponent.prototype.ngOnInit = function () {
        this.partners = this.getPartners();
        console.log(this.partners);
    };
    PartnersComponent.prototype.getPartners = function () {
        return this.team.getPartners();
    };
    PartnersComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset + 200;
        if (scrollPosition >= componentPosition) {
            this.team.changeNavMenuActive('Partners');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PartnersComponent.prototype, "checkScroll", null);
    PartnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.css */ "./src/app/partners/partners.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["Config"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solution-wrap{\n    padding: 15px;\n}\n\n#section-title{\n    margin-top: 50px;\n}\n\n#product-wrap{\n    margin-left:12%;\n    padding-left:5%;\n    margin-right: 12%;\n}\n\n#product{\n    padding-top: 6vh;\n    padding-bottom: 20vh;\n    background-color: #181818;\n}\n\n#product-text {\n    line-height: 1.5;\n    font-size: 0.9em;\n    margin-right: 15%;\n}\n\n#subtitle{\n    font-weight: 700;\n    color: #ffe676;\n    font-size: 1.2em;\n}\n\n#chart{\n    margin-top: 5vh;\n    width: 40vw;\n    height: 50vh;\n}\n\n#chart-div{\n    margin-top: 5vh;\n    width: 55vw;\n    height: 50vh;\n    visibility: hidden;\n}\n\n#emphasize-text{\n    font-weight: 500;\n    color: #ffe676;\n}\n\nbutton {\n    white-space: nowrap; \n    border: none;\n    cursor:pointer;\n    overflow: hidden;\n    outline:none;\n    transition: all .3s linear;\n}\n\n.chart-btn-active{\n    margin-top: 10px;\n    padding: 10px 15px;\n    background: #ffe676;\n    color:  #181818;\n    font-size: 0.8em;\n    font-weight: 700;\n}\n\n.chart-btn-inactive{\n    margin-top: 10px;\n    padding: 10px 15px;\n    background: #3d3d3d;\n    color:  #ffffff;\n    font-size: 0.8em;\n    font-weight: 700;\n}\n\n.chart-btn-inactive:hover{\n    background: #ffe676;\n    color:  #181818;\n}\n\n@media only screen and (max-width: 1080px) {\n    #chart{\n        width: 60vw;\n        height: 40vh;\n    }\n    \n    #chart-div{\n        width: 60vw;\n        height: 40vh;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    #chart{\n        width: 80vw;\n        height: 40vh;\n        margin-left: -12vw;\n    }\n    #product-wrap{\n        margin-right: 5%;\n    }\n    #chart-div{\n        width: 80vw;\n        height: 40vh;\n        margin-left: -12vw;\n    }\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"scrollto clearfix\">\n    <div id=\"product-wrap\">\n        <div class=\"clearfix\">\n            <h2 id=\"section-title\">PRODUCT</h2>\n            <!-- <button [ngClass]=\"{'chart-btn-active': showAI, 'chart-btn-inactive': !showAI}\" id=\"chart-btn-inactive\"\n                (click)=\"onClick('AI')\">AI Orebody Extrapolation</button>\n            <button [ngClass]=\"{'chart-btn-active': showQuantum, 'chart-btn-inactive': !showQuantum}\" id=\"chart-btn-inactive\"\n                (click)=\"onClick('Quantum')\">Quantum Design Optimization</button> -->\n\n            <div class=\"solution-wrap\">\n                <h2 id=\"subtitle\">AI Orebody Extrapolation</h2>\n                <div id=\"product-text\">\n                    <li>Accurately model ore bodies from core data with Artificial Intelligence on\n                        quantum hardware.\n                    </li>\n                    <li>\n                        Reduce your risk with a <span id=\"emphasize-text\">25%</span> more accurate approach over\n                        traditional Kriging\n                    </li>\n                </div>\n                <div id=\"chart\" *ngIf=\"scrolledTo\" [chart]=\"chart\" [@fadeInOut]></div>\n                <div id=\"chart-div\" *ngIf=\"!scrolledTo\" [chart]=\"chart\"></div>\n            </div>\n<!-- \n            <div class=\"solution-wrap\"  *ngIf=\"showQuantum\">\n                <h2 id=\"subtitle\">Quantum Design Optimization</h2>\n                <div id=\"product-text\">\n                    <li>\n                        Increase your margins with fully AI-driven mine design.\n                    </li>\n                    <li>\n                        Leverage quantum computing to design mine plans that <span id=\"emphasize-text\">maximize NPV</span>\n                        for any mine type.\n                    </li>\n                </div>\n\n                <div id=\"chart\" *ngIf=\"scrolledTo\" [chart]=\"chart\" [@fadeInOut]></div>\n            </div> -->\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(charts, el) {
        this.charts = charts;
        this.el = el;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"](this.getChart());
        this.scrolledTo = false;
        this.showAI = true;
        this.showQuantum = false;
    };
    ProductComponent.prototype.getChart = function () {
        return this.charts.getChart();
    };
    // onClick(value : string) {
    //   if (value == 'AI') {
    //     this.showAI = true;
    //     this.showQuantum = false;
    //   } else if (value == 'Quantum') {
    //     this.showAI = false;
    //     this.showQuantum = true;
    //   }
    // }
    ProductComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset + (window.screen.availHeight / 2);
        if (scrollPosition >= componentPosition) {
            this.scrolledTo = true;
            this.charts.changeNavMenuActive('Product');
        }
        else {
            this.scrolledTo = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductComponent.prototype, "checkScroll", null);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('800ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('800ms ease-in')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["Config"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#team{\n    position: relative;\n    padding-top: 10vh;\n    padding-bottom: 15vh;\n}\n\n#team::after {\n    content: \"\";\n    background-image: url('vision-background2.png');\n    display: block;\n    opacity: 0.2;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;   \n}\n\n#member-wrap{\n    margin: 15px;\n}\n\n#team-photos-wrap{\n    margin-left: 12%;\n    padding-left: 5%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n#bio-wrap{\n    padding: 20px 10px;\n    padding-bottom: 0px;\n}\n\n#team-photo img{\n    width: 15vw;\n    border-radius: 50%;\n}\n\n#team-name {\n    font-weight: 600;\n    font-size: 1.2em;\n}\n\n#team-bio {\n    line-height: 1.5;\n    font-size: 0.8em;\n    margin-left: 20px;\n}\n\n@media only screen and (max-width: 1080px) {\n    \n#team-photo img{\n    width: 22vw;\n}\n#team-bio {\n    font-size: 0.7em;\n}\n#member-wrap {\n    margin: 25px;\n}\n}\n\n@media only screen and (max-width: 800px) {\n    \n    #team-photo img{\n        width: 18vw;\n    }\n\n    #team-bio {\n        line-height: 1.5;\n        font-size: 0.6em;\n        margin-left: 10px;\n    }\n}\n\n@media only screen and (max-width: 700px) {\n    \n    #team-photo img{\n        width: 40vw;\n    }\n\n    #team-bio {\n        line-height: 1.5;\n        font-size: 0.8em;\n        margin-left: 10px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\" class=\"scrollto clearfix\">\n    <div id=\"team-photos-wrap\">\n        <h2 id=\"section-title\">TEAM</h2>\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"5vw\" fxLayout.xs=\"column wrap\">\n        <div id=\"member-wrap\" *ngFor=\"let member of members\">\n            <div id=\"team-photo\">\n                <img src=\"../../assets/{{member.name}}.jpg\" />\n            </div>\n\n            <div id=\"bio-wrap\">\n                <div id=\"team-name\">\n                    {{member.name}}\n                </div>\n                <li id=\"team-bio\" *ngFor=\"let point of member.bio\">\n                    {{point}}\n                </li>\n            </div>\n        </div>\n    </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent(team, el) {
        this.team = team;
        this.el = el;
        this.members = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.members = this.getMembers();
    };
    TeamComponent.prototype.getMembers = function () {
        return this.team.getTeam();
    };
    TeamComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset + 250;
        if (scrollPosition >= componentPosition) {
            this.team.changeNavMenuActive('Team');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TeamComponent.prototype, "checkScroll", null);
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["Config"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/vision/vision.component.css":
/*!*********************************************!*\
  !*** ./src/app/vision/vision.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#vision{\n    background-color: #181818;\n    background-size: cover;\n    padding-top: 250px;\n    padding-bottom: 200px;\n}\n\n#vision-text{\n    margin-left: 12%;\n    padding-left: 5%;\n    font-size: 1.4em;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 2px;\n}\n\n#vision-text-ai{\n    margin-top: 5px;\n    margin-left: 2%;\n    font-size: 3.2em;\n    font-weight: 700;\n    line-height: 1;\n    color: #fcca60;\n}\n\n@media only screen and (max-width: 1080px) {\n    #vision-text-ai{\n        text-align: center;\n        margin-right: 15%;\n    margin-top: 20px;\n    }\n}\n\n@media only screen and (max-width: 960px) {\n    #vision-text{\n        margin-right: 15%;\n    }\n}\n\n@media only screen and (max-width: 750px) {\n    #vision-text{\n        margin-right: 25%;\n    }\n}\n\n@media only screen and (max-width: 650px) {\n    #vision-text-ai{\n        font-size: 2.8em;\n    }\n}\n\n@media only screen and (max-width: 550px) {\n    #vision-text-ai{\n        font-size: 2.4em;\n    }\n}\n\n@media only screen and (max-width: 450px) {\n    #vision-text{\n        margin-left: 15%;\n        font-size: 1.2em;\n        margin-right: 5%;\n    }\n    #vision-text-ai{\n        text-align: left;\n        font-size: 2.2em;\n    }\n}\n\n@media only screen and (max-width: 380px) {\n    #vision-text{\n        margin-left: 10%;\n        font-size: 1.2em;\n        margin-right: 5%;\n    }\n    #vision-text-ai{\n        text-align: left;\n        font-size: 2em;\n    }\n}"

/***/ }),

/***/ "./src/app/vision/vision.component.html":
/*!**********************************************!*\
  !*** ./src/app/vision/vision.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"vision\" class=\"scrollto\">\n    <div id=\"vision-text\">\n        We aim to design the world’s most efficient mines with \n        <div id=\"vision-text-ai\">\n            Artificial Intelligence\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vision/vision.component.ts":
/*!********************************************!*\
  !*** ./src/app/vision/vision.component.ts ***!
  \********************************************/
/*! exports provided: VisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionComponent", function() { return VisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisionComponent = /** @class */ (function () {
    function VisionComponent(menu, el) {
        this.menu = menu;
        this.el = el;
    }
    VisionComponent.prototype.ngOnInit = function () {
    };
    VisionComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset + window.screen.availHeight / 2;
        if (scrollPosition >= componentPosition) {
            this.menu.toggleNavMenu(true);
            this.menu.changeNavMenuActive('Vision');
        }
        else {
            this.menu.toggleNavMenu(false);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VisionComponent.prototype, "checkScroll", null);
    VisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vision',
            template: __webpack_require__(/*! ./vision.component.html */ "./src/app/vision/vision.component.html"),
            styles: [__webpack_require__(/*! ./vision.component.css */ "./src/app/vision/vision.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["Config"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], VisionComponent);
    return VisionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Cynzy/Desktop/Work/Stratum AI/StratumWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map