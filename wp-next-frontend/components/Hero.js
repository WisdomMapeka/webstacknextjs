import Link from "next/link";

export default function Hero({ site }) {
  return (
    <section className="relative h-[420px]">
  <img
    src="/hero.png"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="relative max-w-6xl mx-auto h-full flex items-center px-6">
    <div className="text-white max-w-xl">

       {/* Site Title */}
          <p className="text-sm mb-2 text-gray-200">
            Welcome to {site.title}
          </p>

          {/* Tagline */}
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-4">
            {site.description}
          </h1>

      <Link href={"/about"}>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-md shadow-md text-sm">
          Read More
        </button>
      </Link>

    </div>
  </div>
</section>
  );
}