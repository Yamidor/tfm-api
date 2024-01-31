import {Sequelize, DataTypes, Model, Op} from 'sequelize'
import sequelize from '../database/db.js'
import Actividad from './Actividad.js';

class Tarea extends Model {

}

Tarea.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    nombre:{
        type: DataTypes.STRING,
        allowNull: true
    },
    orden:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Tarea', 
    tableName: 'tareas'
})

import('Actividad.js').then((Actividad) => {
    Tarea.belongsTo(Actividad, {
      foreignKey: 'actividadId',
      targetKey: 'id',
    });
  });
export default Tarea