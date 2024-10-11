'use client'
import { EventForm } from "@/components/EventForm";
import NavBarComponent from "@/components/NavBar";
import { useParams } from 'next/navigation';

export default function CreateEvent() {
  const { id } = useParams();

  return (
    <div>
      <NavBarComponent />
      <div className="mt-[80px]">
        <EventForm />
      </div>
    </div>
  )
}

