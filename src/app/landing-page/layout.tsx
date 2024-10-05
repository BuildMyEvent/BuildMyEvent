import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBar";
import FooterComponent from "@/components/LadingFooter";

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
                <header  className="mb-[10rem] ">
                    <NavBarComponent />
                </header>
                <main className="flex-1">
                    {children}
                </main>
                <FooterComponent/>
            </body>
        </html>
    );
}
