(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_pages_users_editimage_editimage_module_ts"],{

/***/ 628:
/*!****************************************************************!*\
  !*** ./node_modules/html-to-image/es/applyStyleWithOptions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyStyleWithOptions": () => (/* binding */ applyStyleWithOptions)
/* harmony export */ });
function applyStyleWithOptions(clonedNode, options) {
    const { style } = clonedNode;
    if (options.backgroundColor) {
        style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
        style.width = `${options.width}px`;
    }
    if (options.height) {
        style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
        Object.keys(manual).forEach((key) => {
            // @ts-expect-error
            style[key] = manual[key];
        });
    }
    return clonedNode;
}
//# sourceMappingURL=applyStyleWithOptions.js.map

/***/ }),

/***/ 1188:
/*!****************************************************!*\
  !*** ./node_modules/html-to-image/es/cloneNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 7782);
/* harmony import */ var _clonePseudoElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clonePseudoElements */ 8492);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 482);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function cloneSingleNode(node, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (node instanceof HTMLCanvasElement) {
            const dataURL = node.toDataURL();
            if (dataURL === 'data:,') {
                return Promise.resolve(node.cloneNode(false));
            }
            return (0,_util__WEBPACK_IMPORTED_MODULE_2__.createImage)(dataURL);
        }
        if (node instanceof HTMLVideoElement && node.poster) {
            return Promise.resolve(node.poster)
                .then((url) => (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options))
                .then((data) => (0,_util__WEBPACK_IMPORTED_MODULE_2__.toDataURL)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_2__.getMimeType)(node.poster) || data.contentType))
                .then((dataURL) => (0,_util__WEBPACK_IMPORTED_MODULE_2__.createImage)(dataURL));
        }
        return Promise.resolve(node.cloneNode(false));
    });
}
function cloneChildren(nativeNode, clonedNode, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const children = (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(((_a = nativeNode.shadowRoot) !== null && _a !== void 0 ? _a : nativeNode).childNodes);
        if (children.length === 0) {
            return Promise.resolve(clonedNode);
        }
        return children
            .reduce((done, child) => done
            .then(() => cloneNode(child, options))
            .then((clonedChild) => {
            if (clonedChild) {
                clonedNode.appendChild(clonedChild);
            }
        }), Promise.resolve())
            .then(() => clonedNode);
    });
}
function decorate(nativeNode, clonedNode) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return clonedNode;
        }
        return Promise.resolve()
            .then(() => cloneCssStyle(nativeNode, clonedNode))
            .then(() => (0,_clonePseudoElements__WEBPACK_IMPORTED_MODULE_1__.clonePseudoElements)(nativeNode, clonedNode))
            .then(() => cloneInputValue(nativeNode, clonedNode))
            .then(() => clonedNode);
    });
}
function cloneCssStyle(nativeNode, clonedNode) {
    const source = window.getComputedStyle(nativeNode);
    const target = clonedNode.style;
    if (!target) {
        return;
    }
    if (source.cssText) {
        target.cssText = source.cssText;
    }
    else {
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(source).forEach((name) => {
            target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
        });
    }
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) {
        clonedNode.innerHTML = nativeNode.value;
    }
    if (nativeNode instanceof HTMLInputElement) {
        clonedNode.setAttribute('value', nativeNode.value);
    }
}
function cloneNode(nativeNode, options, isRoot) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isRoot && options.filter && !options.filter(nativeNode)) {
            return Promise.resolve(null);
        }
        return Promise.resolve(nativeNode)
            .then((clonedNode) => cloneSingleNode(clonedNode, options))
            .then((clonedNode) => cloneChildren(nativeNode, clonedNode, options))
            .then((clonedNode) => decorate(nativeNode, clonedNode));
    });
}
//# sourceMappingURL=cloneNode.js.map

/***/ }),

/***/ 8492:
/*!**************************************************************!*\
  !*** ./node_modules/html-to-image/es/clonePseudoElements.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clonePseudoElements": () => (/* binding */ clonePseudoElements)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 482);

