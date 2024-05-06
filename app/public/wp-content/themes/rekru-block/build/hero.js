/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./rekru-blocks/hero.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





wp.blocks.registerBlockType("rekrublocktheme/hero", {
  title: "Rekru Hero",
  attributes: {
    subtitle: {
      type: "string"
    },
    heading: {
      type: "string"
    },
    textContent: {
      type: "string"
    },
    imgID: {
      type: "number"
    },
    imgURL: {
      type: "string"
    }
  },
  edit: EditComponent,
  save: SaveComponent
});
function EditComponent(props) {
  function setSubtitle(newSubtitle) {
    props.setAttributes({
      subtitle: newSubtitle
    });
  }
  function setHeading(newHeading) {
    props.setAttributes({
      heading: newHeading
    });
  }
  function setTextContent(newTextContent) {
    props.setAttributes({
      textContent: newTextContent
    });
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    async function go() {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: `/wp/v2/media/${props.attributes.imgID}`,
        method: "GET"
      });
      props.setAttributes({
        imgURL: response.media_details.sizes.hero.source_url
      });
    }
    go();
  }, [props.attributes.imgID]);
  function onFileSelect(newImage) {
    props.setAttributes({
      imgID: newImage.id
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Image",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onFileSelect,
    value: props.attributes.imgID,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open
      }, "Choose Image");
    }
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "hero hero--main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    "data-aos": "fade-down"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "/wp-content/themes/rekru-block/assets/logos/odod.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "span",
    className: "subtitle",
    value: props.attributes.subtitle,
    onChange: setSubtitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h1",
    className: "section-title colorful-title",
    value: props.attributes.heading,
    onChange: setHeading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    className: "paragraph paragraph--extra-large",
    "data-aos": "fade-right",
    "data-aos-delay": "600",
    value: props.attributes.textContent,
    onChange: setTextContent
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button-container",
    "data-aos": "fade-up",
    "data-aos-delay": "800"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--hero"
  }, "CONTACT US")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--transparent"
  }, "OUR SERVICES")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container image-with-background image-with-background--main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gradient-box",
    "data-aos": "fade-up",
    "data-aos-delay": "500"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "main-image",
    "data-aos": "zoom-in",
    "data-aos-delay": "200",
    "data-aos-duration": "1000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.attributes.imgURL
  })))));
}
function SaveComponent(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "hero hero--main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    "data-aos": "fade-down"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "/wp-content/themes/rekru-block/assets/logos/odod.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "subtitle",
    "data-aos": "fade-right",
    "data-aos-delay": "200"
  }, props.attributes.subtitle), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "section-title colorful-title",
    "data-aos": "fade-right",
    "data-aos-delay": "200"
  }, props.attributes.heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "paragraph paragraph--extra-large",
    "data-aos": "fade-right",
    "data-aos-delay": "600"
  }, props.attributes.textContent), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button-container",
    "data-aos": "fade-up",
    "data-aos-delay": "800"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--hero"
  }, "CONTACT US")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--transparent"
  }, "OUR SERVICES")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container image-with-background image-with-background--main"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gradient-box",
    "data-aos": "fade-up",
    "data-aos-delay": "500"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "main-image",
    "data-aos": "zoom-in",
    "data-aos-delay": "200",
    "data-aos-duration": "1000"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.attributes.imgURL
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=hero.js.map