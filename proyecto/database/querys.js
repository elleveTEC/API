"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getUsuarios: 'Select * From Usuario Where Rol = 0',
  createUsuario: 'Insert into Usuario (Nombre, Apellido, Correo, Contrasena, Puesto, Rol) Values (@Nombre, @Apellido, @Correo, @Contrasena, @Puesto, @Rol)',
  getUsuario: 'Select * From Usuario Where UsuarioID = @UsuarioID',
  deleteUsuario: 'Delete From Usuario Where UsuarioID = @UsuarioID',
  updateUsuario: 'Update Usuario Set Contrasena = @Contrasena Where UsuarioID = @UsuarioID',
  getPalabras: 'Select * From Diccionario',
  getRegistrosUsuario: 'Select * From Registro R, Usuario U Where R.UsuarioID = U.UsuarioID and U.UsuarioID = @UsuarioID',
  createRegistro: 'Insert into Registro (UsuarioID, Fecha_Calculo, Fecha_Inicio, Fecha_Fin, Nombre_Actividad, Descripcion, Resumen, Dias) Values (@UsuarioID, @FechaCalculo, @FechaInicio, @FechaFin, @NombreActividad, @Descripcion, @Resumen, @Dias)'
};
exports.queries = queries;