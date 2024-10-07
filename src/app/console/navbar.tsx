"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BME from "../../../public/BME-Logos/BME-Logo-Over-White1.svg";
import Image from "next/image";
import { LogOut } from "lucide-react";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navOptions = [
    { label: "Home", route: "" },
    { label: "My Page", route: "/my-page" },
    { label: "Events", route: "/events" },
    { label: "Orders", route: "/orders" },
  ];

  useEffect(() => {
    const adjustedPathName = pathname.split("/")[2] || "";
    console.log(adjustedPathName);
    setSelectedTab(adjustedPathName);
  }, [pathname]);

  console.log(pathname);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-6 flex items-center justify-between">
        <div className="text-3xl font-bold text-strong-blue">
          <Image src={BME} alt="Buildmyevent" width={200} />
        </div>
        <Button
          variant="outline"
          className="border-light-blue text-light-blue transition-opacity opacity-80 hover:opacity-100"
        >
          <LogOut/>
          Log Out
        </Button>
      </div>

      <nav className="container mx-auto px-6 py-4 flex gap-4 border-b border-gray-300">
        {navOptions.map((option) => (
          <button
            key={option.route}
            onClick={() => router.push("/console" + option.route)}
            className={`text-lg px-4 py-2 rounded-md transition-opacity duration-200 ${
              selectedTab === option.route.slice(1)
                ? "text-light-blue border-b-2 border-light-blue opacity-100"
                : "text-gray-600 opacity-80 hover:opacity-100"
            }`}
          >
            {option.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
