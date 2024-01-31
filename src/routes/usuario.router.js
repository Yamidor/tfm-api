import express from 'express'
import { Login, addStudent, getStudents} from '../controller/usuario.controller.js'

const routerUsuario = express.Router()

routerUsuario.post('/usuarios',Login)
routerUsuario.get('/estudiantes', getStudents)
routerUsuario.post('/estudiantes', addStudent)


export default routerUsuario