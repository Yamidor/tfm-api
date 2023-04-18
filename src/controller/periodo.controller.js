
import Periodo from "../models/Periodo.js"


export const getAllPeriodos = async (req, res)=>{
    const periodos = await Periodo.findAll()
    res.status(201).json(periodos)
}

