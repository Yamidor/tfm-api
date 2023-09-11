
import Materia from "../models/Materia.js"

export const createMateria = async (req, res)=>{
    const create = await Materia.create({
        nombre: req.body.nombre
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Materia creada...'
    })
}

export const getAllMaterias = async (req, res)=>{
    const materias = await Materia.findAll()
    res.status(201).json(materias)
}
export const getMateriaById = async (req, res)=>{
    const materia = await Materia.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(201).json(materia)
}
