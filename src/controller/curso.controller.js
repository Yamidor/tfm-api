
import Curso from "../models/Curso.js"

export const createCurso = async (req, res)=>{
    const create = await Curso.create({
        nombre: req.body.nombre
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Curso creado...'
    })
}

export const getAllCursos = async (req, res)=>{
    const cursos = await Curso.findAll()
    res.status(201).json(cursos)
}

export const getCursoById = async (req, res)=>{
    const curso = await Curso.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(201).json(curso)
}
