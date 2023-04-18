import express from 'express'
import { createMateria, getAllMaterias } from '../controller/materia.controller.js'

const routerMateria = express.Router()

routerMateria.get('/materias',getAllMaterias)
routerMateria.post('/materias',createMateria)


export default routerMateria