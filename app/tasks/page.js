import TaskList from "../components/TaskList";
import CreateTaskFormCustom from "../components/CreateTaskFormCustom";

export const dynamic = "force-dynamic";

const TasksPage = async () => {
    return (
        <div className="max-w-xl">
            <CreateTaskFormCustom />
            <TaskList />
        </div>
    );
};

export default TasksPage;
