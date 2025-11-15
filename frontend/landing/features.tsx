"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Showcase from "./useAxotoday";

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
}));

const cards = [
  {
    title: "For Creators",
    text: "Bring your ideas to life — generate stunning images, videos, and text content in seconds. Axo gives you production-quality results that match your creative vision with ease.",
    border: "border-blue-400/50",
    hover: "hover:border-blue-400 hover:shadow-blue-400/50",
    gradient: "from-blue-900/30 to-blue-800/10",
  },
  {
    title: "For Businesses",
    text: "Simplify your workflow — manage all your generated images, videos, and text in one place. Axo helps your brand stay consistent while saving you time and effort.",
    border: "border-green-400/50",
    hover: "hover:border-green-400 hover:shadow-green-400/50",
    gradient: "from-green-900/30 to-green-800/10",
  },
  {
    title: "For Students & Educators",
    text: "Generate visuals, explanations, and video summaries for any topic. Axo helps you focus on ideas and creativity while it handles the heavy lifting.",
    border: "border-purple-400/50",
    hover: "hover:border-purple-400 hover:shadow-purple-400/50",
    gradient: "from-purple-900/30 to-purple-800/10",
  },
];

export default function Features() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-950 to-gray-950 px-6 py-24">
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

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: i * 0.2 }}
            whileHover={{ scale: 1.04, y: -5 }}
            className={
              "relative mx-auto mb-12 border text-sm rounded-lg px-5 py-4 bg-gray-800/50 backdrop-blur-sm border-gray-600 hover:border-blue-400 transition-all duration-200 hover:shadow-md hover:shadow-blue-400"
            }
          >
            <div className="absolute top-4 right-4 p-2 bg-gray-800/60 border border-gray-700 rounded-full hover:bg-gray-700/80 transition">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowUpRight className="text-gray-200 w-5 h-5" />
              </motion.div>
            </div>
            <h1 className="text-xl font-semibold mb-3 text-gray-200">
              {card.title}
            </h1>
            <p className="text-gray-400 leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
      <Showcase />
    </section>
  );
}