var Pseudo;
(function (Pseudo) {
    function clonePseudoElement(nativeNode, clonedNode, pseudo) {
        const style = window.getComputedStyle(nativeNode, pseudo);
        const content = style.getPropertyValue('content');
        if (content === '' || content === 'none') {
            return;
        }
        const className = (0,_util__WEBPACK_IMPORTED_MODULE_0__.uuid)();
        // fix: Cannot assign to read only property 'className' of object '#<…
        try {
            clonedNode.className = `${clonedNode.className} ${className}`;
        }
        catch (err) {
            return;
        }
        const styleElement = document.createElement('style');
        styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
        clonedNode.appendChild(styleElement);
    }
    Pseudo.clonePseudoElement = clonePseudoElement;
    function getPseudoElementStyle(className, pseudo, style) {
        const selector = `.${className}:${pseudo}`;
        const cssText = style.cssText
            ? formatCssText(style)
            : formatCssProperties(style);
        return document.createTextNode(`${selector}{${cssText}}`);
    }
    function formatCssText(style) {
        const content = style.getPropertyValue('content');
        return `${style.cssText} content: '${content.replace(/'|"/g, '')}';`;
    }
    function formatCssProperties(style) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(style)
            .map((name) => {
            const value = style.getPropertyValue(name);
            const priority = style.getPropertyPriority(name);
            return `${name}: ${value}${priority ? ' !important' : ''};`;
        })
            .join(' ');
    }
})(Pseudo || (Pseudo = {}));
function clonePseudoElements(nativeNode, clonedNode) {
    const pseudos = [':before', ':after'];
    pseudos.forEach((pseudo) => Pseudo.clonePseudoElement(nativeNode, clonedNode, pseudo));
}
//# sourceMappingURL=clonePseudoElements.js.map

/***/ }),

/***/ 7997:
/*!***********************************************************!*\
  !*** ./node_modules/html-to-image/es/createSvgDataURL.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvgDataURL": () => (/* binding */ createSvgDataURL)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 482);

function createSvgDataURL(clonedNode, width, height) {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS('', 'width', `${width}`);
    svg.setAttributeNS('', 'height', `${height}`);
    svg.setAttributeNS('', 'viewBox', `0 0 ${width} ${height}`);
    foreignObject.setAttributeNS('', 'width', '100%');
    foreignObject.setAttributeNS('', 'height', '100%');
    foreignObject.setAttributeNS('', 'x', '0');
    foreignObject.setAttributeNS('', 'y', '0');
    foreignObject.setAttributeNS('', 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clonedNode);
    return (0,_util__WEBPACK_IMPORTED_MODULE_0__.svgToDataURL)(svg);
}
//# sourceMappingURL=createSvgDataURL.js.map

/***/ }),

/***/ 8765:
/*!******************************************************!*\
  !*** ./node_modules/html-to-image/es/embedImages.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedImages": () => (/* binding */ embedImages)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 7782);
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ 386);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 482);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function embedImages(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(clonedNode instanceof Element)) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(clonedNode)
            .then((node) => embedBackground(node, options))
            .then((node) => embedImageNode(node, options))
            .then((node) => embedChildren(node, options));
    });
}
function embedBackground(clonedNode, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const background = (_a = clonedNode.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue('background');
        if (!background) {
            return Promise.resolve(clonedNode);
        }
        return Promise.resolve(background)
            .then((cssString) => (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.embedResources)(cssString, null, options))
            .then((cssString) => {
            clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
            return clonedNode;
        });
    });
}
function embedImageNode(clonedNode, options) {
    if (!(clonedNode instanceof HTMLImageElement) || (0,_util__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(clonedNode.src)) {
        return Promise.resolve(clonedNode);
    }
    const src = clonedNode.src;
    return Promise.resolve(src)
        .then((url) => (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options))
        .then((data) => (0,_util__WEBPACK_IMPORTED_MODULE_2__.toDataURL)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_2__.getMimeType)(src) || data.contentType))
        .then((dataURL) => new Promise((resolve, reject) => {
        clonedNode.onload = resolve;
        clonedNode.onerror = reject;
        clonedNode.srcset = '';
        clonedNode.src = dataURL;
    }))
        .then(() => clonedNode, () => clonedNode);
}
function embedChildren(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const children = (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(clonedNode.childNodes);
        const deferreds = children.map((child) => embedImages(child, options));
        return Promise.all(deferreds).then(() => clonedNode);
    });
}
//# sourceMappingURL=embedImages.js.map

/***/ }),

/***/ 386:
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedResources.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldEmbed": () => (/* binding */ shouldEmbed),
/* harmony export */   "embedResources": () => (/* binding */ embedResources),
/* harmony export */   "filterPreferredFontFormat": () => (/* binding */ filterPreferredFontFormat),
/* harmony export */   "parseURLs": () => (/* binding */ parseURLs),
/* harmony export */   "embed": () => (/* binding */ embed)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 7782);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 482);


