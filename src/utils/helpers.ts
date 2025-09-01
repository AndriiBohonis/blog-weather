import { BlogPost, GroupedCategory } from "@/types/post.type";

export const formatDate = (date: string | Date) => {
  const d = new Date(date);
  const month = d.toLocaleString("en-US", { month: "short" });
  const day = d.getDate();

  return `${month} ${day}`;
};

export const groupByCategory = (items: BlogPost[]): GroupedCategory[] => {
  const map = new Map<
    string,
    { title: string; slug: string; items: BlogPost[] }
  >();

  for (const item of items) {
    const key = item.category.slug;
    if (!map.has(key)) {
      map.set(key, {
        title: item.category.title,
        slug: item.category.slug,
        items: [],
      });
    }
    map.get(key)!.items.push(item);
  }

  return Array.from(map.values());
};
