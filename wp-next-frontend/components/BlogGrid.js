import PostCard from './PostCard';

export default function BlogGrid({ posts }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

  <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
    Latest Posts
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>

</section>
  );
}