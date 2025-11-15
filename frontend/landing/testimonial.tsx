"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
}));

export default function Testimonial() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br text-white from-gray-950 via-gray-950 to-gray-950 px-6 pb-24">
      {/* Floating stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0, 1, 0] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="relative z-10  flex w-full max-w-7xl  mx-auto text-white">
        <div className="w-180 h-160 relative bg-linear-to-r from-gray-800 to-gray-900 overflow-hidden shadow-lg rounded-lg ">
          <Image
            src="/Ai2.webp"
            alt="Testimonial Avatar"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="absolute  left-[65%] transform -translate-x-1/2 top-[20%] bg-gray-800/70 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md text-center">
          <div className="absolute top-2 left-3 text-gray-400">
            <Quote className="w-15 h-15 mx-auto mb-2 rotate-y-180" />
          </div>
          <div className="mt-15 w-full text-left ">
            <p className="text-lg text-gray-300">
              I like to describe it as &quot;photoshop on steroids.&quot;
              Axo&apos;s advanced capabilities enable us to seamlessly blend and
              enhance images. These stills are then seamlessly integrated back
              into the workflow using Axo, resulting in highly detailed and
              expressive visual assets.
            </p>
            <h2 className="text-lg font-bold my-5 pt-2 border-t border-dashed text-right border-gray-300">
              Some random user
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
