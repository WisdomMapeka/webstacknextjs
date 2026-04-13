import { client } from '@/lib/graphql';
import { GET_POST_BY_SLUG } from '@/lib/queries';
import Navbar from '@/components/Navbar';

export default async function PostPage({ params }) {
  const { slug } = await params;

  const data = await client.request(
    GET_POST_BY_SLUG,
    { slug }
  );

  const post = data.post;

  return (
    <>
    <Navbar />
    <main className="bg-gray-50 min-h-screen py-10 px-4">
      
      {/* Container */}
      <article className="max-w-7xl mx-auto bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-400 mb-6">
          Published on {new Date(post.date).toDateString()}
        </p>

        {/* Divider */}
        <hr className="mb-6 border-gray-200" />

        {/* Content */}
        <div
          className="prose prose-gray max-w-none
                     prose-headings:font-semibold
                     prose-h2:mt-8 prose-h2:mb-4
                     prose-p:text-gray-700
                     prose-a:text-blue-600
                     prose-img:rounded-lg
                     prose-img:shadow-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>

    </main>
    </>
  );
}