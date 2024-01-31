import express from 'express'
import { createTarea } from '../controller/tarea.controller.js'

const routerTarea = express.Router()

routerTarea.post('/actividades',createTarea)


export default routerTarea