import express from 'express'
import { createMateria, getAllMaterias, getMateriaById } from '../controller/materia.controller.js'

const routerMateria = express.Router()

routerMateria.get('/materias',getAllMaterias)
routerMateria.get('/materias/:id',getMateriaById)
routerMateria.post('/materias',createMateria)


export default routerMateria