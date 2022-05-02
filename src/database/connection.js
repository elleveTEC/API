import config from '../config'
import sql from 'mssql'

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer, // localhost
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool; 
    } catch {
        console.error(error);
    }
}
export {sql};