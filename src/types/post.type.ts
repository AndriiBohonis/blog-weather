export interface Category {
  slug: string;
  title: string;
}

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  img: string;
  category: Category;
  publishedAt: string;
  readTime: number;
};

export type GroupedCategory = {
  title: string;
  slug: string;
  items: BlogPost[];
};
