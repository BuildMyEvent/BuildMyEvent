"use client";
import DynamicTickets from '@/components/DynamicTickets';
import TicketsSlider from '@/components/TicketsSlider';
import { events } from '@/data/events';
import { useParams } from 'next/navigation';
import { CalendarDays, MapPin } from 'lucide-react';
import '../../../app/globals.css';
import WalletWrapper from '@/components/WalletWrapper';
import { useEffect, useState } from 'react';

interface Ticket {
  title: string;
  price: string; // Ajuste el tipo a string
  image?: string;
  description: string;
  features: string[];
  builderScore?: number | undefined;
}



interface Event {
  slug: string;
  name: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  tickets: Ticket[];
}

export default function EventPage() {
  const { eventSlug } = useParams();
  const [eventData, setEventData] = useState<Event | null>(null);

  const getEventBySlug = (slug: string): Event | undefined => {
    return events.find(event => event.slug === slug);
  };

  const fetchUserById = async (slug: string | string[]) => {
    try {
      const userResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/events/3`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (userResponse.ok) {
        const data = await userResponse.json();
        console.log('event data:', data);
      } else {
        const errorData = await userResponse.json();
        console.log('Failed to fetch event data:', errorData);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    if (eventSlug) {
      fetchUserById(eventSlug);
      const slug = Array.isArray(eventSlug) ? eventSlug[0] : eventSlug;
      const event = getEventBySlug(slug);
      setEventData(event || null);
    }
  }, [eventSlug]);

  if (!eventSlug) {
    return <div>Error: Event name not found.</div>;
  }

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        {/* Banner */}
        {eventData.image && <img src={eventData.image} className="w-full h-[500px] object-cover" alt={eventData.name} />}

        {/* Event Description */}
        <section className="py-12 px-4 md:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">{eventData.name}</h2>
            <p className="text-muted-foreground mb-6">
              {eventData.description}
            </p>
            <div className="flex justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                <span>{eventData.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{eventData.location}</span>
              </div>
            </div>
          </div>
        </section>

        {eventData.tickets && <TicketsSlider tickets={eventData.tickets} />}

        {/* CTA Section */}
        <section className="py-12 px-4 md:px-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to be part of {eventData.name}?</h2>
          <p className="mb-6">Don't miss the opportunity to be part of the tech event of the year.</p>
        </section>
      </div>
    </div>
  );
}
