"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegistrosUsuario = exports.createRegistro = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getRegistrosUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var UsuarioID, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            UsuarioID = req.params.UsuarioID;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().input('usuarioID', _database.sql.NVarChar, UsuarioID).query(_database.queries.getRegistrosUsuario);

          case 6:
            result = _context.sent;
            res.send(result.recordset);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRegistrosUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getRegistrosUsuario = getRegistrosUsuario;

var createRegistro = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, UsuarioID, Fecha_Calculo, Fecha_Inicio, Fecha_Fin, Nombre_Actividad, Descripcion, Resumen, Dias, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, UsuarioID = _req$body.UsuarioID, Fecha_Calculo = _req$body.Fecha_Calculo, Fecha_Inicio = _req$body.Fecha_Inicio, Fecha_Fin = _req$body.Fecha_Fin, Nombre_Actividad = _req$body.Nombre_Actividad, Descripcion = _req$body.Descripcion, Resumen = _req$body.Resumen, Dias = _req$body.Dias;

            if (!(UsuarioID == null || Fecha_Calculo == null || Fecha_Inicio == null || Fecha_Fin == null || Nombre_Actividad == null || Descripcion == null || Resumen == null || Dias == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Faltan campos por llenar'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('usuarioID', _database.sql.Int, UsuarioID).input('fechaCalculo', _database.sql.Date, Fecha_Calculo).input('fechaInicio', _database.sql.Date, Fecha_Inicio).input('fechaFin', _database.sql.Date, Fecha_Fin).input('nombreActividad', _database.sql.NVarChar(50), Nombre_Actividad).input('descripcion', _database.sql.NVarChar(500), Descripcion).input('resumen', _database.sql.NVarChar(50), Resumen).input('dias', _database.sql.Int, Dias).query(_database.queries.createRegistro);

          case 9:
            res.json({
              UsuarioID: UsuarioID,
              Fecha_Calculo: Fecha_Calculo,
              Fecha_Inicio: Fecha_Inicio,
              Fecha_Fin: Fecha_Fin,
              Nombre_Actividad: Nombre_Actividad,
              Descripcion: Descripcion,
              Resumen: Resumen,
              Dias: Dias
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createRegistro(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createRegistro = createRegistro;