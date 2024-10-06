"use client"
// import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBar";
import FooterComponent from "@/components/LadingFooter";
import { useParams } from "../../../../node_modules/next/navigation";
import MobileNavbar from "@/components/MobileNavbar";
import { events } from "@/data/events";

// export const metadata: Metadata = {
//     title: "Landing Page",
//     description: "This is Build My Event",
// };

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { eventSlug } = useParams();

    const getEventBySlug = (slug: string) => {
        return events.find(event => event.slug === slug);
    };

    if (!eventSlug) {
        return <div>Error: No se encontró el nombre del evento.</div>;
    }
    const slug = Array.isArray(eventSlug) ? eventSlug[0] : eventSlug;

    const eventData = getEventBySlug(slug ?? '')

    console.log('eventData', eventData);

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
