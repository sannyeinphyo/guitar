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
          whileInView={{ opacity: 1, y: 0 }}
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
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-4xl font-bold text-center"
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

      <main className="max-w-6xl mx-auto mt-8 space-y-12">
        {/* Classical Guitars */}
        <div className="flex justify-around items-center text-justify flex-wrap">
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
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              src="/guitar/classical-guitar.png"
              alt="Classical Guitar"
              width={250}
              height={250}
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Acoustic Guitars */}
        <div className="flex justify-around items-center flex-wrap-reverse text-justify">
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              loading="lazy"
              src="/guitar/guitar.png"
              alt="Acoustic Guitar"
              width={250}
              height={250}
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
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
        <div className="flex justify-around items-center flex-wrap text-justify">
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
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              loading="lazy"
              src="/guitar/electronic-guitar.png"
              alt="Electric Guitar"
              width={250}
              height={250}
              className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
        <div className="w-full border-t border-gray-300 mt-8">
          {/* Decorative horizontal line */}
        </div>
        <aside className="text-center">
          <p className="text-lg italic text-gray-700">
            "Music is the universal language of mankind." - Henry Wadsworth
            Longfellow
          </p>
        </aside>
        <div className="h-16">
          <div className="w-full border-t border-gray-300 mt-8">
            {/* Decorative horizontal line */}
          </div>
        </div>
        <div className="flex justify-around items-center flex-wrap text-justify">
          <div className="w-1/2 pr-4">
            <h2 className="text-xl font-semibold mb-2.5">
              The Romantic Benefits of Learning Guitar Chords
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <b>Heartfelt Connection:</b> Each chord you play becomes a
                whisper from the soul, expressing emotions words cannot capture.
              </li>
              <li>
                <b>Endless Expression:</b> Chords open doors to countless songs,
                letting you serenade love, longing, and joy through melody.
              </li>
              <li>
                <b>Creative Passion:</b> Understanding harmonies invites you to
                compose your own stories — each strum a heartbeat of
                imagination.
              </li>
              <li>
                <b>Emotional Escape:</b> The guitar becomes your confidant,
                turning quiet moments into poetry and sound.
              </li>
              <li>
                <b>Shared Moments:</b> Playing chords lets you connect with
                others — hearts swaying together in rhythm and harmony.
              </li>
            </ul>
          </div>

          <div className="w-1/2 pl-4">
            <h2 className="text-xl font-semibold mb-2.5">
              Benefits of Learning Guitar Chords
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <b>Emotional Connection:</b> Each chord becomes a heartbeat,
                letting your soul speak through gentle strings.
              </li>
              <li>
                <b>Endless Expression:</b> From soft whispers to fiery passion,
                chords give your feelings a voice in every song.
              </li>
              <li>
                <b>Creative Freedom:</b> With every progression, you paint
                emotions, crafting melodies that linger like memories.
              </li>
              <li>
                <b>Pure Joy:</b> The touch of strings brings comfort and
                happiness, turning moments into music.
              </li>
              <li>
                <b>Sharing the Magic:</b> Whether alone or with others, chords
                unite hearts through the language of sound.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-8">
          {/* Decorative horizontal line */}
        </div>

        <div className="w-full flex justify-center ">
          <h2 className="text-2xl font-bold">
            Ready to dive into the world of chords?
          </h2>
        </div>

        <div className="w-full flex justify-center items-center mb-4 ">
          <motion.a
            href="/home/chords"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold mb-4 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Explore Chords Now!
          </motion.a>
        </div>
      </main>
      <footer>
        {" "}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Guitar Chord Library. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
