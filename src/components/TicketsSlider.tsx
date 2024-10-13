"use client"
import React, { useState, useEffect, useCallback, useContext } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CheckoutModal from './CheckoutModal'
import { AuthContext } from '@/context/AuthContext'
import { getTalentProtocolScore } from '@/utils/get-TP-score'
import BuilderScore from './BuilderScore'
import { Ticket } from '@/types/interfaces'

interface TicketsSliderProps {
  tickets: Ticket[]
}

export default function TicketsSlider({ tickets }: TicketsSliderProps) {
  const { user, login, logout } = useContext(AuthContext);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [userBuilderScore, setUserBuilderScore] = useState(0)
  const [buiderScoreLoading, setBuiderScoreLoading] = useState(true)

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

  useEffect(() => {
    const getTPScore = async () => {
      const score = await getTalentProtocolScore(user?.wallet ?? '')
      console.log('score', score);
      setUserBuilderScore(score ?? 0)
      setBuiderScoreLoading(false)
      return score
    }
    if (user) {
      getTPScore()
    }
  }, [user])

  const isCheckoutDisabled = (user: any, userBuilderScore: any, ticket: any) => {
    if (!user) {
      return true; // User is empty, disable checkout
    }

    if (!ticket.builderScore) {
      return false; // No builder score required, enable checkout
    }

    if (userBuilderScore < ticket.builderScore) {
      return true; // User's builder score is less than required, disable checkout
    }

    return false; // All conditions met, enable checkout
  };

  const getButtonText = (user: any, userBuilderScore: any, ticket: any) => {
    if (user && ticket.builderScore && userBuilderScore < ticket.builderScore) {
      return 'You don’t have enough builder score';
    }
    return '';
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {tickets && tickets.map((ticket: any, index: number) => (
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
                    {ticket.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-yellow-500 mr-2">●</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    {ticket.builderScore &&
                      <div>
                        {/* <p>This ticket need a minimum builder score of {ticket.builderScore}</p> */}
                        <div className='flex justify-center gap-2'>
                          <BuilderScore text='Required Builder Score' score={ticket.builderScore} isRequired />
                          <BuilderScore score={userBuilderScore} loading={buiderScoreLoading} />
                        </div>
                      </div>
                    }
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  {/* <Button className="w-full">Obtener Tickets</Button> */}

                  {/* <CheckoutModal
                    buttonText=''
                    isDisabled={(!ticket.builderScore || !user) ? false : userBuilderScore > ticket.builderScore ? false : true}
                  /> */}

                  <CheckoutModal
                    ticket={ticket}
                    buttonText={getButtonText(user, userBuilderScore, ticket)}
                    isDisabled={isCheckoutDisabled(user, userBuilderScore, ticket)}
                  />
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
        {tickets.map((_: any, index: number) => (
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