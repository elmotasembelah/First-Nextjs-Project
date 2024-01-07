"use client";
import { deleteTaskAndRevalidatePath } from "@/utils/taskActions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";

const SubmetBtn = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submet"
            className="btn btn-error rounded-md capitalize"
            disabled={pending}
        >
            {pending ? "Deleting..." : "Delete"}
        </button>
    );
};

const formInitialState = {
    message: null,
};

const DeleteForm = ({ id }) => {
    const [state, formAction] = useFormState(
        deleteTaskAndRevalidatePath,
        formInitialState
    );

    // useEffect(
    //     (name) => {
    //         console.log(name);
    //         console.log(state);
    //     },
    //     [state]
    // );

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <SubmetBtn />
        </form>
    );
};

export default DeleteForm;
