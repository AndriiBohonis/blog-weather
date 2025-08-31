"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { fetchTemperature } from "@/services/weatherService";
import Icon from "@/components/Icon";

interface SearchBannerProps {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchBanner: FC<SearchBannerProps> = ({ query, setQuery }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetchTemperature(controller.signal)
      .then(t => setTemperature(t))
      .catch(err => {
        if (err.name !== "AbortError") console.error(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <div className="flex w-full justify-between rounded-xl bg-green-transparent my-6 md:my-8 lg:my-12">
      <div className="p-4 md:p-10 lg:p-14">
        <h3 className="text-2xl lg:text-[2rem] text-accent-green mb-2 font-bold">
          Stay always tuned with planting trends
        </h3>
        <div className="text-lg font-bold flex items-center gap-2 mb-4">
          <span>Current temperature is:</span>
          {loading ? (
            <span className="inline-block w-5 h-5 border-2 border-t-transparent border-accent-green rounded-full animate-spin align-middle" />
          ) : (
            <span>{temperature}°C</span>
          )}
        </div>

        <div className="relative max-w-[522px]">
          <input
            id="search-blog"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full pr-12 rounded-xl bg-white border border-gray-300 px-4 py-2 lg:py-3.5 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-accent-green"
          />
          <Icon
            className="absolute top-1/2 right-4 -translate-y-1/2"
            name="search"
          />
        </div>
      </div>
      <Image
        src="/images/search-banner.png"
        alt="Stay always tuned with planting trends"
        width={400}
        height={400}
        className="rounded-full hidden md:block"
      />
    </div>
  );
};
