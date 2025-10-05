"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Input } from "./ui/input";

export default function NavBar() {
  const pathname = usePathname();

  const nav_lists = [
    {
      id: 1,
      name: "Home",
      link: "/home/dashboard",
    },
    { id: 2, name: "Chords", link: "/home/chords" },
    {
      id: 3,
      name: "Songs",
      link: "/home/songs",
    },
    {
      id: 4,
      name: "Contacts",
      link: "/home/constacts",
    },
    {
      id: 5,
      name: "About",
      link: "/home/about",
    },
  ];

  return (
    <>

      <div className="w-full h-16 bg-gray-800 flex justify-between items-center px-8 text-white sticky top-0 z-50">

        <ul className="flex flex-row space-x-8">
          {nav_lists.map((list) => {
            const isActive = pathname.startsWith(list.link);
            return (
              <li key={list.id}>
                <Link
                  href={list.link}
                  className={`
                    p-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "bg-gray-700 text-white"
                        : " hover:bg-gray-700"
                    }
                  `}
                >
                  {list.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-row items-center space-x-4 text-sm font-medium">
          <li>
            <Input placeholder="Search ..." className="bg-gray-700 text-white border-none"/>
          </li>
          <li>
            Profile
          </li>
        </ul>
      </div>
    </>
  );
}
