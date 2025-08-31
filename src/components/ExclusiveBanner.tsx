import { FC } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";

export const ExclusiveBanner: FC = () => {
  return (
    <div className="w-full background-gradient flex justify-between rounded-md my-8">
      <div className="p-6 flex flex-col gap-6">
        <Icon name="logo" />
        <div>
          <h4 className="font-semibold text-3xl text-accent-green">
            Get unlimited access to exclusive articles
          </h4>
          <p className="text-xl font-medium text-black">
            Get rid of limits and read everything you wish
          </p>
        </div>
        <div>
          <button className="px-3 py-2 font-medium rounded-sm text-white bg-accent-green">
            Try For Free
          </button>
        </div>
      </div>
      <Image
        className="hidden md:block"
        src="/images/banner-2.png"
        alt="Get unlimited access to exclusive articles"
        width={300}
        height={300}
      />
    </div>
  );
};
