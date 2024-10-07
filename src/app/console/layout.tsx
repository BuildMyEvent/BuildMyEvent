import type { Metadata } from "next";
import Header from "./navbar"; // Importamos Header desde el directorio correcto
import "../globals.css";

export const metadata: Metadata = {
  title: "Console - BuildMyEvent",
  description: "Console section for Build My Event",
};

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-White text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-8 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
