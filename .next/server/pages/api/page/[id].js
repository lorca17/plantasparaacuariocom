"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/page/[id]";
exports.ids = ["pages/api/page/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/page/[id].jsx":
/*!*********************************!*\
  !*** ./pages/api/page/[id].jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    let numeroPagina = req.query.id;\n    let todosAticulos = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(jsonDirectory).slice(numeroPagina - 50, numeroPagina);\n    let datosArticulos = await todosAticulos.map((e)=>{\n        let fileName = jsonDirectory + \"/\" + e;\n        let datosArchivo = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fileName, \"utf-8\"));\n        // delete salida[\"articulo\"];\n        const { articulo , ...salida } = datosArchivo;\n        salida.slug = e.split(\".\")[0];\n        return salida;\n    });\n    let json = {\n        pagina: numeroPagina,\n        todosAticulos,\n        datosArticulos\n    };\n    res.status(200).json(json);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGFnZS9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQjtBQUNJO0FBRVQsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsZ0JBQWdCSixnREFBUyxDQUFDTSxRQUFRQyxHQUFHLElBQUk7SUFFL0MsSUFBSUMsZUFBZU4sSUFBSU8sS0FBSyxDQUFDQyxFQUFFO0lBRS9CLElBQUlDLGdCQUFnQixNQUFNWixxREFDWixDQUFDSyxlQUNaUyxLQUFLLENBQUNMLGVBQWUsSUFBSUE7SUFFNUIsSUFBSU0saUJBQWlCLE1BQU1ILGNBQWNJLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO1FBQ2xELElBQUlDLFdBQVdiLGdCQUFnQixNQUFNWTtRQUNyQyxJQUFJRSxlQUFlQyxLQUFLQyxLQUFLLENBQUNyQixzREFBZSxDQUFDa0IsVUFBVTtRQUN4RCw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFSyxTQUFRLEVBQUUsR0FBR0MsUUFBUSxHQUFHTDtRQUNoQ0ssT0FBT0MsSUFBSSxHQUFHUixFQUFFUyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDN0IsT0FBT0Y7SUFDVDtJQUVBLElBQUlHLE9BQU87UUFBRUMsUUFBUW5CO1FBQWNHO1FBQWVHO0lBQWU7SUFDakVYLElBQUl5QixNQUFNLENBQUMsS0FBS0YsSUFBSSxDQUFDQTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWF3ZWIvLi9wYWdlcy9hcGkvcGFnZS9baWRdLmpzeD9lYzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIik7XG5cbiAgbGV0IG51bWVyb1BhZ2luYSA9IHJlcS5xdWVyeS5pZDtcblxuICBsZXQgdG9kb3NBdGljdWxvcyA9IGF3YWl0IGZzXG4gICAgLnJlYWRkaXJTeW5jKGpzb25EaXJlY3RvcnkpXG4gICAgLnNsaWNlKG51bWVyb1BhZ2luYSAtIDUwLCBudW1lcm9QYWdpbmEpO1xuXG4gIGxldCBkYXRvc0FydGljdWxvcyA9IGF3YWl0IHRvZG9zQXRpY3Vsb3MubWFwKChlKSA9PiB7XG4gICAgbGV0IGZpbGVOYW1lID0ganNvbkRpcmVjdG9yeSArIFwiL1wiICsgZTtcbiAgICBsZXQgZGF0b3NBcmNoaXZvID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZU5hbWUsIFwidXRmLThcIikpO1xuICAgIC8vIGRlbGV0ZSBzYWxpZGFbXCJhcnRpY3Vsb1wiXTtcbiAgICBjb25zdCB7IGFydGljdWxvLCAuLi5zYWxpZGEgfSA9IGRhdG9zQXJjaGl2bztcbiAgICBzYWxpZGEuc2x1ZyA9IGUuc3BsaXQoXCIuXCIpWzBdO1xuICAgIHJldHVybiBzYWxpZGE7XG4gIH0pO1xuXG4gIGxldCBqc29uID0geyBwYWdpbmE6IG51bWVyb1BhZ2luYSwgdG9kb3NBdGljdWxvcywgZGF0b3NBcnRpY3Vsb3MgfTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oanNvbik7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIm51bWVyb1BhZ2luYSIsInF1ZXJ5IiwiaWQiLCJ0b2Rvc0F0aWN1bG9zIiwicmVhZGRpclN5bmMiLCJzbGljZSIsImRhdG9zQXJ0aWN1bG9zIiwibWFwIiwiZSIsImZpbGVOYW1lIiwiZGF0b3NBcmNoaXZvIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwiYXJ0aWN1bG8iLCJzYWxpZGEiLCJzbHVnIiwic3BsaXQiLCJqc29uIiwicGFnaW5hIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/page/[id].jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/page/[id].jsx"));
module.exports = __webpack_exports__;

})();