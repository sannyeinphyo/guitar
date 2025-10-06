import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chords = await prisma.chord.findMany();
    return NextResponse.json({message:"There is nothing", chords});
  } catch (error) {
    console.error("Error fetching chords:", error);
    return NextResponse.json(
      { error: "Failed to fetch chords" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
    try{
        const {name, artistId, image} = await request.json();
        const newChord = await prisma.chord.create({
            data:{
                name,
                artistId,
                image,
            }
        });
        return NextResponse.json(newChord);

    }
    catch(error){
        console.error("Error creating chord:", error);
        return NextResponse.json(
          { error: "Failed to create chord" },
          { status: 500 }
        );
    }
}