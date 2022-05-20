import {Router} from 'express'
import {getUsuarios, createUsuario, getUsuario, deleteUsuario, updateUsuario} from '../controllers/usuarios.controller'

const router = Router()

router.get('/usuarios', getUsuarios)

router.post('/usuarios', createUsuario)

router.get('/usuarios/:UsuarioID', getUsuario)

router.delete('/usuarios/:UsuarioID', deleteUsuario)

router.put('/usuarios/:UsuarioID', updateUsuario)

export default router