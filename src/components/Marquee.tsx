import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ImgMarquee, MarqueeInterface } from "@/types/interfaces";


const reviews: MarqueeInterface[] = [
    {
        name: "Base Meetup",
        body: "Este evento es para dar una charla introductoria a Base.",
        img: ImgMarquee.male, 
      },
      {
        name: "Taller de Productividad",
        body: "Aprende cómo gestionar mejor tu tiempo y tareas en este taller interactivo.",
        img: ImgMarquee.female,
      },
      {
        name: "Hackathon Universitario",
        body: "Una competencia donde estudiantes desarrollan soluciones innovadoras.",
        img: ImgMarquee.male,
      },
      {
        name: "Conferencia sobre Gestión de Tareas",
        body: "Conoce nuevas herramientas y técnicas para mejorar la productividad.",
        img: ImgMarquee.female,
      },
      {
        name: "Enfoque y Organización",
        body: "Descubre cómo mejorar tu enfoque y ser más organizado.",
        img: ImgMarquee.male,
      },
      {
        name: "Evento de Networking",
        body: "Conéctate con profesionales y estudiantes interesados en la gestión de tareas.",
        img: ImgMarquee.female,
      },
      {
        name: "Seminario: Entregas a Tiempo",
        body: "Aprende a evitar retrasos y entregar tus proyectos a tiempo.",
        img: ImgMarquee.male,
      },
      {
        name: "Encuentro de Innovación Estudiantil",
        body: "Comparte tus ideas y aprende de los demás en este evento colaborativo.",
        img: ImgMarquee.female,
      }
      
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: MarqueeInterface) => {
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
        <img className="rounded-full" width="36" height="34" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[16px] font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0  bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0  bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
