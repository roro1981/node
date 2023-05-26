import {Router} from 'express';
import { getEmployees,createEmployees,updateEmployees,deleteEmployees,getEmploye } from '../controllers/employees.controller.js';

const router=Router();

router.get("/employees",getEmployees);
router.get("/employees/:id",getEmploye);
router.post("/employees",createEmployees);
router.patch("/employees/:id",updateEmployees); //put para actualizar todo / patch para actualizar solo 1 o los necesarios
router.delete("/employees/:id",deleteEmployees);

export default router;