/* eslint-disable react-hooks/purity */
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Send, Video } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ChatInterface from "./chatInterface";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

export default function HeroSection() {
  // Floating stars data
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen lg:pt-48 flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-950 px-4 py-16 pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Image
          src="/body.png"
          alt="Hero Background"
          fill
          className="object-cover w-full h-full opacity-5"
          priority
        />
      </div>

      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
        >
          {/* Content - Left Side */}
          <div className="text-white space-y-8 flex-1 max-w-2xl flex justify-center items-center flex-col">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="inline-flex  items-center gap-2  relative mb-4 w-40 h-40"
            >
              <Image
                src={"/body.png"}
                fill
                className="object-contain"
                alt="axo-full body image"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Create with{" "}
              <motion.span
                className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Axo
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Transform your ideas into stunning images, engaging videos, and
              compelling captions — instantly. No editing skills required, no
              creative blocks — just pure creation powered by AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button className="border border-gray-600 p-6 px-8 rounded-full  shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <Sparkles className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform " />
                  Start Creating Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  variant="outline"
                  className="hover:bg-transparent bg-transparent hover:text-white  border-0 p-6 px-8 rounded-full cursor-pointer "
                >
                  <Video className="mr-2 w-5 h-5" />
                  View Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* input area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="border-t border-gray-700 pt-4 mt-4 hidden lg:block w-full"
            >
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-gray-800 rounded-xl px-4 py-3 text-gray-400 text-sm border border-gray-700 focus-within:border-emerald-500 transition-colors">
                  <textarea
                    placeholder="Describe what you want to create..."
                    className="w-full bg-transparent outline-none text-white placeholder-gray-500 resize-none text-sm"
                    rows={2}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-linear-to-r from-emerald-500 to-cyan-500 text-white p-3 rounded-xl border-0 flex items-center justify-center cursor-pointer shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Chat Interface - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 max-w-2xl w-full"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                {/* Floating Generated Images */}
                <motion.div
                  className="hidden lg:block absolute -top-20 -left-20 w-40 h-32 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl p-2 shadow-2xl -rotate-6"
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [-6, -3, -6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <motion.div
                    className="h-full w-full relative"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="/Ai1.webp"
                      alt="Generated Image"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="hidden lg:block absolute -top-20 -right-30 w-48 h-36 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl p-2 shadow-2xl rotate-6"
                  animate={{
                    y: [-20, 10, -20],
                    rotate: [6, 3, 6],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <motion.div
                    className="h-full w-full relative"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="/gen1.jpg"
                      alt="Generated Image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="hidden lg:block absolute -top-35 left-[35%] w-55 h-45 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl p-2 shadow-2xl "
                  animate={{
                    y: [-20, 10, -20],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <motion.div
                    className="h-full w-full relative"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Image
                      src="/Ai2.webp"
                      alt="Generated Image"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                </motion.div>

                {/* Main Chat Interface */}
                <ChatInterface />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
