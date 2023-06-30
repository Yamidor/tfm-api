import { Sequelize } from "sequelize";
import {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} from './config.js'
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout:60000
    },
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // Tiempo máximo de espera para obtener una conexión (30 segundos)
        idle: 10000, // Tiempo máximo de inactividad de una conexión antes de que se cierre (10 segundos)
        evict: 60000,
    }

})

db.sync({force:true}).then(()=>console.log("tablas creadas.."))


export default db
