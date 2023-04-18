import express from 'express'
import { getAllActividades } from '../controller/actividad.controller.js'

const routerActividad = express.Router()

routerActividad.get('/actividades/:idLogro',getAllActividades)


export default routerActividad