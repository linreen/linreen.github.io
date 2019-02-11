(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    line-height: 1;\n    font-family: 'Montserrat', sans-serif;\n    background-color: #181818;\n    color: white;\n    font-weight: 300;\n  }\n\n\nhtml::after {\n    content: \"\";\n    background-image: url('vision-background2.png');\n    opacity: 0.1;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    z-index: -1;   \n}\n\n\nrouter-outlet ~ * {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n  }\n\n\n#section-title{\n    padding-top: 40px;\n    letter-spacing: 2px;\n    font-size: 2.8em;\n    margin-left: -10px;\n}\n\n\n/* Namari Landing Page v.1.1.0 Style Index \n\n1. Default and Reset styles\n- 1.1 Input Elements\n2. Global elements\n- 2.1 Header\n- 2.2 Logo\n- 2.3 Buttons\n- 2.4 Navigation\n- 2.5 Social Elements\n- 2.6 Images\n5. Content Elements\n- 5.1 Icons\n- 5.2 Parallax Elements\n- 5.3 Divider\n6. Landing Page Sections\n7. Footer\n\n\n/*------------------------------------------------------------------------------------------*/\n\n\n/* 1. Defaults & Reset of specific styles across browsers */\n\n\n/*------------------------------------------------------------------------------------------*/\n\n\nbody, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, blockquote, th, td {\n    margin: 0;\n    padding: 0;\n}\n\n\nbody {\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: antialiased;\n    overflow-x: hidden;\n}\n\n\np {\n    line-height: 25px;\n}\n\n\n.row img {\n    height: auto;\n    max-width: 100%;\n}\n\n\na {\n    text-decoration: none;\n    line-height: inherit;\n    transition: opacity 0.3s ease-out;\n}\n\n\niframe {\n    border: 0 !important;\n}\n\n\n.parallax-window {\n    min-height: 400px;\n    background: transparent;\n}\n\n\nfigure {\n    margin: 0;\n}\n\n\n#wrapper {\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n}\n\n\nsection {\n    clear: both;\n    overflow: hidden;\n}\n\n\n/* Targets all elements */\n\n\n[class*='col-'] {\n    float: left;\n    padding: 10px;\n}\n\n\n.clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n\n/* Main Widths */\n\n\n.col-1 {\n    width: 100%;\n}\n\n\n.col-2 {\n    width: 50%;\n}\n\n\n.col-3 {\n    width: 33.33%;\n}\n\n\n.col-4 {\n    width: 25%;\n}\n\n\n.col-5 {\n    width: 20%;\n}\n\n\n.col-6 {\n    width: 16.6666666667%;\n}\n\n\n.col-7 {\n    width: 14.2857142857%;\n}\n\n\n.col-8 {\n    width: 12.5%;\n}\n\n\n.col-9 {\n    width: 11.1111111111%;\n}\n\n\n.col-10 {\n    width: 10%;\n}\n\n\n.col-11 {\n    width: 9.09090909091%;\n}\n\n\n.col-12 {\n    width: 8.33%;\n}\n\n\n.col-2-3 {\n    width: 66.66%;\n}\n\n\n.col-3-4 {\n    width: 75%;\n}\n\n\n.col-9-10 {\n    width: 90%;\n}\n\n\n/* Golden Ratio */\n\n\n.col-61 {\n    width: 61.8%;\n}\n\n\n.col-38 {\n    width: 38.2%;\n}\n\n\nh1 {\n    padding: 20px 0;\n}\n\n\nh2 {\n    padding: 14px 0;\n}\n\n\nh3 {\n    padding: 10px 0;\n}\n\n\nh4 {\n    padding: 7px 0;\n}\n\n\nh5 {\n    padding: 7px 0;\n}\n\n\nh6 {\n    padding: 7px 0;\n}\n\n\n.text-left {\n    text-align: left;\n}\n\n\n.text-center {\n    text-align: center;\n}\n\n\n.text-right {\n    text-align: right;\n}\n\n\n/* Section Headings */\n\n\n.section-heading {\n    padding: 0 0 15px 0;\n}\n\n\n.section-subtitle {\n    font-size: 18px;\n    padding-top: 0;\n}\n\n\n.section-heading h3 {\n    font-size: 14px;\n    font-weight: bold;\n    color: #ccc;\n    letter-spacing: 2px;\n    padding-bottom: 0;\n}\n\n\n#preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #181818;\n    z-index: 99999; \n}\n\n\n#status {\n    width: 110px;\n    height: 110px;\n    position: absolute;\n    left: 50%; /* centers the loading animation horizontally one the screen */\n    top: 50%; /* centers the loading animation vertically one the screen */\n    background-position: center;\n    margin: -55px 0 0 -55px; /* is width and height divided by two */\n    text-align: center;\n}\n\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n\n\n.la-ball-triangle-path,\n.la-ball-triangle-path > div {\n    position: relative;\n    box-sizing: border-box;\n}\n\n\n.la-ball-triangle-path {\n    display: block;\n    font-size: 0;\n    color: #fff;\n}\n\n\n.la-ball-triangle-path.la-dark {\n    color: #333;\n}\n\n\n.la-ball-triangle-path > div {\n    display: inline-block;\n    float: none;\n    background-color: currentColor;\n    border: 0 solid currentColor;\n}\n\n\n.la-ball-triangle-path {\n    width: 32px;\n    height: 32px;\n}\n\n\n.la-ball-triangle-path > div {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n}\n\n\n.la-ball-triangle-path > div:nth-child(1) {\n    -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;\n}\n\n\n.la-ball-triangle-path > div:nth-child(2) {\n    -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;\n}\n\n\n.la-ball-triangle-path > div:nth-child(3) {\n    -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\n    animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;\n}\n\n\n.la-ball-triangle-path.la-sm {\n    width: 16px;\n    height: 16px;\n}\n\n\n.la-ball-triangle-path.la-sm > div {\n    width: 4px;\n    height: 4px;\n}\n\n\n.la-ball-triangle-path.la-2x {\n    width: 64px;\n    height: 64px;\n}\n\n\n.la-ball-triangle-path.la-2x > div {\n    width: 20px;\n    height: 20px;\n}\n\n\n.la-ball-triangle-path.la-3x {\n    width: 96px;\n    height: 96px;\n}\n\n\n.la-ball-triangle-path.la-3x > div {\n    width: 30px;\n    height: 30px;\n}\n\n\n/*\n * Animations\n */\n\n\n@-webkit-keyframes ball-triangle-path-ball-one {\n    0% {\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n}\n\n\n@keyframes ball-triangle-path-ball-one {\n    0% {\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n}\n\n\n@-webkit-keyframes ball-triangle-path-ball-two {\n    0% {\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n}\n\n\n@keyframes ball-triangle-path-ball-two {\n    0% {\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n}\n\n\n@-webkit-keyframes ball-triangle-path-ball-tree {\n    0% {\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n}\n\n\n@keyframes ball-triangle-path-ball-tree {\n    0% {\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n    17% {\n        opacity: .25;\n    }\n    33% {\n        opacity: 1;\n        -webkit-transform: translate(0, 220%);\n        transform: translate(0, 220%);\n    }\n    50% {\n        opacity: .25;\n    }\n    66% {\n        opacity: 1;\n        -webkit-transform: translate(110%, 0);\n        transform: translate(110%, 0);\n    }\n    83% {\n        opacity: .25;\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: translate(220%, 220%);\n        transform: translate(220%, 220%);\n    }\n}\n\n\n/*------------------------------------------------------------------------------------------*/\n\n\n/* Responsive Elements */\n\n\n/*------------------------------------------------------------------------------------------*/\n\n\n/* =Media Queries for Nav\n===============================*/\n\n\n@media all and (max-width: 1024px) {\n    #nav-trigger {\n        display: block;\n    }\n\n    nav#nav-main {\n        display: none;\n    }\n\n    nav#nav-mobile {\n        display: block;\n    }\n\n    nav#nav-mobile li {\n        display: block;\n    }\n\n    #header aside {\n        display: none;\n    }\n}\n\n\n/* Landscape mobile & down\n===============================*/\n\n\n@media (max-width: 480px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n    .page-border, #scrollUp, #scrollUp:before {\n        display:none;\n    }\n\n    .row {\n        padding: 15px !important;\n    }\n\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38, .row {\n        width: 100%;\n    }\n\n    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-2-3, .col-3-4, .col-9-10, .col-61, .col-38 {\n        padding-right: 0;\n        padding-left: 0;\n    }\n}\n\n\n/* Mobile to Tablet Portrait\n===============================*/\n\n\n@media (min-width: 480px) and (max-width: 767px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n    .page-border, #scrollUp, #scrollUp:before {\n        display:none;\n    }\n\n\n    .row {\n        padding: 15px 0 !important;\n    }\n\n    .col-1, .col-2, .col-5, .col-7, .col-9, .col-11, .col-2-3, .col-3-4, .col-61, .col-38, .row {\n        width: 100%;\n    }\n\n    .col-3, .col-4, .col-6, .col-8, .col-10, .col-12 {\n        width: 50%;\n    }\n\n}\n\n\n/* Landscape Tablet to Desktop\n===============================*/\n\n\n@media (min-width: 768px) and (max-width: 1024px) {\n\n    #wrapper {\n        margin:0;\n        padding:0;\n    }\n\n\n}\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Cynzy/Desktop/Work/Stratum AI/StratumWebsite/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map