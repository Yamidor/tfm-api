import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
class Periodo extends Model {

}

Periodo.init({
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
    modelName: 'Periodo', 
    tableName: 'periodos'
})

export default Periodo