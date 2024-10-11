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


export default function TicketsSlider({ tickets }) {
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
          {tickets.map((ticket, index) => (
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

                  <CheckoutModal 
                  hasBuilderScore={true}
                  
                  disabled={(!ticket.builderScore || ticket.builderScore == 0) ? false : ticket.builderScore < 20 ? true : false} />
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