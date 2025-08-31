import Image from "next/image";
import React from "react";
import { formatDate } from "@/utils/helpers";
import { BlogPost } from "@/types/post.type";

type PostCardProps = {
  post: BlogPost;
  size?: "lg" | "md";
};

const SIZE_CONFIG = {
  lg: {
    wrapper: "grid grid-cols-1 md:grid-cols-2 gap-4",
    title: "text-xl md:text-4xl lg:text-5xl font-bold mb-4",
    text: "text-base text-gray-600 line-clamp-3 md:line-clamp-4",
  },
  md: {
    wrapper: "grid grid-cols-1 gap-4 md:gap-6",
    title: "text-2xl md:text-2xl font-bold mb-2",
    text: " text-[#78787A] line-clamp-3",
  },
} as const;

export default function PostCard({ post, size = "lg" }: PostCardProps) {
  const config = SIZE_CONFIG[size];

  return (
    <article className={config.wrapper}>
      <Image
        src={post.img}
        alt={post.title}
        width={521}
        height={365}
        className="w-full rounded-md"
      />
      <div>
        <p className="text-[#ADB8C8]">{`${formatDate(post.publishedAt)} · ${post.readTime} min read`}</p>
        <h2 className={config.title}>{post.title}</h2>
        <p className={config.text}>{post.description}</p>
      </div>
    </article>
  );
}
