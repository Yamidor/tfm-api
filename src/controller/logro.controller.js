import Curso from "../models/Curso.js"
import Logro from "../models/Logro.js"
import Materia from "../models/Materia.js"
import Periodo from "../models/Periodo.js"
import Profesor from "../models/Profersor.js"


export const createLogro = async (req, res)=>{
    const create = await Logro.create({
        numero: req.body.numero,
        nombre: req.body.nombre,
        cursoId: req.body.cursoId,
        materiaId: req.body.materiaId,
        periodoId: req.body.periodoId,
        profesorId: req.body.profesorId
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Logro creado...'
    })
}

export const getAllLogros = async (req, res)=>{
    const logros = await Logro.findAll({
        include:[Materia, Curso, Periodo, Profesor],
        where: {
            profesorId: req.params.id
        }

    })
    res.status(201).json(logros)
}
export const getLogroById = async (req, res)=>{
    const logro = await Logro.findOne({
        include:[Materia, Curso, Periodo, Profesor],
        where: {
            id: req.params.id
        }

    })
    res.status(201).json(logro)
}

export const updateLogro = async (req, res)=>{
    console.log(req.body)
    const logro = await Logro.update(
        {

            numero: req.body.numero,
            nombre: req.body.nombre,
            cursoId: req.body.cursoId,
            materiaId: req.body.materiaId,
            periodoId: req.body.periodoId,
            profesorId: req.body.profesorId
        },
        {
            where: {
                id: req.params.id,
            }

        })
    res.status(200).json({
        ok: true,
        body: logro
    })
}

export const deleteLogro = async (req, res)=>{
    const logro = await Logro.destroy({
        where: {
            id: req.params.id
        }

    })
    res.status(204)
}