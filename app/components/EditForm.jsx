"use client";
import { updatedTaskAndValidatePath } from "@/utils/taskActions";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useFormStatus, useFormState } from "react-dom";
import { useRouter } from "next/navigation";

const SubmetBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submet"
            className="btn btn-primary capitalize"
            disabled={pending}
        >
            {pending ? "saving" : "save"}
        </button>
    );
};

const initialFormStatus = {
    message: null,
};

const EditForm = ({ task }) => {
    const { id, completed, content } = task;

    const [state, formAction] = useFormState(
        updatedTaskAndValidatePath,
        initialFormStatus
    );

    useEffect(() => {
        if (state.isSuccess === undefined) {
            return;
        }
        if (state.isSuccess) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <form
            action={formAction}
            className="max-w-sm p-12 my-8 border border-base-300 shadow-lg rounded-lg "
        >
            <input type="hidden" name="id" value={id} />
            {/* content */}
            <label htmlFor="content" className="sr-only">
                Content
            </label>
            <input
                type="text"
                name="content"
                className="input input-bordered mb-4"
                required
                defaultValue={content}
            />
            {/* completed */}
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="completed" className="label">
                    Completed
                </label>
                <input
                    type="checkbox"
                    name="completed"
                    defaultChecked={completed}
                    className="checkbox checkbox-primary "
                />
            </div>
            <SubmetBtn />
        </form>
    );
};

export default EditForm;
