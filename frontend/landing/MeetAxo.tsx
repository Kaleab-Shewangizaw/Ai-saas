"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
}));

export default function MeetAxo() {
  return (
    <section className="relative flex mx-auto items-center justify-center overflow-hidden bg-linear-to-br from-gray-950/10 via-gray-900 to-gray-950 px-6 py-24">
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
      <div className="flex-1 space-y-4 text-white border border-gray-700/50 p-6 rounded-lg bg-gray-800/30 backdrop-blur-md shadow-lg max-w-lg mb-12">
        <h2 className="text-lg font-bold">Hello! I’m Axo</h2>
        <p className="text-gray-300 text-sm max-w-lg ">
          Your friendly AI assistant here to make creativity effortless. Tell me
          what you imagine — I’ll create it for you.
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" flex justify-center"
      >
        <Image
          src="/body.png"
          width={350}
          height={350}
          alt="Axo robot"
          className="drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
