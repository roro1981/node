import {pool} from '../conexion.js';

export const ping= async (req,res)=> {
    const [result]=await pool.query("select 'Pong' as resultado");
    res.json(result[0]);
};