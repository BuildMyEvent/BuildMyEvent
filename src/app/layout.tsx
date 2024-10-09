import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "BuildMyEvent",
  description: "This is Build My Event",
  icons: { icon: '../../public/BME-Logos/BME.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen text-gray-900">
        {children}
      </body>
    </html>
  );
}
