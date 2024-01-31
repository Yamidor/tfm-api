import express  from "express";
import cors from "cors"
import morgan from "morgan";

import routerAsignacion from "../routes/asignacion.router.js";
import routerUsuario from "../routes/usuario.router.js";
import routerTarea from "../routes/tareas.router.js";
import routerActividad from "../routes/actividad.router.js";

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.use('/api/v1', routerAsignacion)
app.use('/api/v1', routerUsuario)
app.use('/api/v1', routerUsuario)
app.use('/api/v1', routerActividad)
app.use('/api/v1', routerTarea)

export default app