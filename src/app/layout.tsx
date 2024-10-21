'use client'
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import OnchainProviders from "@/components/OnchainProviders";
import '@rainbow-me/rainbowkit/styles.css';
import '@coinbase/onchainkit/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen text-gray-900">
          <OnchainProviders>
            {children}
          </OnchainProviders>
      </body>
    </html>
  );
}
