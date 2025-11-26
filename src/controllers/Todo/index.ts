import { RequestHandler } from "express";
import { createNewTask, editTaskById, getAllTasks, removeTaskById } from "../../models/Todo/index.js";

export const all:RequestHandler = async (req,res) => {   
   const allTasks = await getAllTasks();
   res.status(200).json(allTasks);
}

export const add:RequestHandler = async (req,res) => {   
    const {title} = req.body as {title: string};
    if(!title){
        return res.status(400).json({error: "Task is required"});
    }
    const newtask =  await createNewTask({
        title,
    });
    res.status(201).json(newtask);
}

export const edit:RequestHandler = async (req,res) => {   
    const {id} = req.params as {id: string};
    const {done} = req.body as {done: string};

    if(!id){
        return res.status(400).json({error: "ID is required"});
    }
    const updatedTask = await editTaskById(Number(id), {done: Boolean(done)});
    res.status(200).json(updatedTask);
}

export const remove:RequestHandler = async (req,res) => {   
    const {id} = req.params as {id: string};

    if(!id){
        return res.status(400).json({error: "ID is required"});
    }
    const deletedTask = await removeTaskById(Number(id));
    res.status(200).json(deletedTask);
    
}

