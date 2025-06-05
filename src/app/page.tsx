import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Posts from "@/components/Posts";
import { getKeyPosts, getPosts } from "@/services/posts";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: async () => await getPosts(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["keyPost", "1"],
    queryFn: async () => await getKeyPosts("1"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
