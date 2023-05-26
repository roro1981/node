import { pool } from "../conexion.js";

export const getEmployees = async (req, res) =>
{
    try {
        const [rows] = await pool.query("select * from employee");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
   
};

export const getEmploye = async (req, res) =>
{   
    try {
        const [rows] = await pool.query("select * from employee where id=?",[req.params.id]);
        if(rows.length==0) return res.status(404).json({
            message:"Employee no encontrado"
        })
    res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

export const createEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query("INSERT INTO employee (name,salary) VALUES (?,?)", [name,salary]);
        res.send({
            id: rows.insertId,
            name,
            salary
    });
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

export const updateEmployees = async (req,res) => {
    try {
        const { id } = req.params;
        const {name,salary} = req.body;
        const [result] = await pool.query('UPDATE employee set name=IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?',[name, salary, id]);
        if(result.affectedRows == 0) return res.status(404).json({
            message:"Employee no encontrado"
        })
        const [rows]=await pool.query("SELECT * FROM employee where id=?",[id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};


export const deleteEmployees = async (req, res) =>
{   
    try {
        const [result] = await pool.query("delete from employee where id=?",[req.params.id]);
        if(result.affectedRows <= 0) return res.status(404).json({
            message:"Employee no encontrado"
        })
        res.send("Employee eliminado");
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};
