// this is the base functionality without any extra code for user input validation or error handling or form action pending
import { createTaskAndRevalidateTasks } from "@/utils/taskActions";

const CreateTaskForm = () => {
    return (
        <form action={createTaskAndRevalidateTasks} className="join w-full">
            <input
                type="text"
                required
                className="input input-bordered join-item w-full"
                placeholder="Type here"
                name="content"
            />
            <button
                type="submet"
                className="btn btn-primary join-item capitalize"
            >
                create task
            </button>
        </form>
    );
};

export default CreateTaskForm;
