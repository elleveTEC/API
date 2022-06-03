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

const dbSettings2 = {
    user: "SA",
    password: "Ingeniero2001.",
    database: "CEMEX",
    server: "localhost", // localhost
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings2)
        return pool; 
    } catch(error) {
        console.error(error);
    }
}
export {sql};
