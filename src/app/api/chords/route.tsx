// app/api/chords/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search")?.toLowerCase() || "";
    const tab = url.searchParams.get("tab") || "chord";

    let where: any = {};

    if (tab === "chord") {
      where = { name: { contains: search, mode: "insensitive" } };
    } else if (tab === "artist") {
      where = { artist: { name: { contains: search, mode: "insensitive" } } };
    }

    const chords = await prisma.chord.findMany({
      where,
      include: { artist: true }, // so we get artist.name in JSON
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(chords);
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
