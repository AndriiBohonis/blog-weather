"use client";

import { useState, useEffect } from "react";
import { groupByCategory } from "@/utils/helpers";
import { SearchBanner } from "@/components/SearchBanner";
import { CategoryBlock } from "@/components/CategoryBlock";
import { ExclusiveBanner } from "@/components/ExclusiveBanner";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { BlogPost } from "@/types/post.type";

type HomeProps = {
  initialPosts: BlogPost[];
};
const banners = [
  {
    after: 6,
    component: <ExclusiveBanner />,
    slug: "interesting",
  },
];
export default function Home({ initialPosts }: HomeProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const {
    value: query,
    setValue: setQuery,
    debouncedValue,
  } = useDebouncedState("", 400);

  useEffect(() => {
    if (!query) {
      setFilteredPosts(initialPosts);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = initialPosts.filter(post =>
      post.title.toLowerCase().includes(lowerQuery)
    );
    setFilteredPosts(filtered);
  }, [debouncedValue, initialPosts]);

  const postsByCategory = groupByCategory(filteredPosts);
  const hasPosts = postsByCategory.some(
    cat => cat.items && cat.items.length > 0
  );

  return (
    <main className="app-container flex-1">
      <SearchBanner query={query} setQuery={setQuery} />
      <div>
        {hasPosts ? (
          postsByCategory.map((category, i) => (
            <CategoryBlock
              isLast={i === postsByCategory.length - 1}
              key={category.slug}
              category={category}
              banners={banners.filter(b => b.slug === category.slug)}
            />
          ))
        ) : (
          <p className="text-center text-accent-gray mt-8">No blogs found</p>
        )}
      </div>
    </main>
  );
}
