import {getConnection, sql, queries} from "../database";

export const getUserNoAdmin = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarios);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createUser = async (req, res) => {
    // En caso de que puesto no sea obligatorio, establecer como let en lugar de const
    const {Nombre, Apellido, Correo, Contrasena, Puesto} = req.body

    if (Nombre == null || Apellido == null || Correo == null || Contrasena == null || Puesto == null){
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
            .query(queries.createUsuario);
        res.json({Nombre, Apellido, Correo, Contrasena, Puesto});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUserByID= async (req, res) => {
    const {UsuarioID} = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('usuarioID', sql.Int, UsuarioID)
            .query(queries.getUsuario);
        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const deleteUserByID = async (req, res) => {
    const {UsuarioID} = req.params

    try {
        const pool = await getConnection();
        await pool.request()
            .input('usuarioID', sql.NVarChar, UsuarioID)
            .query(queries.deleteUsuario);

        res.send(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateUser = async (req, res) => {
    const {NuevaContrasena} = req.body;
    const {Correo, Contrasena} = req.params;

    if (NuevaContrasena == null){
        return res.status(400).json({msg: 'Faltan campos por llenar'})
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input('correo', sql.NVarChar, Correo)
            .input('contrasena', sql.NVarChar, Contrasena)
            .input('nuevacontrasena', sql.NVarChar, NuevaContrasena)
            .query(queries.updateUsuario);
        res.json({Contrasena});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const postUserLogin = async (req, res) => {
    const {Correo, Contrasena} = req.body

    if (Correo == null || Contrasena == null){
        return res.status(400).json({msg: 'Faltan campos por llenar'})
    }
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('correo', sql.NVarChar, Correo)
            .input('contrasena', sql.NVarChar, Contrasena)
            .query(queries.postUsuarioLogin);

        if (result.recordset.length > 0) {
            res.json(result.recordset);
            return;
        }
        res.status(302).send('Incorrect user or password');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
