import express from 'express'
import { createCurso, getAllCursos, getCursoById } from '../controller/curso.controller.js'

const routerCurso = express.Router()

routerCurso.get('/cursos',getAllCursos)
routerCurso.get('/cursos/:id',getCursoById)
routerCurso.post('/cursos',createCurso)


export default routerCurso