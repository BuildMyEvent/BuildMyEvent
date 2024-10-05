"use client"

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CheckoutModal from './CheckoutModal'

// Assuming you have these images imported or replace with your actual image paths
// import GeneralTicket from '/placeholder.svg?height=120&width=120'
// import VIPTicket from '/placeholder.svg?height=120&width=120'
// import PremiumTicket from '/placeholder.svg?height=120&width=120'
// import EarlyBirdTicket from '/placeholder.svg?height=120&width=120'
// import GroupTicket from '/placeholder.svg?height=120&width=120'
// import StudentTicket from '/placeholder.svg?height=120&width=120'

const ticketTypes = [
  {
    title: "Ticket General",
    price: "$6",
    description: "Acceso a todas las charlas y oportunidades de networking en el meetup de Base en Costa Rica.",
    features: [
      "Acceso completo a las charlas",
      "Networking con profesionales"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: GeneralTicket
  },
  {
    title: "Ticket VIP",
    price: "$12",
    description: "Acceso premium con beneficios adicionales para una experiencia mejorada en el meetup.",
    features: [
      "Todo lo incluido en Ticket General",
      "Asientos preferenciales",
      "Sesión exclusiva de Q&A"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: VIPTicket
  },
  {
    title: "Ticket Premium",
    price: "$20",
    description: "La experiencia más completa con acceso total y beneficios exclusivos.",
    features: [
      "Todo lo incluido en Ticket VIP",
      "Cena con los ponentes",
      "Merchandising exclusivo"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: PremiumTicket
  },
  {
    title: "Early Bird Ticket",
    price: "$4",
    description: "Oferta especial por tiempo limitado. Acceso general a precio reducido.",
    features: [
      "Acceso completo a las charlas",
      "Networking con profesionales",
      "Descuento especial"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: EarlyBirdTicket
  },
  {
    title: "Group Ticket",
    price: "$20",
    description: "Ideal para equipos. Precio especial para grupos de 4 personas.",
    features: [
      "Acceso para 4 personas",
      "Networking grupal",
      "Sesión de fotos grupal"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: GroupTicket
  },
  {
    title: "Student Ticket",
    price: "$3",
    description: "Tarifa especial para estudiantes. Requiere identificación válida.",
    features: [
      "Acceso completo a las charlas",
      "Networking con profesionales",
      "Sesión de orientación profesional"
    ],
    image: 'https://www.hallos.io/_next/image?url=https%3A%2F%2Fipfs.io%2Fipfs%2FQmQK62wSnNrKCuJgbaPMEetevFE1AfMKvrz553dYmHCLnL%2F5.png&w=3840&q=75'
    // image: StudentTicket
  }
]

export default function TicketsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {ticketTypes.map((ticket, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pr-4">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{ticket.title}</CardTitle>
                  <div className='flex justify-center w-full mb-2 mt-4'>
                    {ticket?.image && <img src={ticket?.image} alt={ticket.title} className='rounded-xl h-[300px] object-cover' />}
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">{ticket.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    {ticket.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-yellow-500 mr-2">●</span> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  {/* <Button className="w-full">Obtener Tickets</Button> */}

                  <CheckoutModal />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="flex justify-center mt-4">
        {ticketTypes.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 rounded-full mx-1 p-0 ${index === selectedIndex ? 'bg-primary' : 'bg-muted'
              }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}