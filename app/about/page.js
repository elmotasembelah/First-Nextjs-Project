import Link from "next/link";

const AboutPage = () => {
    return (
        <div>
            <h1 className="text-7xl"> About page </h1>
            <Link href="/" className="text-2xl d-block">
                home
            </Link>
            <Link href="/about/info" className="text-2xl">
                info
            </Link>
        </div>
    );
};

export default AboutPage;
