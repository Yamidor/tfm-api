import {Sequelize, DataTypes, Model, Op} from 'sequelize'
import sequelize from '../database/db.js'
import Tarea from './Tarea.js';

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
    problema: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    orden:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    unidad:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Actividad', 
    tableName: 'actividades'
})

Actividad.hasMany(Tarea, {
    foreignKey: 'actividadId',
    sourceKey: 'id',
    order: [['orden', 'ASC']]
});



export default Actividad