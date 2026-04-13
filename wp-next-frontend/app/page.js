export const revalidate = 60;
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogGrid from '@/components/BlogGrid';

import { client } from '@/lib/graphql';
import { GET_POSTS, GET_SITE_INFO } from '@/lib/queries';

export default async function Home() {
  const [postsData, siteData] = await Promise.all([
    client.request(GET_POSTS),
    client.request(GET_SITE_INFO),
  ]);

  const posts = postsData.posts.nodes;
  const site = siteData.generalSettings;

  return (
    <>
      <Navbar />
      <Hero site={site} />
      <BlogGrid posts={posts} />
    </>
  );
}