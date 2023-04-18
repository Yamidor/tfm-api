import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
class Curso extends Model {

}

Curso.init({
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
    modelName: 'Curso', 
    tableName: 'cursos'
})

export default Curso