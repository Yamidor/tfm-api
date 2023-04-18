import Actividad from "../models/Actividad.js"
import Logro from "../models/Logro.js"

export const createActividad = async (req, res)=>{
    const create = await Curso.create({
        nombre: req.body.nombre
    })
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Curso creado...'
    })
}

export const getAllActividades = async (req, res)=>{
    const actividades = await Actividad.findAll({
        where: {
            logroId: req.params.idLogro
        }
    })
    res.status(201).json(actividades)
}

