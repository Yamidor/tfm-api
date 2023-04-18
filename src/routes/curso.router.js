import express from 'express'
import { createCurso, getAllCursos } from '../controller/curso.controller.js'

const routerCurso = express.Router()

routerCurso.get('/cursos',getAllCursos)
routerCurso.post('/cursos',createCurso)


export default routerCurso