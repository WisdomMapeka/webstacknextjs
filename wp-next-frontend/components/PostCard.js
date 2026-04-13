import Link from 'next/link';
import { FaCalendarAlt , FaUserCircle } from 'react-icons/fa';

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">

      {/* Image */}
      <img
        src={post.featuredImage?.node.sourceUrl}
        className="w-full h-44 object-cover"
        alt={post.title}
      />

      <div className="p-5">

        <h2 className="text-base font-semibold leading-snug mb-2">
          {post.title}
        </h2>

        <div
          className="text-sm text-gray-500 mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        {/* META ROW */}
        <div className="flex items-center justify-between text-xs text-gray-400">

          {/* Author */}
          <div className="flex items-center gap-2">

            {post.author.node.avatar?.url ? (
              <img
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-6 h-6 text-gray-400" />
            )}

            <span className='font-semibold text-black'>{post.author.node.name}</span>
          </div>


          {/* Date */}
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-gray-400" />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Read More */}
          <Link
            href={`/posts/${post.slug}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>

        </div>

      </div>
    </div>
  );
}