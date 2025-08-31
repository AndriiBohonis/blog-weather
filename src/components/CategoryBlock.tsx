import PostCard from "@/components/PostCard";
import Icon from "@/components/Icon";
import { FC, ReactNode } from "react";
import { GroupedCategory } from "@/types/post.type";

interface BannerConfig {
  component: ReactNode;
  after: number;
}

interface CategoryProps {
  category: GroupedCategory;
  banners?: BannerConfig[];
  isLast: boolean;
}

const categoryConfig: Record<
  string,
  { cols: number; size: "lg" | "md"; gridColsClass: string }
> = {
  new: { cols: 1, size: "lg", gridColsClass: "grid-cols-1" },
  "top-of-the-day": {
    cols: 2,
    size: "md",
    gridColsClass: "grid-cols-1 md:grid-cols-2",
  },
  default: {
    cols: 3,
    size: "md",
    gridColsClass: "md:grid-cols-2 lg:grid-cols-3",
  },
};

export const CategoryBlock: FC<CategoryProps> = ({
  category,
  banners = [],
  isLast,
}) => {
  const { size, gridColsClass } =
    categoryConfig[category.slug] ?? categoryConfig.default;

  let lastIndex = 0;

  return (
    <div>
      {category.slug !== "new" ? (
        <h4 className="mb-4 text-md text-accent-gray font-bold uppercase">
          {category.title}
        </h4>
      ) : (
        <Icon className="mb-4" name="new_badge" />
      )}
      {category.items?.length ? (
        <>
          {banners.map((banner, i) => {
            const itemsChunk =
              category.items?.slice(lastIndex, banner.after) || [];
            lastIndex = banner.after;

            return (
              <div key={`banner-group-${i}`}>
                {itemsChunk.length > 0 && (
                  <div className={`grid ${gridColsClass} gap-6 md:gap-8 mb-4`}>
                    {itemsChunk.map(post => (
                      <PostCard key={post.id} size={size} post={post} />
                    ))}
                  </div>
                )}
                <div className="w-full mb-4">{banner.component}</div>
              </div>
            );
          })}

          {category.items?.slice(lastIndex).length > 0 && (
            <div className={`grid ${gridColsClass} gap-6 md:gap-8 mb-4`}>
              {category.items.slice(lastIndex).map(post => (
                <PostCard key={post.id} size={size} post={post} />
              ))}
            </div>
          )}
        </>
      ) : null}

      {!isLast && (
        <div className="mb-2 mt-6 md:mt-10 lg:mt-14 md:mb-4 w-full border-t border-accent-gray" />
      )}
    </div>
  );
};
