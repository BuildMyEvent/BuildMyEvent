"use client";
import DynamicTickets from '@/components/DynamicTickets';
import TicketsSlider from '@/components/TicketsSlider';
import { events } from '@/data/events';
import { useParams } from 'next/navigation';
import { CalendarDays, MapPin } from 'lucide-react';
import '../../../app/globals.css';
import WalletWrapper from '@/components/WalletWrapper';
import { useEffect, useState } from 'react';
import { Ticket } from '@/types/interfaces';

interface Event {
  slug: string;
  name: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  tickets: Ticket[];
}

export default function EventPage() {
  const { eventSlug } = useParams();
  const [eventData, setEventData] = useState<Event | null>(null);

  // const getEventBySlug = (slug: string): Event | undefined => {
  //   return events.find(event => event.slug === slug);
  // };

  const fetchEventById = async (domain: string | string[]) => {
    try {
      const eventResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/events/9`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (eventResponse.ok) {
        const data = await eventResponse.json();
        setEventData(data.event);
        console.log('event data:', data);
      } else {
        const errorData = await eventResponse.json();
        console.log('Failed to fetch event data:', errorData);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    fetchEventById(eventSlug);
  }, [eventSlug]);

  if (!eventSlug) {
    return <div>Error: Event name not found.</div>;
  }

  if (!eventData) {
    return                   <div className="w-full h-screen flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-900"></div>
  </div>;
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        {/* Banner */}
        <img
          src={eventData?.image ?? 'https://images.ctfassets.net/sygt3q11s4a9/5kbm9b5W1gYOdCZpkb8nAV/e4d87acb605b07c9fb8b8ce094e067b4/Base_Blog_header.png'}
          className="w-full h-[500px] object-cover"
        />

        {/* Event Description */}
        <section className="py-12 px-4 md:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">{eventData?.title}</h2>
            <p className="text-muted-foreground mb-6">
              {eventData.description}
            </p>
            <div className="flex justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-5 w-5" />
                <span>{eventData?.date ?? '10 Nov 2024'}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{eventData?.location??'San Jose, Costa Rica'}</span>
              </div>
            </div>
          </div>
        </section>

        {eventData.tickets && <TicketsSlider tickets={eventData.tickets} />}

        {/* CTA Section */}
        <section className="py-12 px-4 md:px-8 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to be part of {eventData.title}?</h2>
          <p className="mb-6">Don't miss the opportunity to be part of the tech event of the year.</p>
        </section>
      </div>
    </div>
  );
}
