import "../../globals.css";
import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBar";
import FooterComponent from "@/components/LadingFooter";
import { useParams } from "../../../../node_modules/next/navigation";
import MobileNavbar from "@/components/MobileNavbar";
import { events } from "@/data/events";
import BMELogo from '../../public/BME-Logos/BME-Logo-Over-White1.svg';

export const metadata: Metadata = {
  title: "BuildMyEvent",
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
                <header id="hero" className="mb-[5rem] ">
                    {/* <MobileNavbar logo={eventData?.logo} /> */}
                    <NavBarComponent />
                </header>
                <main className="flex-1">
                    {children}
                </main>
                {/* <FooterComponent/> */}
            </body>
        </html>
    );
}

