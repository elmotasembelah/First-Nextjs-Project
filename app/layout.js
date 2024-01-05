import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Nextjs tutorial",
    description: "course project ofr nextjs tut",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + "antialiased"}>
                <NavBar />
                <main className="py-20 px-8 max-w-6xl mx-auto flex-1 ">
                    <Providers>{children}</Providers>
                </main>
                <Footer className="max-w-6xl mt-auto" />
            </body>
        </html>
    );
}
