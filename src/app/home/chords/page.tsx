 // app/chords/page.tsx
import ClientTabs from "@/components/chords/ClientTabs";

export default async function ChordsPage() {
 // SSR fetch for first load
  const res = await fetch("http://localhost:3000/api/chords", { cache: "no-store" });
  const initialSongs = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎸 Chords Page</h1>
      <ClientTabs initialSongs={initialSongs} />
    </div>
  );
}
