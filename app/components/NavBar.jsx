import Link from "next/link";

const links = [
    { href: "/client", label: "client" },
    { href: "/drinks", label: "drinks" },
    { href: "/prisma-example", label: "prisma" },
    { href: "/tasks", label: "tasks" },
];
const NavBar = () => {
    return (
        <nav className="bg-base-300 py-4">
            <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
                <Link href="/" className="btn btn-primary text-lg">
                    Home
                </Link>
                <ul className="menu menu-horizontal md:ml-9 gap-4">
                    {links.map((link) => {
                        return (
                            <li key={link.href} className="text-lg">
                                <Link href={link.href} className="capitalize">
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