const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function shouldEmbed(string) {
    return string.search(URL_REGEX) !== -1;
}
function embedResources(cssString, baseUrl, options) {
    if (!shouldEmbed(cssString)) {
        return Promise.resolve(cssString);
    }
    const filteredCssString = filterPreferredFontFormat(cssString, options);
    return Promise.resolve(filteredCssString)
        .then(parseURLs)
        .then((urls) => urls.reduce((done, url) => done.then((ret) => embed(ret, url, baseUrl, options)), Promise.resolve(filteredCssString)));
}
function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat
        ? str
        : str.replace(FONT_SRC_REGEX, (match) => {
            while (true) {
                const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
                if (!format) {
                    return '';
                }
                if (format === preferredFontFormat) {
                    return `src: ${src};`;
                }
            }
        });
}
function parseURLs(str) {
    const result = [];
    str.replace(URL_REGEX, (raw, quotation, url) => {
        result.push(url);
        return raw;
    });
    return result.filter((url) => !(0,_util__WEBPACK_IMPORTED_MODULE_1__.isDataUrl)(url));
}
function embed(cssString, resourceURL, baseURL, options, get) {
    const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL)
        .then((url) => get ? get(url) : (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options))
        .then((data) => {
        if (typeof data === 'string') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.toDataURL)(data, (0,_util__WEBPACK_IMPORTED_MODULE_1__.getMimeType)(resourceURL));
        }
        return (0,_util__WEBPACK_IMPORTED_MODULE_1__.toDataURL)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_1__.getMimeType)(resourceURL) || data.contentType);
    })
        .then((dataURL) => cssString.replace(urlToRegex(resourceURL), `$1${dataURL}$3`))
        .then((content) => content, () => resolvedURL);
}
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) {
        return url;
    }
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) {
        return window.location.protocol + url;
    }
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) {
        return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement('base');
    const a = doc.createElement('a');
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
        base.href = baseUrl;
    }
    a.href = url;
    return a.href;
}
function urlToRegex(url) {
    return new RegExp(`(url\\(['"]?)(${escape(url)})(['"]?\\))`, 'g');
}
function escape(url) {
    return url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=embedResources.js.map

/***/ }),

