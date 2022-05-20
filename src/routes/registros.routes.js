import {Router} from 'express'
import {createRegistro, getRegistrosUsuario} from '../controllers/registros.controller'

const router = Router()

router.get('/registros/:UsuarioID', getRegistrosUsuario)

router.post('/registros', createRegistro)

export default router