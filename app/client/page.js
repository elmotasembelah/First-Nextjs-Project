"use client";
import { useState } from "react";

const ClientPage = () => {
    let [count, setCount] = useState(0);

    return (
        <div>
            <h1 className="text-7xl font-bold mb-8">{count}</h1>
            <div className="flex gap-4">
                <button
                    className="btn btn-accent px-6 py-3 capitalize"
                    onClick={() => setCount(count + 1)}
                >
                    increase
                </button>
                <button
                    className="btn btn-accent px-6 py-3 capitalize"
                    onClick={() => {
                        setCount(count - 1);
                    }}
                >
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default ClientPage;
