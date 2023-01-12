import { Router } from "express";
//import Task from "../models/Task";
import { renderTask, createTask,  renderTaskEdit, editTask, deleteTask, completeTask } from "../controllers/task.controller";


const router = Router();

router.get("/", renderTask);

router.post('/task/add', createTask);

router.get('/tasks/:id/toggleDone', completeTask);

router.get("/ruta1", (req, res) => {res.render("about"); });

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get('/tasks/:id/delete', deleteTask);

export default router;

