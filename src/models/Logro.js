import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
import Materia from './Materia.js'
import Profesor from './Profersor.js';
import Curso from './Curso.js';
import Periodo from './Periodo.js';
import Actividad from './Actividad.js';


 
class Logro extends Model {

}

Logro.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }, 
    numero: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Logro'
})
Logro.belongsTo(Curso,{
    foreignKey: 'cursoId'
});

Logro.belongsTo(Materia,{
    foreignKey: 'materiaId',
    targetKey: 'id'
});

Logro.belongsTo(Periodo,{
    foreignKey: 'periodoId'
});

Logro.belongsTo(Profesor,{
    foreignKey: 'profesorId'
});

Logro.hasMany(Actividad,{
    foreignKey: 'logroId'
});

 

export default Logro