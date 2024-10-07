import type { Metadata } from "next";
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
                    {children}
                <FooterComponent/>
            </body>
        </html>
    );
}