/***/ 9884:
/*!********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedWebFonts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseWebFontRules": () => (/* binding */ parseWebFontRules),
/* harmony export */   "embedWebFonts": () => (/* binding */ embedWebFonts),
/* harmony export */   "getWebFontCss": () => (/* binding */ getWebFontCss),
/* harmony export */   "getCssRules": () => (/* binding */ getCssRules)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 482);
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ 386);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const cssFetchPromiseStore = {};
function parseWebFontRules(clonedNode) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (!clonedNode.ownerDocument) {
                reject(new Error('Provided element is not within a Document'));
            }
            resolve((0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(clonedNode.ownerDocument.styleSheets));
        })
            .then((styleSheets) => getCssRules(styleSheets))
            .then(getWebFontRules);
    });
}
function embedWebFonts(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return (options.fontEmbedCss != null
            ? Promise.resolve(options.fontEmbedCss)
            : getWebFontCss(clonedNode, options)).then((cssString) => {
            const styleNode = document.createElement('style');
            const sytleContent = document.createTextNode(cssString);
            styleNode.appendChild(sytleContent);
            if (clonedNode.firstChild) {
                clonedNode.insertBefore(styleNode, clonedNode.firstChild);
            }
            else {
                clonedNode.appendChild(styleNode);
            }
            return clonedNode;
        });
    });
}
function getWebFontCss(node, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return parseWebFontRules(node)
            .then((rules) => Promise.all(rules.map((rule) => {
            const baseUrl = rule.parentStyleSheet
                ? rule.parentStyleSheet.href
                : null;
            return (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.embedResources)(rule.cssText, baseUrl, options);
        })))
            .then((cssStrings) => cssStrings.join('\n'));
    });
}
function getCssRules(styleSheets) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = [];
        const promises = [];
        // First loop inlines imports
        styleSheets.forEach((sheet) => {
            if ('cssRules' in sheet) {
                try {
                    (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules).forEach((item, index) => {
                        if (item.type === CSSRule.IMPORT_RULE) {
                            let importIndex = index + 1;
                            promises.push(fetchCSS(item.href, sheet)
                                .then(embedFonts)
                                .then((cssText) => {
                                const parsed = parseCSS(cssText);
                                parsed.forEach((rule) => {
                                    try {
                                        sheet.insertRule(rule, rule.startsWith('@import')
                                            ? (importIndex = importIndex + 1)
                                            : sheet.cssRules.length);
                                    }
                                    catch (error) {
                                        console.log('Error inserting rule from remote css', {
                                            rule,
                                            error,
                                        });
                                    }
                                });
                            })
                                .catch((e) => {
                                console.log('Error loading remote css', e.toString());
                            }));
                        }
                    });
                }
                catch (e) {
                    const inline = styleSheets.find((a) => a.href === null) || document.styleSheets[0];
                    if (sheet.href != null) {
                        promises.push(fetchCSS(sheet.href, inline)
                            .then(embedFonts)
                            .then((cssText) => {
                            const parsed = parseCSS(cssText);
                            parsed.forEach((rule) => {
                                inline.insertRule(rule, sheet.cssRules.length);
                            });
                        })
                            .catch((e) => {
                            console.log('Error loading remote stylesheet', e.toString());
                        }));
                    }
                    console.log('Error inlining remote css file', e.toString());
                }
            }
        });
        return Promise.all(promises).then(() => {
            // Second loop parses rules
            styleSheets.forEach((sheet) => {
                if ('cssRules' in sheet) {
                    try {
                        (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules).forEach((item) => {
                            ret.push(item);
                        });
                    }
                    catch (e) {
                        console.log(`Error while reading CSS rules from ${sheet.href}`, e.toString());
                    }
                }
            });
            return ret;
        });
    });
}
function getWebFontRules(cssRules) {
    return cssRules
        .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
        .filter((rule) => (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.shouldEmbed)(rule.style.getPropertyValue('src')));
}
function parseCSS(source) {
    if (source === undefined) {
        return [];
    }
    let cssText = source;
    const css = [];
    const cssKeyframeRegex = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})';
    const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' +
        '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})'; // to match css & media queries together
    const cssCommentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // strip out comments
    cssText = cssText.replace(cssCommentsRegex, '');
    const keyframesRegex = new RegExp(cssKeyframeRegex, 'gi');
    let arr;
    while (true) {
        arr = keyframesRegex.exec(cssText);
        if (arr === null) {
            break;
        }
        css.push(arr[0]);
    }
    cssText = cssText.replace(keyframesRegex, '');
    // unified regex
    const unified = new RegExp(combinedCSSRegex, 'gi');
    while (true) {
        arr = importRegex.exec(cssText);
        if (arr === null) {
            arr = unified.exec(cssText);
            if (arr === null) {
                break;
            }
            else {
                importRegex.lastIndex = unified.lastIndex;
            }
        }
        else {
            unified.lastIndex = importRegex.lastIndex;
        }
        css.push(arr[0]);
    }
    return css;
}
function fetchCSS(url, sheet) {
    if (cssFetchPromiseStore[url]) {
        return cssFetchPromiseStore[url];
    }
    const promise = fetch(url).then((res) => {
        return {
            url,
            cssText: res.text(),
        };
    }, (e) => {
        console.log('ERROR FETCHING CSS: ', e.toString());
    });
    cssFetchPromiseStore[url] = promise;
    return promise;
}
function embedFonts(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return data.cssText.then((resolved) => {
            let cssText = resolved;
            const regexUrlFind = /url\(["']?([^"')]+)["']?\)/g;
            const fontLocations = cssText.match(/url\([^)]+\)/g) || [];
            const fontLoadedPromises = fontLocations.map((location) => {
                let url = location.replace(regexUrlFind, '$1');
                if (!url.startsWith('https://')) {
                    const source = data.url;
                    url = new URL(url, source).href;
                }
                return new Promise((resolve, reject) => {
                    fetch(url)
                        .then((res) => res.blob())
                        .then((blob) => {
                        const reader = new FileReader();
                        reader.addEventListener('load', (res) => {
                            // Side Effect
                            cssText = cssText.replace(location, `url(${reader.result})`);
                            resolve([location, reader.result]);
                        });
                        reader.readAsDataURL(blob);
                    })
                        .catch(reject);
                });
            });
            return Promise.all(fontLoadedPromises).then(() => cssText);
        });
    });
}
//# sourceMappingURL=embedWebFonts.js.map

