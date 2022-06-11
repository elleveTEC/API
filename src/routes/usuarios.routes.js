import {Router} from 'express'
import {createUser, deleteUserByID, getUserByID, getUserNoAdmin, postUserLogin, updateUser} from '../controllers/usuarios.controller'

const router = Router()

router.get('/getUsersNoAdmin', getUserNoAdmin)

router.post('/createUser', createUser)

router.post('/postUserLogin', postUserLogin)

router.get('/getUserByID/:UsuarioID', getUserByID)

router.delete('/deleteUserByID/:UsuarioID', deleteUserByID)

router.put('/updateUserByID/:Correo/:Contrasena', updateUser)

export default router