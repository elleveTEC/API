"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var router = (0, _express.Router)();
router.get('/usuarios', _usuarios.getUsuarios);
router.post('/usuarios', _usuarios.createUsuario);
router.get('/usuarios/:UsuarioID', _usuarios.getUsuario);
router["delete"]('/usuarios/:UsuarioID', _usuarios.deleteUsuario);
router.put('/usuarios/:UsuarioID', _usuarios.updateUsuario);
var _default = router;
exports["default"] = _default;