import React from 'react'
import { Card } from '@/components/ui/card'
import { AnimatedBeamMultipleOutputDemo } from '@/components/Beam'

export default function CreateEvent() {
  return (
    <>
      <article className="flex w-full justify-evenly md:flex-row-reverse flex-col">
        <div className="w-full md:w-[40%] flex animate-float">
          <Card>
            <AnimatedBeamMultipleOutputDemo />
          </Card>
        </div>
        <div className="w-full md:w-[35%] mt-[15px] md:mt-0 ">
          <ul className="text-[1.24rem] font-raleway h-full flex flex-col gap-6 justify-center">
            <li className="flex text-[1.3rem] items-center w-full gap-4">
              <p>
                <strong className="text-stellar-blue">Benefits of BuildMyEvent</strong>{" "}
              </p>
            </li>
            <li className="flex items-center w-full gap-4">
              <strong className="text-light-yellow">●</strong>
              <p>
                <strong className="text-light-blue">Complete</strong> event customization!
              </p>
            </li>
            <li className="flex items-center w-full gap-4">
              <strong className="text-light-green">●</strong>
              <p>
                Decentralized{" "}
                <strong className="text-light-blue">management and organization</strong>.
              </p>
            </li>
            <li className="flex items-center w-full gap-4">
              <strong className="text-red-500">●</strong>
              <p>
                Your solution just a few clicks away, thanks to our{" "}
                <strong className="text-light-blue">No Code</strong> technology.
              </p>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}
