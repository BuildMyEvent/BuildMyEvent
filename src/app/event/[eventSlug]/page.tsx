"use client"
import DynamicTickets from '@/components/DynamicTickets';
import TicketsSlider from '@/components/TicketsSlider';
import { events } from '@/data/events';
import { useParams } from 'next/navigation';
import { CalendarDays, MapPin } from 'lucide-react';
import '../../../app/globals.css'
import WalletWrapper from '@/components/WalletWrapper';

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
      <div className="flex flex-col min-h-screen">
        {/* Banner */}
        <img src={eventData?.image} className="w-full h-[500px] object-cover" />

        {/* Event Description */}
        <section className="py-12 px-4 md:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">{eventData?.name}</h2>
            <p className="text-muted-foreground mb-6">
              {eventData?.description}
            </p>
            <div className="flex justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                <span>{eventData?.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{eventData?.location}</span>
              </div>
            </div>
          </div>
        </section>

        <TicketsSlider tickets={eventData?.tickets} />


        {/* CTA Section */}
        <section className="py-12 px-4 md:px-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Listo para ser parte de {eventData?.name}?</h2>
          <p className="mb-6">No te pierdas la oportunidad de ser parte del evento tecnológico del año.</p>
          {/* <Button variant="secondary" size="lg">
            Reserva tu lugar ahora
          </Button> */}
        </section>
      </div>
    </div>
  );
}
