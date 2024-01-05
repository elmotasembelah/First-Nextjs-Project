import prisma from "@/utils/db.ts";

// Create

// const createTask = async (newTask) => {
//     const createdTask = await prisma.task.create({
//         data: newTask,
//     });

//     return createdTask;
// };

//  Read

const getAllTasks = async () => {
    console.log("prisma example");

    const allTasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return allTasks;
};

// const getUniqueTask = async (taskId) => {
//     const uniqueTask = prisma.task.findUnique({
//         where: {
//             id: taskId,
//         },
//     });

//     // lw ml2e4 7aga zy el id birg3 null
//     return uniqueTask;
// };

// const getAllTasksByContent = async (contentValue) => {
//     const tasks = await prisma.task.findMany({
//         where: {
//             content: contentValue,
//         },
//         orderBy: {
//             createdAt: "asc",
//         },
//     });

//     return tasks;
// };

// const getFirstTaskByContent = async (contentValue) => {
//     const task = await prisma.task.findFirst({
//         where: {
//             content: contentValue,
//         },
//     });

//     // ? it is return as a single object not an array with one object in it

//     return task;
// };

//  Update

// const UpdateTaskValue = async (taskId, newContentValue) => {
//     const task = await prisma.task.update({
//         where: {
//             id: taskId,
//         },
//         data: {
//             content: newContentValue,
//         },
//     });
//     // is the item is not found, it throws an error which we should handle or only call when we are sure that the item exists

//     return task;
// };

// const changeAllUncompletedTasksToCompleted = async () => {
//     const tasks = await prisma.task.updateMany({
//         where: {
//             completed: false,
//         },
//         data: {
//             completed: true,
//         },
//     });

//     // return only count of the items that have been changed
//     return tasks;
// };

// Upsert

// const upsertTask = async (taskId, contentValue) => {
//     const task = await prisma.task.upsert({
//         where: {
//             id: taskId,
//         },
//         update: {
//             content: contentValue,
//         },
//         create: {
//             content: contentValue,
//         },
//     });
//     // when the upsert function doesn't find a matching item, it creates a new item

//     return task;
// };

// Delete

// const deleteUniqueTask = async (taskId) => {
//     const task = await prisma.task.delete({
//         where: {
//             id: taskId,
//         },
//     });

//     return task;
// };

const PrismaPage = async () => {
    // await createTask({ content: "sleep" });
    const tasks = await getAllTasks();
    // const uniqueTask = await getUniqueTask(
    //     "32a4d475-babc-40b8-8677-66d135dd0ee3"
    // );
    // const tasks = await getAllTasksByContent("sleep");
    // const tasks = await getFirstTaskByContent("sleep");
    // await UpdateTaskValue(
    //     "336cdb00-231b-4e49-88b7-34e9fd27f828",
    //     "to be deleted"
    // );
    // await changeAllUncompletedTasksToCompleted();
    // await upsertTask("46a0c282-fc16-4bb4-8abb-aa7052936de3", "eat lunch");
    // await deleteUniqueTask("336cdb00-231b-4e49-88b7-34e9fd27f828");
    // console.log(tasks);

    if (tasks.length === 0) {
        return <p className="text-6xl mt-8">There are no tasks</p>;
    }

    return (
        <div>
            <h1 className="text-7xl">PrismaPage</h1>
            {tasks.map((task) => {
                return (
                    <h2 key={task.id} className="text-2xl py-2">
                        {task.content}
                    </h2>
                );
            })}
        </div>
    );
};

export default PrismaPage;
