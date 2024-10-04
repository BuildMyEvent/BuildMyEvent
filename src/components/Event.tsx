import { Event } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "./magicui/shimmer-button";
import { ExternalLink } from "lucide-react";
export default function EventComponent({ title, description, img, id }: Event) {
  return (
    <li className="flex flex-col gap-3 bg-white p-3 rounded-2xl shadow-xl">
      <Image
        className="rounded-xl"
        height={200}
        width={300}
        src={img}
        alt={title}
        draggable="false"
      />
      <h3 className="font-bold text-3xl text-center">{title}</h3>
      <div className="flex w-full justify-between items-center gap-4">
        <p className="text-xl">{description}</p>
        <Link className="flex bg-light-blue text-white rounded-xl px-3 py-1 text-xl" href={`${id}`}>
          Ir al evento <ExternalLink />
        </Link>
      </div>
    </li>
  );
}
