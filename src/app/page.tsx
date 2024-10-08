import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedBeamMultipleOutputDemo } from "@/components/Beam";
import { AnimatedList } from "@/components/magicui/animated-list";
import TerminalComponent from "@/components/Terminal";
import Iphone15Pro from "@/components/Iphone15pro";
import { MarqueeDemo } from "@/components/Marquee";
import { Item } from "@/types/interfaces";
import {
  ArrowUp01,
  BookOpen,
  PaintbrushVertical,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";
import "../app/globals.css";
import Tickets from "@/components/Tickets";
import NavBarComponent from "@/components/NavBar";
import FooterComponent from "@/components/LadingFooter";
import { Card } from "@/components/ui/card";


const notifications: Item[] = [
  {
    name: "Crea un nuevo evento",
    description: "Crea tu evento en cuestión de minutos",
    icon: "🚀",
    color: "#1E86FF",
  },
  {
    name: "Personaliza tu evento",
    description: "Tienes plantillas a tu disposición",
    icon: "🎨",
    color: "#FF3D71",
  },
  {
    name: "Recibe pagos",
    description: "Recibe pagos de tus clientes",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Usa nuestra API",
    description: "Puedes usar nuestra API",
    icon: "👨🏻‍💻",
    color: "#FFB800",
  },
];

export default function LandingPage() {
  return (
    <>
      <header id="hero" className="mb-[10rem] ">
        <NavBarComponent />
      </header>
      <main className="flex-1 ">

        <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full mt-[0] md:mt-[4rem] justify-evenly">
          <div className="flex w-full md:w-[40%] flex-col gap-7 md:mt-20 mt-0 md:h-auto h-[300px]">
            <h1 className="text-strong-blue font-medium text-3xl text-center">
              Con <strong className="text-light-blue">BuildMyEvent</strong> ¡Nunca
              había sido tan sencillo crear tu propios{" "}
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
          ¡Con <strong className="text-light-blue">BuildMyEvent</strong> puedes
          crear tus diferentes{" "}
          <strong className="text-light-blue">eventos</strong>!
        </h2>
        <article className="flex w-full justify-evenly md:flex-row-reverse flex-col">
          <div className="w-[40%] flex animate-float">
            <Card>
              <AnimatedBeamMultipleOutputDemo />
            </Card>
          </div>
          <div className="w-[40%] mt-[15px] md:mt-0 ">
            <ul className="text-[1.26rem] font-raleway h-full flex flex-col gap-6 justify-center">
            <li className="flex text-[1.32rem] items-center w-full gap-4">
                <p>
                  <strong className="text-stellar-blue">Beneficios de BuildMyEvent:</strong>{" "}
                </p>
              </li> 
              <li className="flex items-center w-full gap-4">
                <strong className="text-light-yellow">●</strong>
                <p>
                  <strong className="text-light-blue">Personalización</strong>{" "}
                  completa del evento!
                </p>
              </li>
              <li className="flex items-center w-full gap-4">
                <strong className="text-light-green">●</strong>
                <p>
                  Gestión y organización{" "}
                  <strong className="text-light-blue">descentralizada</strong>.
                </p>
              </li>
              <li className="flex items-center w-full gap-4">
                <strong className="text-red-500">●</strong>
                <p>
                  Tu solución a unos clics, gracias a nuestra tecnología{" "}
                  <strong className="text-light-blue">No Code</strong>.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>

        <section className="mt-[6rem] md:p-0 p-[10px]">
          <h2 className="text-3xl text-center font-medium text-strong-blue">
            ¡Crea distintos tipos de{" "}
            <strong className="text-light-blue">Tickets</strong> para tus{" "}
            <strong className="text-light-blue">eventos</strong>!
          </h2>
          <article className="mt-[4rem]">
            <Tickets />
          </article>
        </section>

        <section className="flex flex-col gap-8 items-center mt-[6rem]">
          <h2
            className="text-3xl text-center font-medium text-strong-blue"
            id="events"
          >
            ¡Dale un vistazo a los eventos actuales que están en{" "}
            <strong className="text-light-blue">BuildMyEvent</strong>!
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
            Si eres desarrollador ¡dale un vistazo a nuestra{" "}
            <strong className="text-light-blue">Documentación</strong>!
          </h2>
          <article className="flex w-full justify-evenly flex-col md:flex-row md:p-0 p-[10px]">
            <div className="w-[40%] mb-[20px] md:mb-0">
              <ul className="text-xl font-raleway h-full flex flex-col gap-6 justify-center">
                <li className="flex items-center w-full gap-6">
                  <PaintbrushVertical size={26} color="#4461F2" />
                  <p>
                    <strong className="text-dark-blue">Crea</strong> tu evento
                    utilizando nuestra API.
                  </p>
                </li>
                <li className="flex items-center w-full gap-6">
                  <BookOpen size={26} color="#4461F2" />
                  <p>
                    <strong className="text-dark-blue">Implementa</strong>{" "}
                    fácilmente en tu página tecnología BlockChain.
                  </p>
                </li>
                <li className="flex items-center w-full gap-6">
                  <ArrowUp01 size={26} color="#4461F2" />
                  <p>
                    {" "}
                    Analiza las <strong className="text-dark-blue">
                      métricas
                    </strong>{" "}
                    más importantes de tus eventos.
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
                      https://api.ejemplo.com/v1/recurso
                    </span>{" "}
                    \
                    <br />
                    <span className="text-red-500">-H</span> "Authorization:
                    Bearer YOUR_ACCESS_TOKEN"
                  </code>
                </div>
                <div className="w-full flex justify-center mt-10">
                  <Link href="/docs">
                    <ShimmerButton>Visita la documentación</ShimmerButton>
                  </Link>
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
