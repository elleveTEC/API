import {getConnection, sql, queries} from "../database";

export const getRecordUser = async (req, res) => {
    const {UsuarioID} = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('usuarioID', sql.NVarChar, UsuarioID)
            .query(queries.getRegistrosUsuario); 
        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

export const createRecord = async (req, res) => {
    const {UsuarioID, Fecha_Calculo, Fecha_Inicio, Fecha_Fin, Nombre_Actividad, Descripcion, Resumen, Dias} = req.body

    if (UsuarioID == null || Fecha_Calculo == null || Fecha_Inicio == null || Fecha_Fin == null || Nombre_Actividad == null || Descripcion == null || Resumen == null || Dias == null){
        return res.status(400).json({msg: 'Faltan campos por llenar'})
    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input('usuarioID', sql.Int, UsuarioID)
            .input('fechaCalculo', sql.Date, Fecha_Calculo)
            .input('fechaInicio', sql.Date, Fecha_Inicio)
            .input('fechaFin', sql.Date, Fecha_Fin)
            .input('nombreActividad', sql.NVarChar(50), Nombre_Actividad)
            .input('descripcion', sql.NVarChar(500), Descripcion)
            .input('resumen', sql.NVarChar(50), Resumen)
            .input('dias', sql.Int, Dias)
            .query(queries.createRegistro);
        res.json({UsuarioID, Fecha_Calculo, Fecha_Inicio, Fecha_Fin, Nombre_Actividad, Descripcion, Resumen, Dias});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};