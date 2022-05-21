"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _diccionario = require("../controllers/diccionario.controller");

var router = (0, _express.Router)();
router.get('/diccionario', _diccionario.getPalabras);
var _default = router;
exports["default"] = _default;