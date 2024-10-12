"use client";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedList } from "@/components/magicui/animated-list";
import TerminalComponent from "@/components/Terminal";
import Iphone15Pro from "@/components/Iphone15pro";
import { MarqueeDemo } from "@/components/Marquee";
import { Item } from "@/types/interfaces";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";
import "../app/globals.css";
import Tickets from "@/components/Tickets";
import NavBarComponent from "@/components/NavBar";
import FooterComponent from "@/components/LadingFooter";
import CreateEventLanding from "@/components/CreateEventLanding";
import { useState } from "react";
import BMELogo from "../../public/BME-Logos/BME-Logo-Over-White1.svg";
import TweetCard from "@/components/TweetCard";
import { getTalentProtocolScore } from "@/utils/get-TP-score";

const notifications: Item[] = [
  {
    name: "Create a new event",
    description: "Create your event in minutes",
    icon: "🚀",
    color: "#1E86FF",
  },
  {
    name: "Customize your event",
    description: "Templates are available at your disposal",
    icon: "🎨",
    color: "#FF3D71",
  },
  {
    name: "Receive payments",
    description: "Receive payments from your clients",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Use our API",
    description: "You can use our API",
    icon: "👨🏻‍💻",
    color: "#FFB800",
  },
];

export default function LandingPage() {
  const [logo, setLogo] = useState(BMELogo);
  return (
    <>
      <NavBarComponent logo={logo} />
      <main className="flex-1 mt-[10rem]">
        <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full mt-[0] md:mt-[4rem] justify-evenly">
          <div className="flex w-full md:w-[40%] flex-col gap-7 md:mt-20 mt-0 md:h-auto h-[300px]">
            <h1 className="text-strong-blue font-medium text-3xl text-center">
              With <strong className="text-light-blue">BuildMyEvent</strong> it
              has never been easier to create your own{" "}
              <strong className="text-light-blue">events</strong>!
            </h1>

            <div className="flex items-center justify-center">
              <Link href="/register">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Create yours right now!
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
          <div className="flex w-full md:w-[40%] mt-[-80px] flex-col gap-5">
            <Iphone15Pro>
              <AnimatedList delay={1000}>
                {notifications.map((notification) => (
                  <Notification key={notification.name} {...notification} />
                ))}
              </AnimatedList>
            </Iphone15Pro>
          </div>
        </section>

        <section className="mt-[10rem] flex gap-16 flex-col md:p-0 p-[10px]">
          <h2 className="text-3xl text-center font-medium text-strong-blue">
            With <strong className="text-light-blue">BuildMyEvent</strong> you
            can create your different <strong className="text-light-blue">events</strong>!
          </h2>
          <CreateEventLanding />
        </section>

        <section className="mt-[8rem] md:p-0 p-[10px]">
          <h2 className="text-3xl text-center font-medium text-strong-blue">
            Create different types of <strong className="text-light-blue">Tickets</strong> for your{" "}
            <strong className="text-light-blue">events</strong>!
          </h2>
          <article className="mt-[4rem]">
            <Tickets />
          </article>
        </section>

        <section className="flex flex-col gap-8 items-center mt-[8rem]">
          <h2
            className="text-3xl text-center font-medium text-strong-blue"
            id="talentProtocol"
          >
            What is the <strong className="text-light-yellow">Builder Ticket</strong> and what is{" "}
            <strong className="text-light-blue">Talent Protocol</strong>?
          </h2>
          <article className="w-full flex justify-evenly items-center">
            <div className="w-[42%] flex justify-center">
              <ul className="text-[1.08rem] flex-wrap font-raleway w-[90%] h-full flex flex-col gap-6 justify-center ">
                <li className="flex text-[1.5rem] gap-4 ">
                  <p>
                    <strong className="text-stellar-blue">
                      Talent Protocol is:
                    </strong>{" "}
                  </p>
                </li>
                <li className="flex w-full gap-4 justify-center">
                  <strong className="text-light-yellow">●</strong>
                  <p>
                    <strong className="text-light-blue">Talent Protocol</strong>{" "}
                    is a platform that connects professionals and emerging talents with investors.
                  </p>
                </li>
                <li className="flex items-center w-full gap-4 justify-center">
                  <strong className="text-light-green">●</strong>
                  <p>
                    With{" "}
                    <strong className="text-light-blue">Talent Protocol</strong> you can earn points in various ways to gain more visibility on the platform.
                  </p>
                </li>
                <li className="flex text-[1.5rem] items-center w-full gap-4 ">
                  <p>
                    <strong className="text-stellar-blue">
                      The Builder Ticket is:
                    </strong>{" "}
                  </p>
                </li>
                <li className="flex items-center w-full gap-4 justify-center">
                  <strong className="text-red-500">●</strong>
                  <p>
                    It is a special ticket within <strong className="text-light-blue">BuildMyEvent</strong>, which can only be purchased by a person who has a certain number of points in <strong className="text-light-blue">Talent Protocol</strong>.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[40%] flex justify-center">
              <TweetCard />
            </div>
          </article>
        </section>

        <section className="flex flex-col gap-8 items-center mt-[8rem]">
          <h2
            className="text-3xl text-center font-medium text-strong-blue"
            id="events"
          >
            With <strong className="text-light-blue">BuildMyEvent</strong> you can create different types of{" "}
            <strong className="text-light-blue">Events</strong>!
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <MarqueeDemo />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </section>

        <section className="mt-[5rem] flex gap-16 flex-col">
          <h2
            className="text-3xl text-center font-medium text-strong-blue"
            id="docs"
          >
            If you are a <strong className="text-light-blue">developer</strong> take a look at our{" "}
            <strong className="text-light-blue">Documentation</strong>!
          </h2>
          <article className="flex w-full justify-evenly flex-col md:flex-row md:p-0 p-[10px]">
            <div className="w-[40%] mb-[20px] md:mb-0">
              <ul className="text-[20px] font-medium text-strong-blue font-raleway h-full flex flex-col gap-6 justify-center">
                <li className="flex text-[1.32rem] items-center w-full gap-4">
                  <p>
                    <strong className="text-stellar-blue">
                      Benefits of our API:
                    </strong>{" "}
                  </p>
                </li>
                <li className="flex items-center w-full gap-6">
                  <strong className="text-light-yellow">●</strong>
                  <p>
                    <strong className="text-light-blue">Create</strong> your event using our API.
                  </p>
                </li>
                <li className="flex items-center w-full gap-6">
                  <strong className="text-light-yellow">●</strong>
                  <p>
                    <strong className="text-light-blue">Easily implement</strong> Blockchain technology on your website.
                  </p>
                </li>
                <li className="flex items-center w-full gap-6">
                  <strong className="text-light-yellow">●</strong>
                  <p>
                    Analyze the most important <strong className="text-light-blue">metrics</strong> of your events.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-[35%]">
              <TerminalComponent>
                <div className="flex items-center mb-4">
                  <TerminalIcon className="text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Terminal</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded text-sm font-mono leading-relaxed border border-gray-300">
                  <code>
                    <span className="text-blue-700">curl</span> -X GET \
                    <br />
                    <span className="text-indigo-500">
                      https://api.example.com/v1/resource
                    </span>{" "}
                    \
                    <br />
                    <span className="text-red-500">-H</span> "Authorization:
                    Bearer YOUR_ACCESS_TOKEN"
                  </code>
                </div>
                <div className="w-full flex justify-center mt-10">
                  <a href="https://api.buildmyevent.xyz/api-docs/#/">
                    <ShimmerButton>Visit the documentation</ShimmerButton>
                  </a>
                </div>
              </TerminalComponent>
            </div>
          </article>
        </section>
      </main>
      <FooterComponent />
    </>
  );
}

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="text-xs text-gray-500"></span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
