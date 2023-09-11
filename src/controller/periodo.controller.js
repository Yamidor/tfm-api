
import Periodo from "../models/Periodo.js"


export const getAllPeriodos = async (req, res)=>{
    const periodos = await Periodo.findAll()
    res.status(201).json(periodos)
}

export const getPeriodoById = async (req, res)=>{
    const periodo = await Periodo.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(201).json(periodo)
}
