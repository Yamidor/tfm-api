import express from 'express'
import { getAllPeriodos } from '../controller/periodo.controller.js'

const routerPeriodo = express.Router()

routerPeriodo.get('/periodos',getAllPeriodos)


export default routerPeriodo