"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios.routes"));

var _diccionario = _interopRequireDefault(require("./routes/diccionario.routes"));

var _registros = _interopRequireDefault(require("./routes/registros.routes"));

var app = (0, _express["default"])(); //settings 

app.set('port', _config["default"].port); //middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_usuarios["default"]);
app.use(_diccionario["default"]);
app.use(_registros["default"]);
var _default = app;
exports["default"] = _default;