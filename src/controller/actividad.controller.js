import Actividad from "../models/Actividad.js"

export const createActividad = async (req, res)=>{
    const create = await Actividad.create(req.body)
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Actividad Creada...'
    })
}
export const getAll = async (req, res)=>{
    const actividades = await Actividad.findAll()
    res.status(201).json(actividades)
}
export const getAllActividades = async (req, res)=>{
    const actividades = await Actividad.findAll({
        where: {
            logroId: req.params.idLogro
        }
    })
    res.status(201).json(actividades)
}

