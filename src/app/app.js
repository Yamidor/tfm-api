import express  from "express";
import cors from "cors"
import morgan from "morgan";
import routerLogro from "../routes/logro.router.js";
import routerMateria from "../routes/materia.router.js";
import routerProfesor from "../routes/profesor.router.js";
import routerCurso from "../routes/curso.router.js";
import routerPeriodo from "../routes/periodo.router.js";
import routerActividad from "../routes/actividad.router.js";

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.use('/api/v1', routerLogro)
app.use('/api/v1', routerMateria)
app.use('/api/v1', routerProfesor)
app.use('/api/v1', routerCurso)
app.use('/api/v1', routerPeriodo)
app.use('/api/v1', routerActividad)

export default app