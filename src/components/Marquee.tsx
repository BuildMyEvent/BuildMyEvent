import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ImgMarquee, MarqueeInterface } from "@/types/interfaces";
import Link from "../../node_modules/next/link";

const reviews: MarqueeInterface[] = [
  {
    title: "Base Events",
    description: "Explora la infraestructura de Base para construir dApps escalables y eficientes en Ethereum.",
    img: ImgMarquee.BASE,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "Optimism Scaling",
    description: "Aprende cómo Optimism usa rollups optimistas para mejorar el rendimiento y reducir costos en Ethereum.",
    img: ImgMarquee.OPTIMISM,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "ETH Hackathon",
    description: "Desarrolla soluciones innovadoras en Web3 utilizando contratos inteligentes y la blockchain de Ethereum.",
    img: ImgMarquee.ETH,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "Task Management on Base",
    description: "Descubre cómo Base facilita la gestión de tareas y la creación de soluciones Web3 escalables.",
    img: ImgMarquee.BASE,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "Optimism Strategies",
    description: "Mejora la organización y enfoque en proyectos Web3 utilizando la tecnología de Optimism.",
    img: ImgMarquee.OPTIMISM,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "Base Events",
    description: "Conéctate con desarrolladores y emprendedores que construyen soluciones en el ecosistema de Base.",
    img: ImgMarquee.BASE,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  },
  {
    title: "On-Time Deliveries",
    description: "Implementa estrategias con Optimism para asegurar entregas eficientes y a tiempo en proyectos Web3.",
    img: ImgMarquee.OPTIMISM,
    banner: 'https://firebasestorage.googleapis.com/v0/b/checkmyticket-20.appspot.com/o/eventImages%2Fc2ae16d9-481e-449e-b82c-0e529a4333a7%2FBanner-d3eaae72-a78a-431e-aec7-e3ed3cd22ba5?alt=media&token=2bfd2168-4f5e-4328-a490-d966eaaf00a0',
    link: '/event/base'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  title,
  description,
  banner,
  link
}: MarqueeInterface) => {
  return (
    <Link
      href={link ?? ''}
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="mb-2">
        <img className="w-full h-[100px] object-cover" alt="" src={banner} />
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="36" height="34" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[16px] font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </Link>
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
