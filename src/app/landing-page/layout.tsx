import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBar";

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
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <header id="hero" className="mb-[10rem] ">
                    <NavBarComponent />
                </header>
                <main className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    );
}
