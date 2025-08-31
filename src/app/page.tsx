import { posts } from "@/utils/posts";

import Home from "@/components/Home";

export default async function Page() {
  return <Home initialPosts={posts} />;
}
