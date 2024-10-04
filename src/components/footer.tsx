import Link from "next/link";
import { Ticket } from "lucide-react";
import { Github, Linkedin } from "lucide-react"; // Assuming Github is from lucide-react

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E3A8A] via-[#5B21B6] to-[#3B0764] flex justify-between items-center p-6 mt-5">
      <div className="flex flex-col gap-3">
        <Link href="#">
          <h2 className="text-white text-3xl">BuildMyEvent</h2>
        </Link>
        {/* <div className="h-8 flex items-center gap-2">
          <p className="text-white">powered By</p>
          <Ticket color="#FFF" />
        </div> */}
        <p className="text-white">
          &copy; {new Date().getFullYear()} BuildMyEvent. All rights reserved.
        </p>
      </div>
      <div className="flex gap-6">
        <Link href="https://github.com/BuildMyEvent">
          <Github size={36} color="#FFF" />
        </Link>
        <Link href="https://github.com/BuildMyEvent">
          <Linkedin size={36} color="#FFF" />
        </Link>
      </div>
    </footer>
  );
}
