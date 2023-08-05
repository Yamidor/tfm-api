import {Sequelize, DataTypes, Model, Op} from 'sequelize'
import sequelize from '../database/db.js'
import Logro from './Logro.js';
class Actividad extends Model {

}

Actividad.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    normal:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    sequelize,
    modelName: 'Actividad', 
    tableName: 'actividades'
})




export default Actividad