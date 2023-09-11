import express from 'express'
import { getAllPeriodos, getPeriodoById } from '../controller/periodo.controller.js'

const routerPeriodo = express.Router()

routerPeriodo.get('/periodos',getAllPeriodos)
routerPeriodo.get('/periodos/:id',getPeriodoById)


export default routerPeriodo