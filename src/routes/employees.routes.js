import { Router } from 'express';
import { deleteEmployees, getEmployees, patchEmployees, postEmployees } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees', getEmployees);
router.post('/employees', postEmployees);
router.patch('/employees', patchEmployees);
router.delete('/employees', deleteEmployees);

export default router;
