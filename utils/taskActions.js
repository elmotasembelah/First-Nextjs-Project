"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import z from "zod";

export const getAllTasks = async () => {
    const allTasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return allTasks;
};

export const getUniqueTask = async (taskId) => {
    const task = await prisma.task.findUnique({
        where: {
            id: taskId,
        },
    });

    return task;
};

export const createTask = async (newTaskContent) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
    const newTask = await prisma.task.create({
        data: {
            content: newTaskContent,
        },
    });

    return newTask;
};

export const createTaskCustom = async (prevState, newTaskContent) => {
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 2000);
    // });
    const task = z.object({
        content: z.string().min(5),
    });
    try {
        task.parse({
            content: newTaskContent,
        });
        const newTask = await prisma.task.create({
            data: {
                content: newTaskContent,
            },
        });
        return { message: "Task Created Succesfully", isSuccess: true };
    } catch (error) {
        const isZodError = error.errors ? true : false;
        if (isZodError) {
            return { message: error.errors[0].message, isSuccess: false };
        }
        return { message: "Error occurred, Try again", isSuccess: false };
    }
};

// this is using the  formdata api which is native to js
export const createTaskAndRevalidateTasks = async (prevState, formData) => {
    const newTaskContent = formData.get("content");
    const message = await createTaskCustom(prevState, newTaskContent);
    revalidatePath("/tasks");
    return message;
};

export const updateTask = async (taskId, taskContent, taskCompletionStatus) => {
    const updatedTask = await prisma.task.update({
        where: {
            id: taskId,
        },
        data: {
            content: taskContent,
            completed: taskCompletionStatus ? true : false,
        },
    });
    return updatedTask;
};
export const updateTaskCustom = async (
    taskId,
    taskContent,
    taskCompletionStatus
) => {
    "use server";

    // await new Promise((resolve) => {
    //     setTimeout(resolve, 2000);
    // });

    const task = z.object({
        id: z.string().uuid(),
        content: z.string().min(5),
        completed: z.boolean(),
    });
    try {
        task.parse({
            id: taskId,
            content: taskContent,
            completed: taskCompletionStatus,
        });
        const updatedTask = await prisma.task.update({
            where: {
                id: taskId,
            },
            data: {
                content: taskContent,
                completed: taskCompletionStatus ? true : false,
            },
        });
        return { message: "Task Edited Successfully", isSuccess: true };
    } catch (error) {
        const isZodError = error.errors ? true : false;
        if (isZodError) {
            return { message: error.errors[0].message, isSuccess: false };
        }
        return { message: "Error occurred, Try again", isSuccess: false };
    }
};

export const updatedTaskAndValidatePath = async (prevState, formData) => {
    const task = {
        id: formData.get("id"),
        content: formData.get("content"),
        completionStatus: formData.get("completed") === "on",
    };

    const message = await updateTaskCustom(
        task.id,
        task.content,
        task.completionStatus
    );
    return message;
    redirect("/tasks");
};

export const deleteTask = async (taskId) => {
    const deletedTask = await prisma.task.delete({
        where: {
            id: taskId,
        },
    });
};
export const deleteTaskCustom = async (taskId) => {
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 2000);
    // });

    const task = z.object({
        id: z.string().uuid(),
    });
    try {
        task.parse({
            id: taskId,
        });
        const deletedTask = await prisma.task.delete({
            where: {
                id: taskId,
            },
        });
        return { message: "task deleted successfully", isSuccess: true };
    } catch (error) {
        const isZodError = error.errors ? true : false;
        if (isZodError) {
            return { message: error.errors[0].message, isSuccess: false };
        }
        return {
            message: "error occurred, please try again",
            isSuccess: false,
        };
    }
};

export const deleteTaskAndRevalidatePath = async (pervState, formData) => {
    const taskId = formData.get("id");
    const message = await deleteTaskCustom(taskId);
    revalidatePath("/tasks");
    // console.log(message);
};
