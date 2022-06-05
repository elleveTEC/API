import {Router} from 'express'
import {getPalabras,getPredict} from '../controllers/modelo.controller'

const router = Router()

router.get('/diccionario', getPalabras)
router.post('/prediccion', getPredict)
export default router