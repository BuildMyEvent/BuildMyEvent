import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ImgMarquee, MarqueeInterface } from "@/types/interfaces";
import OP from '../../public/OP.png'
import ETH from '../../public/ETH-Banner.jpg'
import Image from "next/image";

const reviews: MarqueeInterface[] = [
    {
      title: "Base Ecosystem",
      description: "Explora la infraestructura de Base y su ecosistema.",
      img: ImgMarquee.BASE,
    },
    {
      title: "Optimism Scaling",
      description: "Aprende cómo Optimism usa rollups optimistas.",
      img: ImgMarquee.OPTIMISM,
    },
    {
      title: "ETH Hackathon",
      description: "Desarrolla soluciones innovadoras en Web3.",
      img: ImgMarquee.ETH,
    },
    {
      title: "Task Management on Base",
      description: "Descubre cómo Base facilita la creación de soluciones Web3.",
      img: ImgMarquee.BASE,
    },
    {
      title: "Optimism Strategies",
      description: "Descubre como crear proyectos con el Stack de Optimism.",
      img: ImgMarquee.OPTIMISM,
    },
    {
      title: "Base Networking",
      description: "Conéctate con desarrolladores que construyen soluciones en Base.",
      img: ImgMarquee.BASE,
    },
    {
      title: "SuperChain",
      description: "Conoce que es el SuperChain de Optimism.",
      img: ImgMarquee.OPTIMISM,
    }  
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  title,
  description,
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
      <div className="flex flex-row items-center">
        <div className="flex flex-col justify-center">
          <img src={img} alt="Event image" width={220} height={80}/>
          <figcaption className="mt-2 text-[16px] font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className=" text-sm">{description}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0  bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0  bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
