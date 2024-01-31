import express from 'express'
import { createAsignacion, getAll, getAllAsigaciones, getAsignacionPorCalificar, getCalificacionesById, updateAsignacion, updateAsignacionFeedback } from '../controller/asignacion.controller.js'

const routerAsignacion = express.Router()

routerAsignacion.get('/asignaciones/:id',getAllAsigaciones)
routerAsignacion.get('/asignaciones', getAsignacionPorCalificar)
routerAsignacion.post('/asignaciones', createAsignacion)
routerAsignacion.get('/asignacionesAll', getAll)
routerAsignacion.patch('/asignaciones/:id',updateAsignacion)
routerAsignacion.patch('/asignacionesFeedback/:id',updateAsignacionFeedback)
routerAsignacion.get('/calificaciones/:id',getCalificacionesById)




export default routerAsignacion