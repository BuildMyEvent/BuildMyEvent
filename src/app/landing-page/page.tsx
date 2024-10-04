import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedBeamMultipleOutputDemo } from "@/components/Beam";
import { AnimatedList } from "@/components/magicui/animated-list";
import TerminalComponent from "@/components/terminal";
import Iphone15Pro from "@/components/Iphone15pro";
import { Item, Event } from "@/types/interfaces";
import { FolderSync, LayoutTemplate, PaintbrushVertical } from "lucide-react";
import Image from "next/image";

const notifications: Item[] = [
  {
    name: "Crea un nuevo evento",
    description: "Crea tu evento en cuestión de minutos",
    time: "",
    icon: "🚀",
    color: "#1E86FF",
  },
  {
    name: "Personaliza tu evento",
    description: "Tienes plantillas a tu disposición",
    time: "5m ago",
    icon: "🎨",
    color: "#FF3D71",
  },
  {
    name: "Recibe pagos",
    description: "Recibe pagos de tus clientes",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Usa nuestra API",
    description: "Si eres desarrollador puedes usar nuestra API",
    time: "10m ago",
    icon: "👨🏻‍💻",
    color: "#FFB800",
  },
];

const events: Event[] = [
  {
    id: "1",
    title: "Ethereum Pura Vida",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
  {
    id: "2",
    title: "MeetUp Base",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
  {
    id: "3",
    title: "CofiBlocks meetUp",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
  {
    id: "4",
    title: "Ethereum Pura Vida",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
  {
    id: "5",
    title: "MeetUp Base",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
  {
    id: "6",
    title: "CofiBlocks meetUp",
    description: "Evento de prueba",
    img: "/NatureProof.webp",
  },
];

const firstRowEvents = events.slice(0, events.length / 2);
const secondRowEvents = events.slice(events.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="36" height="34" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-base font-bold dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function LandingPage() {
  return (
    <>
      <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full mt-[4rem] justify-evenly">
        <div className="flex w-[40%] flex-col gap-7 mt-20">
          <h1 className="text-strong-blue font-medium text-3xl text-center">
            Con <strong className="text-light-blue">BuildMyEvent</strong> ¡Nunca
            había sido tan sencillo que las personas creen sus propios{" "}
            <strong className="text-light-blue">eventos</strong>!
          </h1>

          <div className="flex items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                ¡Crea el tuyo ya mismo!
              </span>
            </ShimmerButton>
          </div>
        </div>
        <div className="flex animate-float w-[40%] mt-[-125px] flex-col gap-5">
          <Iphone15Pro>
            <AnimatedList delay={2000}>
              {notifications.map((notification) => (
                <Notification key={notification.name} {...notification} />
              ))}
            </AnimatedList>
          </Iphone15Pro>
        </div>
      </section>

      <section className="mt-[20rem] flex gap-16 flex-col">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          Con <strong className="text-light-blue">BuildMyEvent</strong> puedes
          crear tus diferentes{" "}
          <strong className="text-light-blue">eventos</strong> !
        </h2>
        <article className="flex w-full justify-evenly">
          <div className="w-[46%]">
            <TerminalComponent>
              <AnimatedBeamMultipleOutputDemo />
            </TerminalComponent>
          </div>
          <div className="w-[40%]">
            <ul className="text-xl font-raleway h-full flex flex-col gap-6 justify-center">
              <li className="flex items-center w-full gap-6">
                <PaintbrushVertical size={36} color="#4461F2" />
                <p>
                  <strong className="text-dark-blue">Personalización</strong>{" "}
                  completa del evento.
                </p>
              </li>
              <li className="flex items-center w-full gap-6">
                <LayoutTemplate size={36} color="#4461F2" />
                <p>
                  Gestión y organización{" "}
                  <strong className="text-dark-blue">descentralizada</strong>.
                </p>
              </li>
              <li className="flex items-center w-full gap-6">
                <FolderSync size={36} color="#4461F2" />
                <p>
                  {" "}
                  Seguimiento en{" "}
                  <strong className="text-dark-blue">tiempo real</strong> de
                  invitados y confirmaciones.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-8 items-center mt-32">
        <h2 className="text-black text-4xl">
          Clientes que confiaron en{" "}
          <strong className="text-light-blue">BuildMyEvent.</strong>
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRowEvents.map((event) => (
              <ReviewCard
                key={event.id}
                img={event.img}
                name={event.title}
                username=""
                body={event.description}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRowEvents.map((event) => (
              <ReviewCard
                key={event.id}
                img={event.img}
                name={event.title}
                username=""
                body={event.description}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>
    </>
  );
}

const Notification = ({ name, description, icon, color, time }: Item) => {
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
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
