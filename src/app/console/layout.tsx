import React from "react";
import { Metadata } from "next";
import "../globals.css";
import Header from "./navbar"; // Importamos el componente Header

export const metadata: Metadata = {
  title: "BuildMyEvent",
  description: "This is Build My Event",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light-White text-gray-900">
        <Header /> {/* Usamos el Header aquí */}
        <main className="container mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
