import {getConnection, sql, queries} from "../database";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarios);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

export const createUsuario = async (req, res) => {
    // En caso de que puesto no sea obligatorio, establecer como let en lugar de const
    const {Nombre, Apellido, Correo, Contrasena, Puesto, Rol} = req.body

    if (Nombre == null || Apellido == null || Correo == null || Contrasena == null || Puesto == null || Rol == null){
        return res.status(400).json({msg: 'Faltan campos por llenar'})
    }
    try {
        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.NVarChar, Nombre)
            .input('apellido', sql.NVarChar, Apellido)
            .input('correo', sql.NVarChar, Correo)
            .input('contrasena', sql.NVarChar, Contrasena)
            .input('puesto', sql.NVarChar, Puesto)
            .input('rol', sql.Bit, Rol)
            .query(queries.createUsuario);

        res.json({Nombre, Apellido, Correo, Contrasena, Puesto, Rol});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUsuario = async (req, res) => {
    const {UsuarioID} = req.params
    const pool = await getConnection();
    const result = await pool.request()
        .input('usuarioID', sql.Int, UsuarioID)
        .query(queries.getUsuario);

    res.send(result.recordset[0]);
};

export const deleteUsuario = async (req, res) => {
    const {UsuarioID} = req.params
    const pool = await getConnection();
    await pool.request()
        .input('usuarioID', sql.NVarChar, UsuarioID)
        .query(queries.deleteUsuario);

    res.send(204);
};

export const updateUsuario = async (req, res) => {
    const {Contrasena} = req.body;
    const {UsuarioID} = req.params;
    if (UsuarioID == null || Contrasena === null){
        return res.status(400).json({msg: "Faltan datos"}); 
    } 
    const pool = await getConnection();
    await pool.request()
        .input('usuarioID', sql.NVarChar, UsuarioID)
        .input('contrasena', sql.NVarChar, Contrasena)
        .query(queries.updateUsuario);

    res.json({UsuarioID});
}