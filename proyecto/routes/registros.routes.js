"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _registros = require("../controllers/registros.controller");

var router = (0, _express.Router)();
router.get('/registros/:UsuarioID', _registros.getRegistrosUsuario);
router.post('/registros', _registros.createRegistro);
var _default = router;
exports["default"] = _default;