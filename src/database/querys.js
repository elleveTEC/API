export const queries = {
    getUsuarios: 'Select * From Usuario', 
    createUsuario: 'Insert into Usuario (Nombre, Apellido, Correo, Contrasena, Puesto) Values (@Nombre, @Apellido, @Correo, @Contrasena, @Puesto)',
    getUsuario: 'Select * From Usuario Where UsuarioID = @UsuarioID', 
    postUsuarioLogin: 'Select * From Usuario Where Correo = @Correo and Contrasena = @Contrasena',
    deleteUsuario: 'Delete From Usuario Where UsuarioID = @UsuarioID',
    updateUsuario: 'Update Usuario Set Contrasena = @NuevaContrasena Where Correo = @Correo and Contrasena = @Contrasena',
    getPalabras: 'Select * From Diccionario',
    getRegistrosUsuario: 'Select R.* From Registro R, Usuario U Where R.UsuarioID = U.UsuarioID and U.UsuarioID = @UsuarioID',
    createRegistro: 'Insert into Registro (UsuarioID, Fecha_Calculo, Fecha_Inicio, Fecha_Fin, Nombre_Actividad, Descripcion, Resumen, Dias) Values (@UsuarioID, @FechaCalculo, @FechaInicio, @FechaFin, @NombreActividad, @Descripcion, @Resumen, @Dias)',
}