import Image from "next/image";

export default function Showcase() {
  return (
    <section className="py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-12 text-center">
        Platform <span className="text-purple-400">Gallery</span>
      </h2>

      <div className="container m-auto  w-4xl rounded-md ">
        <div className="flex flex-row space-x-2">
          <div className="flex w-full flex-col space-y-1 ">
            <div className="h-40 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="h-60 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-1 ">
            <div className="h-12 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="h-72 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="h-48 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-1 ">
            <div className="h-28 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="h-40 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="h-64 rounded-md overflow-hidden relative hover:scale-105 transition-all duration-200 hover:z-100">
              <Image
                src="/gen1.jpg"
                alt="sample"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-white/20 text-gray-300 rounded-full text-sm hover:bg-white/10 transition">
          Load More
        </button>
      </div>
    </section>
  );
}
