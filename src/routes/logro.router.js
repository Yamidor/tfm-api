import express from 'express'
import { createLogro, deleteLogro, getAllLogros, getLogroById, updateLogro } from '../controller/logro.controller.js'

const routerLogro = express.Router()

routerLogro.get('/logros/:id',getAllLogros)
routerLogro.get('/logro/:id',getLogroById)
routerLogro.put('/logro/:id',updateLogro)
routerLogro.delete('/logro/:id',deleteLogro)
routerLogro.post('/logros',createLogro)

routerLogro.delete('/logros',(req, res)=>{
    res.send("todos los logros")
})

export default routerLogro