import Link from "next/link";
import { getUniqueTask } from "@/utils/taskActions";
import EditForm from "@/app/components/EditForm";

const SingleTaskPage = async ({ params }) => {
    const task = await getUniqueTask(params.id);

    return (
        <>
            <Link href="/tasks" className="btn btn-accent mb-8">
                Back to Tasks
            </Link>
            <EditForm task={task} />
        </>
    );
};

export default SingleTaskPage;
