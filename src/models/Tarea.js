import {Sequelize, DataTypes, Model} from 'sequelize'
import sequelize from '../database/db.js'
import Materia from './Materia.js'
import Profesor from './Profersor.js';
import Curso from './Curso.js';
import Periodo from './Periodo.js';
class Tarea extends Model {

}

Tarea.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Tarea'
})

export default Tarea