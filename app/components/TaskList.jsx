import Link from "next/link";
import { getAllTasks } from "@/utils/taskActions";
import DeleteForm from "./DeleteForm";

const TaskList = async () => {
    const tasks = await getAllTasks();

    if (tasks.length === 0) {
        return (
            <p className=" mt-12 font-medium text-2xl ">
                There are no tasks to show...
            </p>
        );
    }

    return (
        <ul className="mt-12 max-w-xl">
            {tasks.map((task) => {
                return (
                    <li
                        key={task.id}
                        className="flex justify-between items-center my-8 px-6 py-6 border border-base-300 rounded-lg shadow-lg"
                    >
                        <p
                            className={`text-lg capitalize ${
                                task.completed ? "line-through" : null
                            }`}
                        >
                            {task.content}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                href={`/tasks/${task.id}`}
                                className="btn btn-primary bg-success rounded-md capitalize"
                            >
                                edit
                            </Link>
                            <DeleteForm id={task.id} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default TaskList;