/***/ }),

/***/ 7782:
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/getBlobFromURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlobFromURL": () => (/* binding */ getBlobFromURL)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 482);
/* tslint:disable:max-line-length */

// KNOWN ISSUE
// -----------
// Can not handle redirect-url, such as when access 'http://something.com/avatar.png'
// will redirect to 'http://something.com/65fc2ffcc8aea7ba65a1d1feda173540'
const TIMEOUT = 30000;
const cache = {};
function isFont(filename) {
    return /ttf|otf|eot|woff2?/i.test(filename);
}
function getBlobFromURL(url, options) {
    let href = url.replace(/\?.*/, '');
    if (isFont(href)) {
        href = href.replace(/.*\//, '');
    }
    if (cache[href]) {
        return cache[href];
    }
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) {
        // tslint:disable-next-line
        url += (/\?/.test(url) ? '&' : '?') + new Date().getTime();
    }
    const failed = (reason) => {
        let placeholder = '';
        if (options.imagePlaceholder) {
            const parts = options.imagePlaceholder.split(/,/);
            if (parts && parts[1]) {
                placeholder = parts[1];
            }
        }
        let msg = `Failed to fetch resource: ${url}`;
        if (reason) {
            msg = typeof reason === 'string' ? reason : reason.message;
        }
        if (msg) {
            console.error(msg);
        }
        return placeholder;
    };
    const deferred = window.fetch
        ? window
            .fetch(url)
            .then((res) => res.blob().then((blob) => ({
            blob,
            contentType: res.headers.get('Content-Type') || '',
        })))
            .then(({ blob, contentType }) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve({
                contentType,
                blob: reader.result,
            });
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }))
            .then(({ blob, contentType }) => ({
            contentType,
            blob: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getDataURLContent)(blob),
        }))
        : new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const timeout = () => {
                reject(new Error(`Timeout of ${TIMEOUT}ms occured while fetching resource: ${url}`));
            };
            const done = () => {
                if (req.readyState !== 4) {
                    return;
                }
                if (req.status !== 200) {
                    reject(new Error(`Failed to fetch resource: ${url}, status: ${req.status}`));
                    return;
                }
                const encoder = new FileReader();
                encoder.onloadend = () => {
                    resolve({
                        blob: (0,_util__WEBPACK_IMPORTED_MODULE_0__.getDataURLContent)(encoder.result),
                        contentType: req.getResponseHeader('Content-Type') || '',
                    });
                };
                encoder.readAsDataURL(req.response);
            };
            req.onreadystatechange = done;
            req.ontimeout = timeout;
            req.responseType = 'blob';
            req.timeout = TIMEOUT;
            req.open('GET', url, true);
            req.send();
        });
    const promise = deferred.catch(failed);
    // cache result
    cache[href] = promise;
    return promise;
}
//# sourceMappingURL=getBlobFromURL.js.map

/***/ }),

/***/ 2537:
/*!************************************************!*\
  !*** ./node_modules/html-to-image/es/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSvg": () => (/* binding */ toSvg),
