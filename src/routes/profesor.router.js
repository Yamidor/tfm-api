import express from 'express'
import { Login} from '../controller/profesor.controller.js'

const routerProfesor = express.Router()

routerProfesor.post('/profesores',Login)


export default routerProfesor