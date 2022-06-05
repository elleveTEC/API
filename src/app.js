import express from 'express'
import config from './config'
import usuariosRoutes from './routes/usuarios.routes'
import modeloRoutes from './routes/modelo.routes'
import registroRoutes from './routes/registros.routes'

const app = express();
const morgan = require('morgan');

//settings 
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(morgan('dev'));

app.use(usuariosRoutes);
app.use(modeloRoutes);
app.use(registroRoutes);

export default app
