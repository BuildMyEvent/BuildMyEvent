import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ImgMarquee, MarqueeInterface } from "@/types/interfaces";
import Link from "../../node_modules/next/link";


const reviews: MarqueeInterface[] = [
  {
    title: "Base Ecosystem",
    description: "Explore the Base infrastructure and its ecosystem.",
    img: ImgMarquee.BASE,
    slug: 'base'
  },
  {
    title: "Optimism Scaling",
    description: "Learn how Optimism uses optimistic rollups.",
    img: ImgMarquee.OPTIMISM,
    slug: 'base'
  },
  {
    title: "ETH Hackathon",
    description: "Develop innovative solutions in Web3.",
    img: ImgMarquee.ETH,
    slug: 'base'
  },
  {
    title: "Task Management on Base",
    description: "Discover how Base facilitates the creation of Web3 solutions.",
    img: ImgMarquee.BASE,
    slug: 'base'
  },
  {
    title: "Optimism Strategies",
    description: "Discover how to create projects using the Optimism stack.",
    img: ImgMarquee.OPTIMISM,
    slug: 'base'
  },
  {
    title: "Base Networking",
    description: "Connect with developers building solutions on Base.",
    img: ImgMarquee.BASE,
    slug: 'base'
  },
  {
    title: "SuperChain",
    description: "Learn what Optimism's SuperChain is.",
    img: ImgMarquee.OPTIMISM,
    slug: 'base'
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  title,
  description,
  slug
}: MarqueeInterface) => {
  return (
    <Link href={`/event/${slug}`}>
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
            <img src={img} alt="Event image" width={220} height={80} />
            <figcaption className="mt-2 text-[16px] font-medium dark:text-white">
              {title}
            </figcaption>
          </div>
        </div>
        <blockquote className=" text-sm">{description}</blockquote>
      </figure>
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
