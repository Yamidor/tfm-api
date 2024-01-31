import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
class Usuario extends Model {

}

Usuario.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    nombres: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    rol:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios'
})


export default Usuario