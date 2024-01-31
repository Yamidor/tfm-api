import Usuario from "../models/Usuario.js"

export const Login = async (req, res)=>{
    try {
        console.log(req.body)
        const usuario = await Usuario.findOne({
            where:{
                user: req.body.user,
                password: req.body.password
            }
        })
        res.status(201).json(usuario)
        
    } catch (error) {
        res.status(404).json(error)
    }
    
}

export const getStudents = async(req, res)=>{
    try {
        const students = await Usuario.findAll({
            where: {
                rol: "ESTUDIANTE"
            }
        })
        res.status(201).json(students)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const addStudent = async (req, res) => {
    try {
        req.body.password = req.body.dni;
        req.body.rol = "ESTUDIANTE";
        
        const newStudent = await Usuario.create(req.body);

        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add a student', details: error.message });
    }
};