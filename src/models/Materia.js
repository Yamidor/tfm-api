import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
import Logro from './Logro.js'
class Materia extends Model {

}

Materia.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Materia', 
    tableName: 'materias'
})

export default Materia