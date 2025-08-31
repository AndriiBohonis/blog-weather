import { FC } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

export const ExclusiveBanner: FC = () => {
  return (
    <div className="w-full background-gradient flex justify-between rounded-md my-8 relative">
      <div className="p-6 flex flex-col gap-4 md:gap-6">
        <Icon name="logo" />
        <div>
          <h4 className="font-semibold text-2xl md:text-[2rem] md:leading-relaxed text-accent-green mb-2">
            Get unlimited access to exclusive articles
          </h4>
          <p className="text-lg md:text-2xl font-medium text-black">
            Get rid of limits and read everything you wish
          </p>
        </div>
        <div>
          <button className="px-8 py-2 font-medium rounded-md text-white bg-accent-green">
            Try For Free
          </button>
        </div>
      </div>
      <Image
        className="hidden md:block absolute -top-2 -right-2"
        src="/images/banner-2.png"
        alt="Get unlimited access to exclusive articles"
        width={350}
        height={350}
      />
    </div>
  );
};
