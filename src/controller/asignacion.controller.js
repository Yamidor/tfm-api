import {Op} from 'sequelize'
import Actividad from "../models/Actividad.js"
import Asignacion from "../models/Asignacion.js"
import Usuario from "../models/Usuario.js"
import Tarea from "../models/Tarea.js"


export const createAsignacion = async (req, res)=>{
    try {
        const create = await Asignacion.create({
            usuarioId: req.body.usuarioId,
            actividadId: req.body.actividadId
        })
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'asignacion creada...',
            content: create
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
}
export const getAll = async (req, res)=>{
    try {
        const asignaciones = await Asignacion.findAll()
        res.status(200).json(asignaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
export const getCalificacionesById = async (req, res) => {
    try {
        const asignaciones = await Asignacion.findAll({
            include: [
                {
                    model: Actividad,
                    include: [Tarea], // Incluir las tareas dentro de las actividades
                },
            ],
            where: {
              
                usuarioId: req.params.id,
                feedback: {
                    [Op.not]: null 
                } 
                
            },
            order: [
                [Actividad, 'orden', 'ASC'], // Ordenar por el campo 'orden' de Actividad en orden ascendente
                [Actividad, Tarea, 'orden', 'ASC'], // Luego, ordenar por el campo 'orden' de Tarea en orden ascendente
            ]
        });
        res.status(200).json(asignaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getAllAsigaciones = async (req, res) => {
    try {
        console.log(req.body)
        const asignaciones = await Asignacion.findAll({
            include: [
                {
                    model: Actividad,
                    include: [Tarea], // Incluir las tareas dentro de las actividades
                },
            ],
            where: {
              
                usuarioId: req.params.id,
                contenido: null 
                
            },
            order: [
                [Actividad, 'orden', 'ASC'], // Ordenar por el campo 'orden' de Actividad en orden ascendente
                [Actividad, Tarea, 'orden', 'ASC'], // Luego, ordenar por el campo 'orden' de Tarea en orden ascendente
            ]
        });
        res.status(200).json(asignaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getAsigacionById = async (req, res)=>{
    const asignacion = await Asignacion.findOne({
        include:[Actividad, Usuario],
        where: {
            id: req.params.id
        }

    })
    res.status(201).json(asignacion)
}

export const updateAsignacion = async (req, res) => {
    const { estado, contenido } = req.body;

    // Verifica si se proporcionaron datos para actualizar
    if (!contenido) {
        return res.status(400).json({
            ok: false,
            error: 'Se requiere  contenido',
        });
    }

    try {
        const asignacion = await Asignacion.update(
            {
                estado,
                contenido,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        // Verifica si se encontró y actualizó la asignación
        if (asignacion[0] === 0) {
            return res.status(404).json({
                ok: false,
                error: 'No se encontró la asignación con el ID proporcionado',
            });
        }

        res.status(200).json({
            ok: true,
            body: asignacion,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error: 'Error interno del servidor',
        });
    }
};

export const updateAsignacionFeedback = async (req, res) => {
    const { feedback } = req.body;

    // Verifica si se proporcionaron datos para actualizar
    if (!feedback) {
        return res.status(400).json({
            ok: false,
            error: 'Se requiere  feedback',
        });
    }
    try {
        const asignacion = await Asignacion.update(
            {
                feedback
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        // Verifica si se encontró y actualizó la asignación
        if (asignacion[0] === 0) {
            return res.status(404).json({
                ok: false,
                error: 'No se encontró la asignación con el ID proporcionado',
            });
        }

        res.status(200).json({
            ok: true,
            body: asignacion,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error: 'Error interno del servidor',
        });
    }
};

export const getAsignacionPorCalificar = async (req, res) => {
    try {
        const asignacionesPorCalificar = await Asignacion.findAll({
            include: [
                {
                    model: Actividad,
                    include: [Tarea], 
                },
                Usuario
            ],
            where: {
                feedback: null,
                contenido: {
                    [Op.not]: null 
                }
                
            },
            order: [
                [Actividad, 'orden', 'ASC'], // Ordenar por el campo 'orden' de Actividad en orden ascendente
                [Actividad, Tarea, 'orden', 'ASC'], // Luego, ordenar por el campo 'orden' de Tarea en orden ascendente
            ]
        });

        res.status(200).json(asignacionesPorCalificar);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            error: 'Error interno del servidor',
        });
    }
};

export const deleteAsignacion = async (req, res)=>{
    const asignacion = await Asignacion.destroy({
        where: {
            id: req.params.id
        }

    })
    res.status(204)
}