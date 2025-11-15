"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 3 + Math.random() * 4,
}));

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-gray-950 via-gray-950 to-gray-950 px-6 py-24">
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
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-semibold text-white max-w-lg leading-snug">
              Create your next{" "}
              <span className="text-purple-400">masterpiece</span>, powered by
              Axo AI.
            </h2>

            <p className="text-gray-400 mt-4">No credit card needed.</p>

            <button className="mt-8 px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              Start using Axo
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/axo-dashboard-preview.png"
              alt="Axo Dashboard Preview"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>

        {/* Middle Links Section */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Solutions */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#">AI Art Generator</Link>
              </li>
              <li>
                <Link href="#">AI Video Generator</Link>
              </li>
              <li>
                <Link href="#">AI Text Generator</Link>
              </li>
              <li>
                <Link href="#">Transparent PNG Creator</Link>
              </li>
              <li>
                <Link href="#">AI Graphic Tools</Link>
              </li>
              <li>
                <Link href="#">AI Photography</Link>
              </li>
              <li>
                <Link href="#">AI Architecture</Link>
              </li>
              <li>
                <Link href="#">AI Print on Demand</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">API</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="#">Creator Program</Link>
              </li>
              <li>
                <Link href="#">Affiliate Program</Link>
              </li>
            </ul>
          </div>

          {/* App Store */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-4">Get the App</h3>

            <div className="flex flex-col space-y-3">
              <Image
                src="/appstore.png"
                alt="App Store Download"
                width={140}
                height={40}
              />
              <Image
                src="/googleplay.png"
                alt="Google Play Download"
                width={140}
                height={40}
              />
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-gray-300 font-semibold mb-4">Stay Tuned</h3>
            <div className="flex items-center space-x-4 text-gray-400 text-lg">
              <Link href="#">
                <i className="ri-facebook-fill" />
              </Link>
              <Link href="#">
                <i className="ri-instagram-line" />
              </Link>
              <Link href="#">
                <i className="ri-youtube-fill" />
              </Link>
              <Link href="#">
                <i className="ri-tiktok-fill" />
              </Link>
              <Link href="#">
                <i className="ri-twitter-x-line" />
              </Link>
              <Link href="#">
                <i className="ri-linkedin-fill" />
              </Link>
              <Link href="#">
                <i className="ri-discord-fill" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <div className="mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
          {/* Left Logo + Info */}
          <div className="flex items-center space-x-4">
            <Image
              src="/axo-logo.png"
              width={40}
              height={40}
              alt="Axo Logo"
              className="rounded-full"
            />
            <div>
              <p className="text-white font-semibold">Axo.AI</p>
              <p className="text-gray-500 text-xs">
                © 2025 Axo Interactive. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Legal */}
          <div className="flex space-x-6 mt-6 md:mt-0 text-gray-400">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">DPA</Link>
            <Link href="#">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
