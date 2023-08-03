import { Router } from "express";
import { getTasks, getTask,createTask, deleteTask, updateTask } from "../controllers/task.controller.js";
import { requiredAuth } from '../middlewares/tokenValidation.js'

const router = Router();

router.get('/tasks', requiredAuth, getTask)
router.get('/task/id:', requiredAuth, getTask)
router.post('/task', requiredAuth, createTask)
router.put('/task/id:', requiredAuth, updateTask)
router.delete('/task/id:', requiredAuth, deleteTask)

export default router;