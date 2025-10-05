"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Guitar, Music2, Zap } from "lucide-react";

export default function Dashboard() {
  const acousticGuitars = [
    "Dreadnought",
    "Concert",
    "Parlor",
    "Jumbo",
    "Auditorium",
    "Classical",
  ];

  const classiclGuitars = [
    "Flamenco Guitar",
    "Romantic Guitar",
    "Baroque Guitar",
    "Renaissance Guitar",
  ];

  const electricGuitars = [
    "Solid Body Electric Guitar",
    "Hollow Body Electric Guitar",
    "Semi-Hollow Body Electric Guitar",
    "Archtop Guitar",
  ];

  const facts = {
    acoustic:
      "The dreadnought design was first introduced by C.F. Martin & Company in 1916.",
    classical:
      "Flamenco guitars are lighter and have thinner tops than classical guitars.",
    electric:
      "The first electric guitar was invented in 1931 by George Beauchamp.",
  };

  const chipColors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
  ];

  const renderChips = (items: any[]) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((type, index) => (
        <motion.span
          key={type}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`px-3 py-1 rounded-sm text-sm font-medium transition-all shadow-sm hover:scale-105 hover:shadow-md  ${
            chipColors[index % chipColors.length]
          }`}
        >
          {type}
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="w-full py-4 bg-gradient-to-b from-teal-100 via-purple-100 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl font-medium text-center"
      >
        Welcome From Chord Library
      </motion.h1>

      <p className="text-center mt-6 text-gray-600">
        Your one-stop destination for all your chord needs.
      </p>

      <div className="mt-4 flex justify-center">
        <h2 className="text-lg font-semibold">
          Let's find out what kinds of guitars there are...
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-8 space-y-12">
        {/* Classical Guitars */}
        <div className="flex justify-around items-center text-justify">
          <div className="w-1/2 pr-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Music2 className="text-cyan-500" />
              <h2 className="text-xl font-semibold">Classical Guitars</h2>
            </div>
            <p>
              <b>Classical guitar</b> is a member of the guitar family used in
              the Classical, Romantic, and Modern eras. Some of the most common
              types of classical guitars include:
            </p>
            {renderChips(classiclGuitars)}
            <p className="mt-2">
              <b>Fun Fact: </b>
              <i>{facts.classical}</i>
            </p>
          </div>
          <Image
            loading="lazy"
            src="/guitar/classical-guitar.jpg"
            alt="Classical Guitar"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>

        {/* Acoustic Guitars */}
        <div className="flex justify-around items-center">
          <Image
            loading="lazy"
            src="/guitar/guitar.jpg"
            alt="Acoustic Guitar"
            width={250}
            height={250}
            className="rounded-lg"
          />
          <div className="w-1/2 pl-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Guitar className="text-orange-500" />
              <h2 className="text-xl font-semibold">Acoustic Guitars</h2>
            </div>
            <p>
              <b>Acoustic guitars </b> come in various types, and their
              construction (especially the strings and body shape) dictates
              their sound and the musical genres and purposes they are best
              suited for. Some of the most common types of acoustic guitars
              include:
            </p>
            {renderChips(acousticGuitars)}
            <p className="mt-2">
              <b>Fun Fact: </b>
              <i>{facts.acoustic}</i>
            </p>
          </div>
        </div>

        {/* Electric Guitars */}
        <div className="flex justify-around items-center">
          <div className="w-1/2 pr-4">
            <div className="flex items-center gap-2 mb-2.5">
              <Zap className="text-red-500" />
              <h2 className="text-xl font-semibold">Electric Guitars</h2>
            </div>
            <p>
              <b>An electric guitar</b> uses pickups to convert string
              vibrations into electrical signals, which are then amplified. They
              are used in a wide variety of music genres, including rock, metal,
              jazz, blues, and pop. Some of the most common types of electric
              guitars include:
            </p>
            {renderChips(electricGuitars)}
            <p className="mt-2">
              <b>Fun Fact: </b>
              <i>{facts.electric}</i>
            </p>
          </div>
          <Image
            loading="lazy"
            src="/guitar/electronic-guitar.jpg"
            alt="Electric Guitar"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
