import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-5xl mb-8 font-bold">NextJS Tutorial</h1>
            <Link href="/client" className="btn btn-accent ">
                Get started
            </Link>
        </div>
    );
};

export default HomePage;
