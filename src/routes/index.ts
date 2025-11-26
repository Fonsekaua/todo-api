import { Router } from 'express'
import * as TodoController from '../controllers/Todo/index.js';

export const MainRouter = Router();

MainRouter.get("/todos", TodoController.all)
MainRouter.post("/todo", TodoController.add)
MainRouter.delete("/todo/:id", TodoController.remove)
MainRouter.put("/todo/:id", TodoController.edit)
