import Curso from "../models/Curso.js"
import Logro from "../models/Logro.js"
import Materia from "../models/Materia.js"
import Periodo from "../models/Periodo.js"
import Profesor from "../models/Profersor.js"



export const Login = async (req, res)=>{
    console.log(req.body)
    try {
        
        const profesor = await Profesor.findOne({
            where:{
                user: req.body.user,
                password: req.body.password
            }
        })
        res.status(201).json(profesor)
        
    } catch (error) {
        res.status(404).json(error)
    }
    
}