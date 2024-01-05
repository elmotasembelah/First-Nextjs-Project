import prisma from "@/utils/db";

export const GET = async (request) => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    console.log("called GET");
    return Response.json({ Data: tasks });
};

export const POST = async (request) => {
    const data = await request.json();
    const newTask = await prisma.task.create({
        data,
    });
    return Response.json(newTask);
};
