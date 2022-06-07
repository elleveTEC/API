import {Router} from 'express'
import {getPalabras} from '../controllers/diccionario.controller'

const router = Router()

router.get('/diccionario', getPalabras)

export default router