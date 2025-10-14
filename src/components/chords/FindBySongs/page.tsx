"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Song = { id: number; title: string; artist: string; popularity: number };

export default function ClientTabs({ initialSongs }: { initialSongs: Song[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initial values from URL
  const initialTab = (searchParams.get("tab") as "song" | "artist" | "popularity") || "song";
  const initialSearch = searchParams.get("search") || "";

  const [activeTab, setActiveTab] = useState<"song" | "artist" | "popularity">(initialTab);
  const [items, setItems] = useState<Song[]>(initialSongs);
  const [search, setSearch] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => clearTimeout(handler);
  }, [search]);

  // Fetch data when tab or debounced search changes
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/chords?tab=${activeTab}&search=${debouncedSearch}`);
      const data = await res.json();
      setItems(data);

      // Update URL without full reload
      const params = new URLSearchParams();
      params.set("tab", activeTab);
      if (debouncedSearch) params.set("search", debouncedSearch);
      router.replace(`?${params.toString()}`);
    };

    fetchData();
  }, [activeTab, debouncedSearch]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {["song", "artist", "popularity"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${activeTab === tab ? "bg-blue-500 text-white" : "border"}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab === "song" ? "Find By Song" : tab === "artist" ? "Find By Artist" : "Find By Popularity"}
          </button>
        ))}
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />

      {/* Tab content */}
      {activeTab === "song" && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 rounded">
              🎵 {item.title} — {item.artist}
            </li>
          ))}
        </ul>
      )}

      {activeTab === "artist" && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 rounded">
              👤 {item.artist} — {item.title}
            </li>
          ))}
        </ul>
      )}

      {activeTab === "popularity" && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="p-2 bg-gray-100 rounded">
              ⭐ {item.title} — Popularity: {item.popularity}
            </li>
          ))}
        </ul>
      )}

      {items.length === 0 && <p className="text-gray-500">No results found.</p>}
    </div>
  );
}
