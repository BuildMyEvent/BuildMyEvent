import type { Metadata } from "next";
import NavBarComponent from "app/components/NavBar";
export const metadata: Metadata = {
    title: "Landing Page",
    description: "This is Build My Event",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <NavBarComponent />
                </header>
                {children}
            </body>
        </html>
    );
}
