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
/*!*****************************************!*\
  !*** ./rekru-blocks/herooutsourcing.js ***!
  \*****************************************/
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





wp.blocks.registerBlockType("rekrublocktheme/herooutsourcing", {
  title: "Rekru Hero Outsourcing",
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
    className: "hero hero--outsourcing outsourcing-background"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "section-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h1",
    value: props.attributes.heading,
    onChange: setHeading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-down",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-1.svg"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "p",
    className: "paragraph paragraph--medium",
    value: props.attributes.textContent,
    onChange: setTextContent
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--hero"
  }, "GO TO FORM"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-down-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-0.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-up-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-4.svg"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "hero-img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "zoom-in",
    "data-aos-duration": "1000",
    src: props.attributes.imgURL
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-2.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-3.svg"
  })))));
}
function SaveComponent(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "hero hero--outsourcing outsourcing-background"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "section-title"
  }, props.attributes.heading, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-down",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-1.svg"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "paragraph paragraph--medium"
  }, props.attributes.textContent), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button button--hero"
  }, "GO TO FORM"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-down-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-0.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-up-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-4.svg"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subsection-container subsection-container--img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "hero-img"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "zoom-in",
    "data-aos-duration": "1000",
    src: props.attributes.imgURL
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-2.svg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
    className: "shape shape--2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    src: "/wp-content/themes/rekru-block/assets/hero-outsourcing/shape-3.svg"
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=herooutsourcing.js.map