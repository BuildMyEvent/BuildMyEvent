"use client"
import { useParams } from 'next/navigation';

export default function EventPage() {
  const { eventName } = useParams();

  if (!eventName) {
    return <div>Error: No se encontró el nombre del evento.</div>;
  }

  return (
    <div>
      <h1>Bienvenido al evento de {eventName}</h1>
      {/* Aquí puedes agregar más detalles sobre el evento */}
    </div>
  );
}
