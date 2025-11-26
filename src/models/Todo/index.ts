import { Prisma } from "@prisma/client";
import { prisma } from "../../libs/prisma.js";

type Task = Prisma.TaskCreateInput;

export const createNewTask = async (data: Task) => { 
    const newTask = await prisma.task.create({
        data
    });
    return newTask;
    
}

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany({
        select: {
            id: true,
            title: true
        }
    });
    return tasks;
}

export const editTaskById = async (id: number,data: Prisma.TaskUpdateInput) => {
    const task = await prisma.task.update({
        where: {id},
        data
    });
    return task;
}

export const removeTaskById = async (id: number) => {
    const task = await prisma.task.delete({
        where: {id}
    });
    return task;
}