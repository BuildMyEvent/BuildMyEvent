import { Card } from "@/components/ui/card";
import TweetPhoto from "../../public/TweetPhoto.jpeg";
import { BadgeCheck } from "lucide-react";
import { TalentProtocol } from "@public/icons";
import X from "../../public/icons/x.svg";
import Image from "next/image";

export default function Component() {
  const handleURL = (): void => {
    window.open(
      "https://x.com/TalentProtocol/status/1826692481876197554",
      "_blank"
    );
  };

  return (
    <Card
      onClick={handleURL}
      className="cursor-pointer mt-4 w-[92%] p-4 bg-white border-4 border-gray-200 rounded-2xl shadow-sm"
    >
      <section className="flex-1">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image
              className="rounded-full"
              src={TalentProtocol}
              alt="Talent Protocol Logo"
              width={50}
            />
            <div className="flex flex-col">
              <span className="font-bold text-[15px] text-gray-900">
                Talent Protocol
              </span>{" "}
              <span className="text-[15px] text-gray-500">@TalentProtocol</span>
            </div>
            <BadgeCheck className="text-[#1DA1F2] w-5 h-5" />
          </div>
          <Image src={X} alt="X (Twitter Logo)" width={25} className="mr-4" />
        </div>
        <p className="mt-2">Introducing the Basename Credential 💫</p>
        <p className="mt-1 text-[15px] text-gray-800 leading-normal">
          Basenames are an onchain identity for{" "}
          <a className="text-light-blue" href="https://x.com/base">
            @base
          </a>{" "}
          builders, supercharged with Talent Protocol’s Builder Score, making it
          easier to connect, collaborate, and contribute onchain.
        </p>
        <div className="flex justify-center">
          <Image
            src={TweetPhoto}
            alt="Talent Protocol Tweet"
            className="rounded-2xl mt-3"
            width={420}
          />
        </div>
      </section>
    </Card>
  );
}
