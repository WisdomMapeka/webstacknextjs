import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">

  {/* Image */}
  <img
    src={post.featuredImage?.node.sourceUrl}
    className="w-full h-44 object-cover"
  />

  {/* Content */}
  <div className="p-5">

    <h2 className="text-base font-semibold leading-snug mb-2">
      {post.title}
    </h2>

    <div
      className="text-sm text-gray-500 mb-4 line-clamp-2"
      dangerouslySetInnerHTML={{ __html: post.excerpt }}
    />

    {/* Meta */}
    <div className="flex items-center justify-between text-xs text-gray-400">
      <span>{post.author.node.name} </span>
      <span>{post.date}</span>
    </div>

    {/* Link */}
    <div className="mt-3">
      <span className="text-blue-600 text-sm font-medium">
         <Link href={`/posts/${post.slug}`}>
              Read More →
            </Link>
      </span>
    </div>

  </div>
</div>
  );
}