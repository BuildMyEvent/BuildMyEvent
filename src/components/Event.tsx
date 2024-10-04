import { Event } from "@/types/interfaces";
import Image from "next/image";
export default function EventComponent({ title, description, img, id } : Event){
    return(
      <li className="bg-white p-3 rounded-2xl border-[1px] border-gray-400">
      <Image className="rounded-xl" height={200} width={300} src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    )
  }