/* harmony export */   "toSvgDataURL": () => (/* binding */ toSvgDataURL),
/* harmony export */   "toCanvas": () => (/* binding */ toCanvas),
/* harmony export */   "toPixelData": () => (/* binding */ toPixelData),
/* harmony export */   "toPng": () => (/* binding */ toPng),
/* harmony export */   "toJpeg": () => (/* binding */ toJpeg),
/* harmony export */   "toBlob": () => (/* binding */ toBlob),
/* harmony export */   "getWebFontEmbedCss": () => (/* binding */ getWebFontEmbedCss)
/* harmony export */ });
/* harmony import */ var _cloneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneNode */ 1188);
/* harmony import */ var _embedImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedImages */ 8765);
/* harmony import */ var _embedWebFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embedWebFonts */ 9884);
/* harmony import */ var _createSvgDataURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSvgDataURL */ 7997);
/* harmony import */ var _applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applyStyleWithOptions */ 628);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ 482);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function getImageSize(domNode, options = {}) {
    const width = options.width || (0,_util__WEBPACK_IMPORTED_MODULE_5__.getNodeWidth)(domNode);
    const height = options.height || (0,_util__WEBPACK_IMPORTED_MODULE_5__.getNodeHeight)(domNode);
    return { width, height };
}
function toSvg(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(domNode, options);
        return (0,_cloneNode__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(domNode, options, true)
            .then((clonedNode) => (0,_embedWebFonts__WEBPACK_IMPORTED_MODULE_2__.embedWebFonts)(clonedNode, options))
            .then((clonedNode) => (0,_embedImages__WEBPACK_IMPORTED_MODULE_1__.embedImages)(clonedNode, options))
            .then((clonedNode) => (0,_applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_4__.applyStyleWithOptions)(clonedNode, options))
            .then((clonedNode) => (0,_createSvgDataURL__WEBPACK_IMPORTED_MODULE_3__.createSvgDataURL)(clonedNode, width, height));
    });
}
const toSvgDataURL = toSvg;
function toCanvas(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toSvg(domNode, options)
            .then(_util__WEBPACK_IMPORTED_MODULE_5__.createImage)
            .then((0,_util__WEBPACK_IMPORTED_MODULE_5__.delay)(100))
            .then((image) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const ratio = options.pixelRatio || (0,_util__WEBPACK_IMPORTED_MODULE_5__.getPixelRatio)();
            const { width, height } = getImageSize(domNode, options);
            const canvasWidth = options.canvasWidth || width;
            const canvasHeight = options.canvasHeight || height;
            canvas.width = canvasWidth * ratio;
            canvas.height = canvasHeight * ratio;
            canvas.style.width = `${canvasWidth}`;
            canvas.style.height = `${canvasHeight}`;
            if (options.backgroundColor) {
                context.fillStyle = options.backgroundColor;
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            return canvas;
        });
    });
}
function toPixelData(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { width, height } = getImageSize(domNode, options);
        return toCanvas(domNode, options).then((canvas) => {
            const ctx = canvas.getContext('2d');
            return ctx.getImageData(0, 0, width, height).data;
        });
    });
}
function toPng(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then((canvas) => canvas.toDataURL());
    });
}
function toJpeg(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then((canvas) => canvas.toDataURL('image/jpeg', options.quality || 1));
    });
}
function toBlob(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return toCanvas(domNode, options).then(_util__WEBPACK_IMPORTED_MODULE_5__.canvasToBlob);
    });
}
function getWebFontEmbedCss(domNode, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0,_embedWebFonts__WEBPACK_IMPORTED_MODULE_2__.getWebFontCss)(domNode, options);
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 482:
/*!***********************************************!*\
  !*** ./node_modules/html-to-image/es/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "getExtension": () => (/* binding */ getExtension),
