"use client";

const error = (error) => {
    // return <div>There was a error</div>;
    return <div>{error.error.message}</div>;
};

export default error;
