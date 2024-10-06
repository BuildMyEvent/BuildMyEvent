"use client"
import DynamicTickets from '@/components/DynamicTickets';
import TicketsSlider from '@/components/TicketsSlider';
import { events } from '@/data/events';
import { useParams } from 'next/navigation';
import '../../../app/globals.css'

export default function EventPage() {
  const { eventSlug } = useParams();

  const getEventBySlug = (slug: string) => {
    return events.find(event => event.slug === slug);
  };

  if (!eventSlug) {
    return <div>Error: No se encontró el nombre del evento.</div>;
  }

  const slug = Array.isArray(eventSlug) ? eventSlug[0] : eventSlug;

  const eventData = getEventBySlug(slug)

  console.log('eventData', eventData);

  return (
    <div>
      <img src={eventData?.image} className="w-full h-[500px] object-cover" />

      <div className='max-w-[1080px] p-[10px]'>
        <h1 className='text-2xl mb-2'>Bienvenido al evento {eventData?.name}</h1>
        <p>{eventData?.description}</p>

        {/* <DynamicTickets tickets={eventData?.tickets} /> */}
        <TicketsSlider/>

      </div>

      {/* Aquí puedes agregar más detalles sobre el evento */}
    </div>
  );
}
