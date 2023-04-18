import app from './app/app.js'
import {PORT} from './database/config.js'
app.listen(PORT, ()=>{
    console.log('Servidor corriendo en puerto '+PORT)
})