import {Router} from 'express'
import { createRecord, getRecordUser } from '../controllers/registros.controller'

const router = Router()

router.get('/getRecordUser/:UsuarioID', getRecordUser)

router.post('/createRecord', createRecord)

export default router