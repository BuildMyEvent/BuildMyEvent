import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Landing Page",
    description: "This is Build My Event",
};

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="flex flex-col min-h-screen">
                <header id="hero" className="mb-[10rem] ">
                    <NavBarComponent />
                </header>
                <main className="flex-1">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
