// we are setting up the pending functionality
"use client";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createTaskAndRevalidateTasks } from "@/utils/taskActions";

const SubmitBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submet"
            className="btn btn-primary join-item capitalize"
            disabled={pending}
        >
            {pending ? "creating task" : "create task"}
        </button>
    );
};

const initialFormState = {
    message: null,
    isSuccess: null,
};

const CreateTaskForm = () => {
    const [state, formAction] = useFormState(
        createTaskAndRevalidateTasks,
        initialFormState
    );

    useEffect(() => {
        if (state.isSuccess === null) {
            return;
        }
        if (state.isSuccess) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }, [state]);
    return (
        <form action={formAction}>
            {/* {state.message && <p className="mb-2">{state.message}</p>} */}

            <div className="join w-full">
                <input
                    type="text"
                    required
                    className="input input-bordered join-item w-full"
                    placeholder="Type here"
                    name="content"
                />
                <SubmitBtn></SubmitBtn>
            </div>
        </form>
    );
};

export default CreateTaskForm;
