import Tarea from "../models/Tarea.js"

export const createTarea = async (req, res)=>{
    const create = await Tarea.create(req.body)
    res.status(201).json({
        ok: true,
        status: 201,
        message: 'Tarea Creada...'
    })
}


