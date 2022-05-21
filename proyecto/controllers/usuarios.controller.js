"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsuario = exports.getUsuarios = exports.getUsuario = exports.deleteUsuario = exports.createUsuario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getUsuarios);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsuarios = getUsuarios;

var createUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, Nombre, Apellido, Correo, Contrasena, Puesto, Rol, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // En caso de que puesto no sea obligatorio, establecer como let en lugar de const
            _req$body = req.body, Nombre = _req$body.Nombre, Apellido = _req$body.Apellido, Correo = _req$body.Correo, Contrasena = _req$body.Contrasena, Puesto = _req$body.Puesto, Rol = _req$body.Rol;

            if (!(Nombre == null || Apellido == null || Correo == null || Contrasena == null || Puesto == null || Rol == null)) {
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
            return pool.request().input('nombre', _database.sql.NVarChar, Nombre).input('apellido', _database.sql.NVarChar, Apellido).input('correo', _database.sql.NVarChar, Correo).input('contrasena', _database.sql.NVarChar, Contrasena).input('puesto', _database.sql.NVarChar, Puesto).input('rol', _database.sql.Bit, Rol).query(_database.queries.createUsuario);

          case 9:
            res.json({
              Nombre: Nombre,
              Apellido: Apellido,
              Correo: Correo,
              Contrasena: Contrasena,
              Puesto: Puesto,
              Rol: Rol
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

  return function createUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createUsuario = createUsuario;

var getUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var UsuarioID, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            UsuarioID = req.params.UsuarioID;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('usuarioID', _database.sql.Int, UsuarioID).query(_database.queries.getUsuario);

          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUsuario = getUsuario;

var deleteUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var UsuarioID, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            UsuarioID = req.params.UsuarioID;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('usuarioID', _database.sql.NVarChar, UsuarioID).query(_database.queries.deleteUsuario);

          case 6:
            res.send(204);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUsuario = deleteUsuario;

var updateUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var Contrasena, UsuarioID, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            Contrasena = req.body.Contrasena;
            UsuarioID = req.params.UsuarioID;

            if (!(UsuarioID == null || Contrasena === null)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: "Faltan datos"
            }));

          case 4:
            _context5.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context5.sent;
            _context5.next = 9;
            return pool.request().input('usuarioID', _database.sql.NVarChar, UsuarioID).input('contrasena', _database.sql.NVarChar, Contrasena).query(_database.queries.updateUsuario);

          case 9:
            res.json({
              UsuarioID: UsuarioID
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUsuario = updateUsuario;