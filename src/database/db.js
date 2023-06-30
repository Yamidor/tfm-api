import { Sequelize } from "sequelize";
import {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} from './config.js'
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout:100000
    },
    define: {
        timestamps: false
    },
    pool: {
        max: 25,
        min: 0,
        idle: 10000
    }

})

db.sync({force:true}).then(()=>console.log("tablas creadas.."))


export default db
