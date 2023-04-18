import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
class Profesor extends Model {

}

Profesor.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    nombres: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    dni: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Profesor',
    tableName: 'profesores'
})


export default Profesor