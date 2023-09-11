import express from 'express'
import { getAllActividades,createActividad, getAll } from '../controller/actividad.controller.js'

const routerActividad = express.Router()

routerActividad.post('/actividades',createActividad)
routerActividad.get('/actividades',getAll)
routerActividad.get('/actividades/:idLogro',getAllActividades)


export default routerActividad