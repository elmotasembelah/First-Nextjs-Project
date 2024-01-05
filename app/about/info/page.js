import Link from "next/link";

const InfoPage = () => {
    return (
        <div>
            <h1 className="text-7xl">InfoPage</h1>
            <Link href="/about" className="text-2xl">
                about
            </Link>
        </div>
    );
};

export default InfoPage;