/* harmony export */   "getMimeType": () => (/* binding */ getMimeType),
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "isDataUrl": () => (/* binding */ isDataUrl),
/* harmony export */   "toDataURL": () => (/* binding */ toDataURL),
/* harmony export */   "getDataURLContent": () => (/* binding */ getDataURLContent),
/* harmony export */   "canvasToBlob": () => (/* binding */ canvasToBlob),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "getNodeWidth": () => (/* binding */ getNodeWidth),
/* harmony export */   "getNodeHeight": () => (/* binding */ getNodeHeight),
/* harmony export */   "getPixelRatio": () => (/* binding */ getPixelRatio),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "svgToDataURL": () => (/* binding */ svgToDataURL),
/* harmony export */   "getBlobFromImageURL": () => (/* binding */ getBlobFromImageURL)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: 'application/font-truetype',
    eot: 'application/vnd.ms-fontobject',
    png: 'image/png',
    jpg: JPEG,
    jpeg: JPEG,
    gif: 'image/gif',
    tiff: 'image/tiff',
    svg: 'image/svg+xml',
};
const uuid = (function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = () => `0000${((Math.random() * Math.pow(36, 4)) << 0).toString(36)}`.slice(-4);
    return () => {
        counter += 1;
        return `u${random()}${counter}`;
    };
})();
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : '';
}
function getMimeType(url) {
    const ext = getExtension(url).toLowerCase();
    return mimes[ext] || '';
}
function delay(ms) {
    return (args) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(args);
        }, ms);
    });
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function toDataURL(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
function getDataURLContent(dataURL) {
    return dataURL.split(/,/)[1];
}
function toBlob(canvas) {
    return new Promise((resolve) => {
        const binaryString = window.atob(canvas.toDataURL().split(',')[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for (let i = 0; i < len; i += 1) {
            binaryArray[i] = binaryString.charCodeAt(i);
        }
        resolve(new Blob([binaryArray], { type: 'image/png' }));
    });
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) {
        return new Promise((resolve) => canvas.toBlob(resolve));
    }
    return toBlob(canvas);
}
function toArray(arrayLike) {
    const result = [];
    for (let i = 0, l = arrayLike.length; i < l; i += 1) {
        result.push(arrayLike[i]);
    }
    return result;
}
function px(node, styleProperty) {
    const val = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(val.replace('px', ''));
}
function getNodeWidth(node) {
    const leftBorder = px(node, 'border-left-width');
    const rightBorder = px(node, 'border-right-width');
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, 'border-top-width');
    const bottomBorder = px(node, 'border-bottom-width');
    return node.clientHeight + topBorder + bottomBorder;
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    }
    catch (e) { }
    const val = FINAL_PROCESS && FINAL_PROCESS.env
        ? FINAL_PROCESS.env.devicePixelRatio
        : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (isNaN(ratio)) {
            ratio = 1;
        }
    }
    return ratio || window.devicePixelRatio || 1;
}
function createImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.crossOrigin = 'anonymous';
        image.src = url;
    });
}
function svgToDataURL(svg) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve()
            .then(() => new XMLSerializer().serializeToString(svg))
            .then(encodeURIComponent)
            .then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
    });
}
function getBlobFromImageURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return createImage(url).then((image) => {
            const { width, height } = image;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const ratio = getPixelRatio();
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}`;
            canvas.style.height = `${height}`;
            context.scale(ratio, ratio);
            context.drawImage(image, 0, 0);
            const dataURL = canvas.toDataURL(getMimeType(url));
            return getDataURLContent(dataURL);
        });
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 838:
/*!*******************************************************************!*\
  !*** ./src/app/pages/users/editimage/editimage-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditimagePageRoutingModule": () => (/* binding */ EditimagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editimage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editimage.page */ 4053);




const routes = [
    {
        path: '',
        component: _editimage_page__WEBPACK_IMPORTED_MODULE_0__.EditimagePage
    }
];
let EditimagePageRoutingModule = class EditimagePageRoutingModule {
};
EditimagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditimagePageRoutingModule);



/***/ }),

/***/ 274:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/editimage/editimage.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditimagePageModule": () => (/* binding */ EditimagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editimage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editimage-routing.module */ 838);
/* harmony import */ var _editimage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editimage.page */ 4053);







let EditimagePageModule = class EditimagePageModule {
};
EditimagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editimage_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditimagePageRoutingModule
        ],
        declarations: [_editimage_page__WEBPACK_IMPORTED_MODULE_1__.EditimagePage]
    })
], EditimagePageModule);



/***/ }),

/***/ 4053:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/editimage/editimage.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditimagePage": () => (/* binding */ EditimagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editimage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editimage.page.html */ 1735);
/* harmony import */ var _editimage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editimage.page.scss */ 7133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image */ 2537);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tokenstorage.service */ 2727);










let EditimagePage = class EditimagePage {
    constructor(location, router, userService, alertService, tokenStorage) {
        this.location = location;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.tokenStorage = tokenStorage;
        this.businessName = "Company";
        this.contactNo = 1234567890;
    }
    ngOnInit() {
        this.getImage();
        this.getUser();
        this.getBusinessDetails();
    }
    getBusinessDetails() {
        this.userService.getBusinessDetails(this.user_id).subscribe(data => {
            if (data['businessName'] !== null) {
                this.businessName = data['businessName'];
            }
            if (!data['contactNo'] !== null) {
                this.contactNo = data['contactNo'];
            }
        });
    }
    popFileChooser() {
        this.uploader.nativeElement.click();
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (event) => {
                this.logo = (event.target.result);
            };
        }
    }
    getImage() {
        this.image_url = this.userService.getImageFromStorage();
    }
    getUser() {
        let user = this.tokenStorage.DecodeToken();
        this.user_id = user['user_id'];
        this.business_id = user['business_id'];
    }
    downloadImage() {
        let image = document.getElementById("image");
        html_to_image__WEBPACK_IMPORTED_MODULE_2__.toCanvas(image).then(canvas => {
            this.canvas.nativeElement.src = canvas.toDataURL();
            this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
            this.downloadLink.nativeElement.download = 'image.png';
            this.downloadLink.nativeElement.click();
            this.userService.saveEditedImage(canvas.toDataURL(), this.user_id).subscribe(data => {
                this.alertService.presentToast(data['msg'], 'success');
                this.router.navigate(['/home']);
            });
        });
    }
    ngOnDestroy() {
        this.userService.remove('image');
    }
};
EditimagePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tokenstorage_service__WEBPACK_IMPORTED_MODULE_5__.TokenStorageService }
];
EditimagePage.propDecorators = {
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['canvas',] }],
    downloadLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['downloadLink',] }],
    uploader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["uploader", { static: true },] }]
};
EditimagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-editimage',
        template: _raw_loader_editimage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editimage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditimagePage);



/***/ }),

/***/ 7133:
/*!***********************************************************!*\
  !*** ./src/app/pages/users/editimage/editimage.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-back-button {\n  display: block;\n}\n\n#choose-file {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.content {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.content ion-card {\n  z-index: 1;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.content ion-card ion-card-content {\n  position: relative;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.content ion-card ion-card-content #logo {\n  position: absolute;\n  top: 4%;\n  left: 7%;\n  border-radius: 50%;\n  width: 55px;\n  height: 60px;\n}\n\n.content ion-card ion-card-content #background-img {\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.content ion-card ion-card-content #businessName {\n  position: absolute;\n  top: 3.5%;\n  left: 24%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  z-index: 5;\n  height: 65px;\n  width: 210px;\n}\n\n.content ion-card ion-card-content #businessName h1 {\n  color: #1d1c1c;\n  text-overflow: ellipsis;\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n\n.content ion-card ion-card-content h4 {\n  position: absolute;\n  z-index: 5;\n  color: #1d1c1c;\n  top: 13.8%;\n  left: 48%;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.content ion-button {\n  margin: 0 1rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  justify-self: center;\n}\n\n.content ion-button ion-icon {\n  margin-right: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRpbWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBTEE7RUFNSSxVQUFTO0VBQ1QsYUFBYTtFQUNiLHFDQUFxQztBQUd6Qzs7QUFYQTtFQVVNLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUszQjs7QUFsQkE7RUFnQlEsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBTXBCOztBQTNCQTtFQXlCUSxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBTXBDOztBQWhDQTtFQThCUSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtBQU1wQjs7QUE5Q0E7RUEwQ1UsY0FBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFRMUI7O0FBckRBO0VBbURRLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBc0I7RUFDdEIsVUFBUztFQUNULFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBTXpCOztBQS9EQTtFQStESSxjQUFjO0VBQ2QsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBSXhCOztBQXJFQTtFQW9FTSxrQkFBa0I7QUFLeEIiLCJmaWxlIjoiZWRpdGltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjaG9vc2UtZmlsZXtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uY29udGVudHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaW9uLWNhcmR7XG4gICAgei1pbmRleDoxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICNsb2dve1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNCU7XG4gICAgICAgIGxlZnQ6IDclO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNiYWNrZ3JvdW5kLWltZ3tcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2J1c2luZXNzTmFtZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMuNSU7XG4gICAgICAgIGxlZnQ6IDI0JTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgaDF7XG4gICAgICAgICAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgaDR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcbiAgICAgICAgdG9wOjEzLjglO1xuICAgICAgICBsZWZ0OiA0OCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLWJ1dHRvbntcbiAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG5cbiAgICBpb24taWNvbntcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 1735:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/editimage/editimage.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-button slot=\"end\" id=\"choose-file\" (click)=\"popFileChooser()\">\n      Upload Logo\n      <input type=\"file\" (change)=\"onSelectFile($event)\" accept=\"image/png, image/gif, image/jpeg\" #uploader hidden>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-card>\n      <ion-card-content id=\"image\">\n        <!-- <ion-img [src]=\"logo\" id=\"logo\"></ion-img> -->\n        <img [src]=\"logo\" id=\"logo\" *ngIf=\"logo\">\n        <ion-img [src]=\"'data:image/png;base64, '+image_url\" id=\"background-img\"></ion-img>\n        <div id=\"businessName\">\n          <h1 contenteditable=\"true\">{{businessName}}</h1>\n        </div>\n        <h4 contenteditable=\"true\">+91{{contactNo}}</h4>\n      </ion-card-content>\n    </ion-card>\n    <ion-button (click)=\"downloadImage()\">\n      <ion-icon name=\"cloud-download-outline\"></ion-icon> Download Image\n    </ion-button>\n  </div>\n  <div id=\"download\">\n    <img #canvas>\n    <a #downloadLink></a>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_editimage_editimage_module_ts.js.map