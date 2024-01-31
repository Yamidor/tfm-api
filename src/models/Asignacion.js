import {Sequelize, DataTypes, Model, Op} from 'sequelize'
import sequelize from '../database/db.js'
import Usuario from './Usuario.js';
import Actividad from './Actividad.js';
class Asignacion extends Model {

}

Asignacion.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    contenido:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    feedback:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Asignacion', 
    tableName: 'asignaciones'
})

Asignacion.belongsTo(Usuario,{
    foreignKey: 'usuarioId',
    targetKey: 'id'
});

Asignacion.belongsTo(Actividad,{
    foreignKey: 'actividadId',
    targetKey: 'id'
});
export default Asignacion