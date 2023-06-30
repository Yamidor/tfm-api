import { Sequelize } from "sequelize";
import {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} from './config.js'
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    dialectOptions:{
        connectTimeout: 220000
    }

})

db.sync({force:true}).then(()=>console.log("tablas creadas.."))


export default db
