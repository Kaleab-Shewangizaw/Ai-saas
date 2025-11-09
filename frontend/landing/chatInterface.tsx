"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const quickActions = [
  { icon: ImageIcon, label: "Image", color: "purple" },
  { icon: FileText, label: "Text", color: "blue" },
  { icon: Video, label: "Video", color: "green" },
];
import { User, Send, ImageIcon, FileText, Video } from "lucide-react";

export default function ChatInterface() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-2xl"
    >
      {/* Chat Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700"
      >
        <div className="w-10 h-10 shrink-0 relative">
          <Image
            src="/head.png"
            alt="Axo Robot"
            fill
            className="object-contain rounded-full"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold">Axo AI Assistant</h3>
          <p className="text-emerald-400 text-sm flex items-center gap-1">
            <motion.div
              className="w-2 h-2 bg-emerald-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Online & Ready to Create
          </p>
        </div>
      </motion.div>

      {/* Chat Messages */}
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {/* User Message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
          className="flex justify-end gap-3 items-end"
        >
          <div className="bg-linear-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl rounded-br-md p-4 max-w-xs">
            <p className="text-white text-sm">
              Create a mystical landscape with floating rocks in foggy
              environment
            </p>
          </div>
          <div className="w-8 h-8 shrink-0 border-2 border-gray-700 rounded-full p-2 flex items-center justify-center bg-gray-800">
            <User className="w-4 h-4 text-gray-400" />
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
          className="flex gap-3 justify-start items-end"
        >
          <div className="w-8 h-8 shrink-0 relative border-2 border-gray-700 rounded-full bg-gray-800">
            <Image
              src="/head.png"
              alt="Axo Robot"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl rounded-bl-md p-4">
              <p className="text-white text-sm mb-3">
                Generating your mystical landscape...
              </p>
              <motion.div
                className="bg-gray-800 rounded-lg p-2 border border-gray-700 w-full h-48 overflow-hidden"
                whileHover="hover"
              >
                <div className="h-full w-full bg-linear-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center relative">
                  <Image
                    src="/gen1.jpg"
                    alt="Generated Mystical Landscape"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-t border-gray-700 pt-4 mt-4"
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

        {/* Quick Action Buttons */}
        <motion.div className="flex gap-2 mt-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              custom={index}
              whileHover={{
                scale: 1.05,
                borderColor: `var(--${action.color}-500)`,
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg py-3 px-3 transition-all duration-200 group hover:border-${action.color}-500/50`}
            >
              <div className="flex items-center justify-center gap-2">
                <action.icon
                  className={`w-4 h-4 text-${action.color}-400 group-hover:text-${action.color}-300 group-hover:scale-110 transition-transform`}
                />
                <span className="text-xs text-gray-300 group-hover:text-white">
                  {action.label}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full blur-sm"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full blur-sm"
        animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0.3, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
}
