"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SparkTextProps {
  children: ReactNode;
  stars?: number; // optional number of stars
}

export default function SparkText({ children, stars = 7 }: SparkTextProps) {
  const starArray = [...Array(stars)];

  return (
    <div className="relative inline-block cursor-pointer group">
      {/* The text */}
      <span className="relative z-10 text-gray-700 text-xl md:text-2xl font-semibold">
        {children}
      </span>

      {/* Floating stars behind the text */}
      {starArray.map((_, i) => {
        const randomX = Math.random() * 80 - 40; // horizontal movement
        const randomY = Math.random() * -60; // vertical movement
        const randomDelay = Math.random() * 0.5; // random delay
        const randomDuration = 1 + Math.random(); // random duration

        return (
          <motion.span
            key={i}
            className="absolute w-2.5 h-2.5 bg-yellow-300 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, randomX, 0],
              y: [0, randomY, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              repeatDelay: randomDelay,
              ease: "easeInOut",
            }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "center",
              zIndex: 0,
            }}
          />
        );
      })}
    </div>
  );
}
